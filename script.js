const rarityNames = {
  5: "Legendary",
  6: "Mythic",
  7: "Ethereal",
  8: "Celestial",
  9: "Zenith",
  10: "Divine",
  11: "Nil"
}

const rarityColors = {
  7: "#ff69b4",
  8: "#87cefa",
  9: "#4b0082",
  10: "#000000",
  11: "#808080"
}

const mw_data = "https://raw.githubusercontent.com/claykrs/mw_data/refs/heads/main/"

let storeData = {}, players = {}, globalData = {}, blockIdToName = {}, blockIdToRarity = {}, blockNameToId = {}
let globalRankList = [], rarityRankList = [], dailyRankList = [], globalBlocksList = [], filteredBlocksList = []
let pageSize = 100, globalPage = 0, rarityPage = 0, dailyPage = 0, blockPage = 0
let currentRarity = 7, currentDailyRarity = 7, currentTimeFrame = 1

function format(n) {
  return (n || 0).toLocaleString()
}

async function loadData() {
  try {
    const [blockRes, rarityRes] = await Promise.all([
      fetch(`${mw_data}/blockid.json`).then(r => r.json()),
      fetch(`${mw_data}/rarity.json`).then(r => r.json())
    ]);    

    let fullJson = "";
    let partIndex = 0;

    while (true) {
      try {
        const res = await fetch(`${mw_data}/chunks/part_${partIndex}`);
        if (res.status === 404) break;
        if (!res.ok) throw new Error(`failed to fetch chunk ${partIndex}: ${res.status}`);
        fullJson += await res.text();
        partIndex++;
      } catch (e) {
        console.error(`error fetching chunk ${partIndex}:`, e.message);
        break;
      }
    }

    if (!fullJson) return;
    const dataRes = JSON.parse(fullJson);

    storeData = dataRes;
    players = dataRes.players || {};
    globalData = dataRes.global || { total: 0, blocks: {}, rarities: {} };
    blockIdToName = blockRes;
    blockIdToRarity = rarityRes;

    blockNameToId = {}
    for (const [id, name] of Object.entries(blockIdToName)) blockNameToId[name] = id

    computeAll();
    renderAll();

    const searchInput = document.getElementById('playerSearchInput');
    if (searchInput && searchInput.value) searchPlayer(searchInput.value);
  } catch (e) {
    console.error(e);
  }
}

function applyDenseRank(list) {
  let rank = 0
  let lastCount = -1
  list.forEach(item => {
    if (item.count !== lastCount) rank++
    item.rank = rank
    lastCount = item.count
  })
}

function computeAll() {
  const now = Date.now()
  const dayMs = 24 * 60 * 60 * 1000

  globalRankList = Object.entries(players)
    .map(([username, d]) => ({
      username,
      count: Object.entries(d.blocks || {}).filter(([name]) => {
        const id = blockNameToId[name]
        return (blockIdToRarity[id] || 0) >= 7
      }).reduce((sum, [_, c]) => sum + c, 0)
    }))
    .filter(p => p.count > 0)
    .sort((a, b) => b.count - a.count)
  applyDenseRank(globalRankList)

  rarityRankList = Object.entries(players)
    .map(([username, d]) => ({
      username,
      count: d.rarities?.[currentRarity] || 0
    }))
    .filter(p => p.count > 0)
    .sort((a, b) => b.count - a.count)
  applyDenseRank(rarityRankList)

  dailyRankList = Object.entries(players)
    .map(([username, d]) => {
      const dailyBuckets = {}
      const timeLimit = currentTimeFrame * dayMs
      ;(d.discoveries || []).forEach(disc => {
        const discTime = new Date(disc.ts).getTime()
        if (disc.r === currentDailyRarity && (currentTimeFrame === 0 || (now - discTime) <= timeLimit)) {
          const dateKey = disc.ts.split('T')[0]
          dailyBuckets[dateKey] = (dailyBuckets[dateKey] || 0) + 1
        }
      })
      const counts = Object.values(dailyBuckets)
      const maxDayCount = counts.length > 0 ? Math.max(...counts) : 0
      return { username, count: maxDayCount }
    })
    .filter(p => p.count > 0)
    .sort((a, b) => b.count - a.count)
  applyDenseRank(dailyRankList)

  globalBlocksList = Object.entries(globalData.blocks || {})
    .map(([name, count]) => ({ name, count, rarity: 0 }))
    .map(b => {
      b.rarity = blockIdToRarity[blockNameToId[b.name]] || 0
      return b
    })
    .filter(b => b.count > 0 && b.rarity >= 7)
    .sort((a, b) => b.count - a.count)
  
  filterBlocks("")

  globalData.total = Object.entries(globalData.blocks || {})
    .filter(([name]) => {
      const id = blockNameToId[name]
      return (blockIdToRarity[id] || 0) >= 7
    })
    .reduce((sum, [_, c]) => sum + c, 0)
}

function filterBlocks(query) {
  const q = query.toLowerCase()
  filteredBlocksList = globalBlocksList.filter(b => b.name.toLowerCase().includes(q))
}

function searchPlayer(query) {
  const container = document.getElementById('playerSearchResult')
  if (!query || query.length < 2) {
    container.innerHTML = '<p style="text-align:center; color:#888;">Type name...</p>'
    return
  }
  const searchName = query.toLowerCase().trim()
  const matches = Object.keys(players).filter(k => k.toLowerCase().includes(searchName))
  if (matches.length === 0) {
    container.innerHTML = `<p style="text-align:center; color:#ff4444;">No players match "${query}"</p>`
    return
  }
  let html = ''
  matches.forEach(playerKey => {
    const data = players[playerKey]
    const totalHighRarity = Object.entries(data.blocks || {})
      .filter(([name]) => {
        const id = blockNameToId[name]
        return (blockIdToRarity[id] || 0) >= 7
      })
      .reduce((sum, [_, count]) => sum + count, 0)
    const gRank = globalRankList.find(p => p.username === playerKey)?.rank || 'N/A'
    
    html += `<div class="player-card"><h2 style="margin:0; color:#eee;">${playerKey} <span style="font-size: 0.6em; color: #888;">(#${gRank})</span></h2><p style="margin:5px 0;">Total: <strong>${format(totalHighRarity)}</strong></p><div style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 10px; padding: 10px; background: #111; border-radius: 4px;">`
    ;[11,10,9,8,7].forEach(id => {
      const count = data.rarities?.[id] || 0
      if (count > 0) html += `<span style="color:${rarityColors[id]}; font-weight:bold;">${rarityNames[id]}: ${format(count)}</span>`
    })
    html += `</div><div class="search-block-list">`
    Object.entries(data.blocks || {})
      .map(([name, count]) => {
        const id = blockNameToId[name]
        return { name, count, rarity: blockIdToRarity[id] || 0 }
      })
      .filter(b => b.rarity >= 7)
      .sort((a, b) => b.rarity - a.rarity || b.count - a.count)
      .forEach(b => {
        const color = rarityColors[b.rarity] || '#eee'
        html += `<div class="search-block-item" style="border-left-color: ${color}"><span style="color:${color}; font-weight:bold;">${b.name}</span> <span style="color:#aaa;">(x${format(b.count)})</span></div>`
      })
    html += `</div></div>`
  })
  container.innerHTML = html
}

function renderTable(id, list, page) {
  const tbody = document.getElementById(id)
  if (!tbody) return
  const frag = document.createDocumentFragment()
  const start = page * pageSize
  list.slice(start, start + pageSize).forEach(p => {
    const tr = document.createElement('tr')
    tr.className = `player-row rank-${p.rank}`
    tr.innerHTML = `<td>${p.rank}</td><td>${p.username}</td><td>${format(p.count)}</td>`
    frag.appendChild(tr)
  })
  tbody.innerHTML = ''
  tbody.appendChild(frag)
}

function renderGlobalBlocks() {
  const tbody = document.getElementById('globalBlocksBody')
  if (!tbody) return
  const frag = document.createDocumentFragment()
  const start = blockPage * pageSize
  filteredBlocksList.slice(start, start + pageSize).forEach((b, i) => {
    const tr = document.createElement('tr')
    const name = b.name
    tr.innerHTML = `<td>${start + i + 1}</td><td>${name}</td><td>${rarityNames[b.rarity] || "?"}</td><td>${format(b.count)}</td>`
    tr.onclick = () => {
      const next = tr.nextSibling
      if (next && next.classList.contains('dropdown')) {
        next.style.display = next.style.display === 'none' ? '' : 'none'
      } else {
        const drop = document.createElement('tr')
        drop.className = 'dropdown'
        const miners = Object.entries(players)
          .map(([u, d]) => ({ u, c: d.blocks?.[b.name] || 0 }))
          .filter(p => p.c > 0).sort((a, z) => z.c - a.c).slice(0, 10)
        const cell = document.createElement('td')
        cell.colSpan = 4
        cell.style.background = "#111"
        cell.innerHTML = miners.length ? miners.map((p, idx) => `#${idx + 1} Miner - @${p.u} (x${format(p.c)})`).join('<br>') : "No miners"
        drop.appendChild(cell)
        tr.after(drop)
      }
    }
    frag.appendChild(tr)
  })
  tbody.innerHTML = ''
  tbody.appendChild(frag)
}

function renderStats() {
  const container = document.getElementById('statsContent')
  if (container) container.innerHTML = `<p>Total Players: <strong>${format(Object.keys(players).length)}</strong></p><p>Total Blocks Mined: <strong>${format(globalData.total)}</strong></p>`
}

function renderAll() {
  renderTable('globalRankBody', globalRankList, globalPage)
  renderTable('rarityRankBody', rarityRankList, rarityPage)
  renderTable('dailyLeaderboardBody', dailyRankList, dailyPage)
  renderGlobalBlocks()
  renderStats()
  
  const hdr = document.getElementById('dailyScoreHeader')
  if (hdr) hdr.textContent = currentTimeFrame === 1 ? "Blocks Mined (24h)" : "Best Day (Peak)"
}

function setupSelect(id, callback) {
  const sel = document.getElementById(id)
  if (!sel) return
  sel.innerHTML = `<option value="7">Ethereal</option>` + [8, 9, 10, 11].map(v => `<option value="${v}">${rarityNames[v]}</option>`).join('')
  sel.addEventListener('change', e => callback(parseInt(e.target.value)))
}

setupSelect('raritySelect', v => { currentRarity = v; rarityPage = 0; computeAll(); renderTable('rarityRankBody', rarityRankList, rarityPage) })
setupSelect('dailyRaritySelect', v => { currentDailyRarity = v; dailyPage = 0; computeAll(); renderTable('dailyLeaderboardBody', dailyRankList, dailyPage) })

document.getElementById('timeFrameSelect').onchange = e => { currentTimeFrame = parseInt(e.target.value); dailyPage = 0; computeAll(); renderAll() }
document.getElementById('blockSearchInput').oninput = e => { filterBlocks(e.target.value); blockPage = 0; renderGlobalBlocks() }
document.getElementById('playerSearchInput').oninput = e => searchPlayer(e.target.value)
document.getElementById('prevGlobal').onclick = () => { if (globalPage > 0) { globalPage--; renderTable('globalRankBody', globalRankList, globalPage) } }
document.getElementById('nextGlobal').onclick = () => { if ((globalPage + 1) * pageSize < globalRankList.length) { globalPage++; renderTable('globalRankBody', globalRankList, globalPage) } }
document.getElementById('prevRarity').onclick = () => { if (rarityPage > 0) { rarityPage--; renderTable('rarityRankBody', rarityRankList, rarityPage) } }
document.getElementById('nextRarity').onclick = () => { if ((rarityPage + 1) * pageSize < rarityRankList.length) { rarityPage++; renderTable('rarityRankBody', rarityRankList, rarityPage) } }
document.getElementById('prevDaily').onclick = () => { if (dailyPage > 0) { dailyPage--; renderTable('dailyLeaderboardBody', dailyRankList, dailyPage) } }
document.getElementById('nextDaily').onclick = () => { if ((dailyPage + 1) * pageSize < dailyRankList.length) { dailyPage++; renderTable('dailyLeaderboardBody', dailyRankList, dailyPage) } }
document.getElementById('prevBlocks').onclick = () => { if (blockPage > 0) { blockPage--; renderGlobalBlocks() } }
document.getElementById('nextBlocks').onclick = () => { if ((blockPage + 1) * pageSize < filteredBlocksList.length) { blockPage++; renderGlobalBlocks() } }

document.querySelectorAll('.tab').forEach(t => { 
  t.onclick = () => { 
    document.querySelectorAll('.tab,.tabContent').forEach(el => el.classList.remove('active'))
    t.classList.add('active')
    const content = document.getElementById(t.dataset.tab)
    if (content) content.classList.add('active')
    if (t.dataset.tab === 'globalRank') renderTable('globalRankBody', globalRankList, globalPage)
    else if (t.dataset.tab === 'rarityRank') renderTable('rarityRankBody', rarityRankList, rarityPage)
    else if (t.dataset.tab === 'dailyLeaderboard') renderTable('dailyLeaderboardBody', dailyRankList, dailyPage)
    else if (t.dataset.tab === 'blocks') renderGlobalBlocks()
  } 
})

window.onload = () => { loadData(); setInterval(loadData, 10000) }
