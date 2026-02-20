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
let incomingList = [], incomingPage = 0, incomingPageSize = 100
let pageSize = 100, globalPage = 0, rarityPage = 0, dailyPage = 0, blockPage = 0
let currentRarity = 7, currentDailyRarity = 7, currentTimeFrame = 1

let filteredIncomingList = []
filteredIncomingList = incomingList.slice()

function format(n) {
  return (n || 0).toLocaleString()
}
async function loadData() {
  try {
    const [blockRes, rarityRes] = await Promise.all([
      fetch(`${mw_data}/blockid.json`).then(r => r.json()),
      fetch(`${mw_data}/rarity.json`).then(r => r.json())
    ])
    let fullJson = ""
    let partIndex = 0
    while (true) {
      try {
        const res = await fetch(`${mw_data}/chunks/part_${partIndex}`)
        if (res.status === 404) break
        if (!res.ok) throw new Error(`failed to fetch chunk ${partIndex}: ${res.status}`)
        fullJson += await res.text()
        partIndex++
      } catch (e) {
        console.error(`error fetching chunk ${partIndex}:`, e.message)
        break
      }
    }
    if (!fullJson) return
    const dataRes = JSON.parse(fullJson)
    storeData = dataRes
    players = dataRes.players || {}
    globalData = dataRes.global || { total: 0, blocks: {}, rarities: {} }
    blockIdToName = blockRes
    blockIdToRarity = rarityRes
    blockNameToId = {}
    Object.entries(blockIdToName).forEach(([id, name]) => blockNameToId[name] = id)
    computeAll()
    renderAll()
    const searchInput = document.getElementById('playerSearchInput')
    if (searchInput && searchInput.value) searchPlayer(searchInput.value)
  } catch (e) {
    console.error(e)
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
    .map(([username, d]) => {
      const entries = Object.entries(d.blocks || {})
      const count = entries.filter(([name]) => {
        const id = blockNameToId[name]
        return (blockIdToRarity[id] || 0) >= 7
      }).reduce((sum, [_, c]) => sum + c, 0)
      return { username, count }
    })
    .filter(p => p.count > 0)
    .sort((a, b) => b.count - a.count)
  applyDenseRank(globalRankList)
  rarityRankList = Object.entries(players)
    .map(([username, d]) => {
      const count = (d.rarities && d.rarities[currentRarity]) || 0
      return { username, count }
    })
    .filter(p => p.count > 0)
    .sort((a, b) => b.count - a.count)
  applyDenseRank(rarityRankList)
  dailyRankList = Object.entries(players)
    .map(([username, d]) => {
      const dailyBuckets = {}
      const arr = d.discoveries || []
      const timeLimit = currentTimeFrame * dayMs
      arr.forEach(disc => {
        const discTime = new Date(disc.ts).getTime()
        if (disc.r === currentDailyRarity && (currentTimeFrame === 0 || (now - discTime) <= timeLimit)) {
          const dateKey = disc.ts.split('T')[0]
          dailyBuckets[dateKey] = (dailyBuckets[dateKey] || 0) + 1
        }
      })
      const counts = Object.values(dailyBuckets)
      const maxDayCount = counts.length > 0 ? Math.max.apply(null, counts) : 0
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
  incomingList = []
  Object.entries(players).forEach(([username, d]) => {
    const arr = d.discoveries || []
    const usernameLower = username.toLowerCase()
    arr.forEach(discovery => {
      const blockName = discovery.name
      const id = blockNameToId[blockName]
      const rarity = blockIdToRarity[id] || 0
      incomingList.push({
        username,
        usernameLower,
        rarity,
        rarityLabelLower: (rarityNames[rarity] || '').toLowerCase(),
        block: blockName,
        blockLower: blockName.toLowerCase(),
        ts: discovery.ts,
        tsMs: new Date(discovery.ts).getTime()
      })
    })
  })
  incomingList.sort((a, b) => b.tsMs - a.tsMs)
}
const _origComputeAll = computeAll
computeAll = function() {
  _origComputeAll()
  filteredIncomingList = incomingList.slice()
  const q = (document.getElementById('blockSearchInput')?.value || '').trim()
  if (q) filterIncoming(q)
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
    const gRankObj = globalRankList.find(p => p.username === playerKey)
    const gRank = (gRankObj && gRankObj.rank) || 'N/A'
    html += `<div class="player-card"><h2 style="margin:0; color:#eee;">${playerKey} <span style="font-size: 0.6em; color: #888;">(#${gRank})</span></h2><p style="margin:5px 0;">Total: <strong>${format(totalHighRarity)}</strong></p><div style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 10px; padding: 10px; background: #111; border-radius: 4px;">`
    const raritiesArr = [11, 10, 9, 8, 7]
    raritiesArr.forEach(id => {
      const count = (data.rarities && data.rarities[id]) || 0
      if (count > 0) html += `<span style="color:${rarityColors[id]}; font-weight:bold;">${rarityNames[id]}: ${format(count)}</span>`
    })
    html += `</div><div class="search-block-list">`
    const blockArr = Object.entries(data.blocks || {})
      .map(([name, count]) => {
        const id = blockNameToId[name]
        return { name, count, rarity: blockIdToRarity[id] || 0 }
      })
      .filter(b => b.rarity >= 7)
      .sort((a, b) => b.rarity - a.rarity || b.count - a.count)
    blockArr.forEach(b => {
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
    tr.innerHTML = `
      <td>${start + i + 1}</td>
      <td>${name}</td>
      <td style="color:${rarityColors[b.rarity] || '#eee'}">${rarityNames[b.rarity] || "?"}</td>
      <td>${format(b.count)}</td>
    `
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
function filterIncoming(query) {
  const q = (query || '').toLowerCase().trim()
  if (!q) {
    filteredIncomingList = incomingList.slice()
    incomingPage = 0
    renderIncoming()
    return
  }
  const next = []
  for (let i = 0; i < incomingList.length; i++) {
    const it = incomingList[i]
    let score = 0
    if (it.rarityLabelLower.includes(q)) score += 3
    if (it.usernameLower.includes(q)) score += 2
    if (it.blockLower.includes(q)) score += 1
    if (score > 0) next.push({ ...it, score })
  }
  next.sort((a, b) => b.score - a.score || b.tsMs - a.tsMs)
  filteredIncomingList = next
  incomingPage = 0
  renderIncoming()
}
function renderIncoming() {
  const tbody = document.getElementById('incomingBody')
  if (!tbody) return
  const total = filteredIncomingList.length
  const lastPage = Math.max(0, Math.ceil(total / incomingPageSize) - 1)
  if (incomingPage > lastPage) incomingPage = lastPage
  const frag = document.createDocumentFragment()
  const start = incomingPage * incomingPageSize
  const pageItems = filteredIncomingList.slice(start, start + incomingPageSize)
  pageItems.forEach((it, i) => {
    const tr = document.createElement('tr')
    const rarityLabel = rarityNames[it.rarity] || it.rarity || '?'
    const color = rarityColors[it.rarity] || '#eee'
    const ts = new Date(it.ts).toLocaleString()
    tr.innerHTML = `
      <td>${start + i + 1}</td>
      <td>${it.username}</td>
      <td style="color:${color};">${rarityLabel}</td>
      <td>${it.block}</td>
      <td style="color:#aaa; white-space:nowrap;">${ts}</td>
    `
    frag.appendChild(tr)
  })
  tbody.innerHTML = ''
  tbody.appendChild(frag)
}
const blockSearchInputEl = document.getElementById('blockSearchInput')
if (blockSearchInputEl) {
  blockSearchInputEl.oninput = e => {
    const query = e.target.value
    const incomingVisible = document.getElementById('incomingContainer')?.style.display !== 'none'
    if (incomingVisible) filterIncoming(query)
    else {
      filterBlocks(query)
      blockPage = 0
      renderGlobalBlocks()
    }
  }
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
  if (document.getElementById('incomingContainer')?.style.display !== 'none') renderIncoming()
}

const lastUpdateDiv = document.getElementById('lastUpdate')
function updateLastGit() {
  if (!storeData.global?.lastGitUpdate) return
  const now = Date.now()
  const diff = now - new Date(storeData.global.lastGitUpdate).getTime()
  let text = ''
  if (diff < 60000) text = Math.floor(diff / 1000) + ' seconds ago'
  else if (diff < 3600000) text = Math.floor(diff / 60000) + ' minutes ago'
  else if (diff < 86400000) text = Math.floor(diff / 3600000) + ' hours ago'
  else text = Math.floor(diff / 86400000) + ' days ago'
  lastUpdateDiv.textContent = 'last updated: ' + text
}

setInterval(updateLastGit, 1000)
updateLastGit()

function setupSelect(id, callback) {
  const sel = document.getElementById(id)
  if (!sel) return
  sel.innerHTML = `<option value="7">Ethereal</option>` + [8, 9, 10, 11].map(v => `<option value="${v}">${rarityNames[v]}</option>`).join('')
  sel.addEventListener('change', e => callback(parseInt(e.target.value)))
}
setupSelect('raritySelect', v => { currentRarity = v; rarityPage = 0; computeAll(); renderTable('rarityRankBody', rarityRankList, rarityPage) })
setupSelect('dailyRaritySelect', v => { currentDailyRarity = v; dailyPage = 0; computeAll(); renderTable('dailyLeaderboardBody', dailyRankList, dailyPage) })
document.getElementById('timeFrameSelect').onchange = e => { currentTimeFrame = parseInt(e.target.value); dailyPage = 0; computeAll(); renderAll() }
document.getElementById('playerSearchInput').oninput = e => searchPlayer(e.target.value)
document.getElementById('prevGlobal').onclick = () => { if (globalPage > 0) { globalPage--; renderTable('globalRankBody', globalRankList, globalPage) } }
document.getElementById('nextGlobal').onclick = () => { if ((globalPage + 1) * pageSize < globalRankList.length) { globalPage++; renderTable('globalRankBody', globalRankList, globalPage) } }
document.getElementById('prevRarity').onclick = () => { if (rarityPage > 0) { rarityPage--; renderTable('rarityRankBody', rarityRankList, rarityPage) } }
document.getElementById('nextRarity').onclick = () => { if ((rarityPage + 1) * pageSize < rarityRankList.length) { rarityPage++; renderTable('rarityRankBody', rarityRankList, rarityPage) } }
document.getElementById('prevDaily').onclick = () => { if (dailyPage > 0) { dailyPage--; renderTable('dailyLeaderboardBody', dailyRankList, dailyPage) } }
document.getElementById('nextDaily').onclick = () => { if ((dailyPage + 1) * pageSize < dailyRankList.length) { dailyPage++; renderTable('dailyLeaderboardBody', dailyRankList, dailyPage) } }
document.getElementById('prevBlocks').onclick = () => { if (blockPage > 0) { blockPage--; renderGlobalBlocks() } }
document.getElementById('nextBlocks').onclick = () => { if ((blockPage + 1) * pageSize < filteredBlocksList.length) { blockPage++; renderGlobalBlocks() } }
document.getElementById('globalBlocks_tab_global').onclick = () => {
  document.getElementById('globalBlocks_tab_global').classList.add('active')
  document.getElementById('globalBlocks_tab_incoming').classList.remove('active')
  document.getElementById('globalBlocksContainer').style.display = ''
  document.getElementById('incomingContainer').style.display = 'none'
  renderGlobalBlocks()
}
document.getElementById('globalBlocks_tab_incoming').onclick = () => {
  document.getElementById('globalBlocks_tab_incoming').classList.add('active')
  document.getElementById('globalBlocks_tab_global').classList.remove('active')
  document.getElementById('globalBlocksContainer').style.display = 'none'
  document.getElementById('incomingContainer').style.display = ''
  incomingPage = 0
  renderIncoming()
}
document.getElementById('prevIncoming').onclick = () => { if (incomingPage > 0) { incomingPage--; renderIncoming() } }
document.getElementById('nextIncoming').onclick = () => { if ((incomingPage + 1) * incomingPageSize < filteredIncomingList.length) { incomingPage++; renderIncoming() } }
document.querySelectorAll('.tab').forEach(t => {
  t.onclick = () => {
    document.querySelectorAll('.tab,.tabContent').forEach(el => el.classList.remove('active'))
    t.classList.add('active')
    const content = document.getElementById(t.dataset.tab)
    if (content) content.classList.add('active')
    if (t.dataset.tab === 'globalRank') renderTable('globalRankBody', globalRankList, globalPage)
    else if (t.dataset.tab === 'rarityRank') renderTable('rarityRankBody', rarityRankList, rarityPage)
    else if (t.dataset.tab === 'dailyLeaderboard') renderTable('dailyLeaderboardBody', dailyRankList, dailyPage)
    else if (t.dataset.tab === 'globalBlocks') renderGlobalBlocks()
  }
})
function updateLastUpdatedDisplay() {
  const el = document.getElementById('lastUpdated')
  if (!el) return
  const last = (storeData && storeData.global && storeData.global.lastGitUpdate) || Date.now()
  const delta = Math.max(0, Date.now() - last)
  const s = Math.floor(delta / 1000)
  const m = Math.floor(s / 60)
  const h = Math.floor(m / 60)
  let text = 'last updated: '
  if (h > 0) text += `${h} hr ${m % 60} min ago`
  else if (m > 0) text += `${m} min ${s % 60} sec ago`
  else text += `${s} sec ago`
  el.textContent = text
}
window.onload = () => {
  loadData()
  setInterval(loadData, 30000)
  updateLastUpdatedDisplay()
  setInterval(updateLastUpdatedDisplay, 15000)
}
