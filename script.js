const rarityNames = {
  5: "Legendary",
  6: "Mythic",
  7: "Ethereal",
  8: "Celestial",
  9: "Zenith",
  10: "Divine",
  11: "Nil"
};

const rarityColors = {
  7: "#ff69b4",
  8: "#87cefa",
  9: "#4b0082",
  10: "#000000",
  11: "#808080"
};

let storeData = {}, players = {}, globalData = {}, blockIdToName = {}, blockIdToRarity = {};
let globalRankList = [], rarityRankList = [], globalBlocksList = [];
let pageSize = 100, globalPage = 0, rarityPage = 0, blockPage = 0;
let currentRarity = 7;

function format(n) {
  return (n || 0).toLocaleString();
}

async function loadData() {
  try {
    const [dataRes, blockRes, rarityRes] = await Promise.all([
      fetch('https://ore-scraper-production.up.railway.app/api/data').then(r => r.json()),
      fetch('./data/blockid.json').then(r => r.json()),
      fetch('./data/rarity.json').then(r => r.json())
    ]);

    storeData = dataRes;
    players = dataRes.players || {};
    globalData = dataRes.global || { total: 0, blocks: {}, rarities: {} };
    blockIdToName = blockRes;
    blockIdToRarity = rarityRes;

    computeAll();
    renderAll();

    const searchInput = document.getElementById('playerSearchInput');
    if (searchInput && searchInput.value) searchPlayer(searchInput.value);
  } catch (e) { }
}

function applyDenseRank(list) {
  let rank = 0;
  let lastCount = -1;
  list.forEach(item => {
    if (item.count !== lastCount) rank++;
    item.rank = rank;
    lastCount = item.count;
  });
}

function computeAll() {
  globalRankList = Object.entries(players)
    .map(([username, d]) => ({
      username,
      count: Object.entries(d.blocks || {}).filter(([bid]) => (blockIdToRarity[bid] || 0) >= 7).reduce((sum, [_, c]) => sum + c, 0)
    }))
    .filter(p => p.count > 0)
    .sort((a, b) => b.count - a.count);
  applyDenseRank(globalRankList);

  rarityRankList = Object.entries(players)
    .map(([username, d]) => ({
      username,
      count: currentRarity === null ? Object.entries(d.rarities || {}).filter(([rid]) => rid >= 7).reduce((sum, [_, c]) => sum + c, 0) : (d.rarities?.[currentRarity] || 0)
    }))
    .filter(p => p.count > 0)
    .sort((a, b) => b.count - a.count);
  applyDenseRank(rarityRankList);

  globalBlocksList = Object.entries(globalData.blocks || {})
    .map(([bid, count]) => {
      let rarityVal = blockIdToRarity[bid] || 0;
      return { bid, count, rarity: rarityVal };
    })
    .filter(b => b.count > 0 && b.rarity >= 7)
    .sort((a, b) => b.count - a.count);

  globalData.total = Object.entries(globalData.blocks || {})
    .filter(([bid]) => (blockIdToRarity[bid] || 0) >= 7)
    .reduce((sum, [_, c]) => sum + c, 0);
}

function searchPlayer(query) {
  const container = document.getElementById('playerSearchResult');
  if (!query || query.length < 2) {
      container.innerHTML = '<p style="text-align:center; color:#888;">Type name...</p>';
      return;
  }

  const searchName = query.toLowerCase().trim();
  const matches = Object.keys(players).filter(k => k.toLowerCase().includes(searchName));

  if (matches.length === 0) {
      container.innerHTML = `<p style="text-align:center; color:#ff4444;">No players match "${query}"</p>`;
      return;
  }

  let html = '';
  matches.forEach(playerKey => {
      const data = players[playerKey];

      // Only count blocks with rarity >=7
      const totalHighRarity = Object.entries(data.blocks || {})
          .filter(([bid]) => (blockIdToRarity[bid] || 0) >= 7)
          .reduce((sum, [_, count]) => sum + count, 0);

      const gRank = globalRankList.find(p => p.username === playerKey)?.rank || 'N/A';

      html += `
          <div class="player-card">
              <h2 style="margin:0; color:#eee;">${playerKey} <span style="font-size: 0.6em; color: #888;">(#${gRank})</span></h2>
              <p style="margin:5px 0;">Total: <strong>${format(totalHighRarity)}</strong></p>
              <div style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 10px; padding: 10px; background: #111; border-radius: 4px;">`;

      [11,10,9,8,7].forEach(id => {
          const count = data.rarities?.[id] || 0;
          if (count > 0) html += `<span style="color:${rarityColors[id]}; font-weight:bold;">${rarityNames[id]}: ${format(count)}</span>`;
      });

      html += `</div><div class="search-block-list">`;

      Object.entries(data.blocks || {})
          .map(([bid, count]) => ({ bid, count, name: blockIdToName[bid] || `Block ${bid}`, rarity: blockIdToRarity[bid] || 0 }))
          .filter(b => b.rarity >= 7)
          .sort((a, b) => b.rarity - a.rarity || b.count - a.count)
          .forEach(b => {
              const color = rarityColors[b.rarity] || '#eee';
              html += `<div class="search-block-item" style="border-left-color: ${color}"><span style="color:${color}; font-weight:bold;">${b.name}</span> <span style="color:#aaa;">(x${format(b.count)})</span></div>`;
          });

      html += `</div></div>`;
  });

  container.innerHTML = html;
}

function renderGlobalRank() {
  const tbody = document.getElementById('globalRankBody');
  tbody.innerHTML = '';
  const start = globalPage * pageSize;
  globalRankList.slice(start, start + pageSize).forEach(p => {
    const tr = document.createElement('tr');
    tr.className = `player-row rank-${p.rank}`;
    tr.innerHTML = `<td>${p.rank}</td><td>${p.username}</td><td>${format(p.count)}</td>`;
    tbody.appendChild(tr);
  });
}

function renderRarityRank() {
  const tbody = document.getElementById('rarityRankBody');
  tbody.innerHTML = '';
  const start = rarityPage * pageSize;
  rarityRankList.slice(start, start + pageSize).forEach(p => {
    const tr = document.createElement('tr');
    tr.className = `player-row rank-${p.rank}`;
    tr.innerHTML = `<td>${p.rank}</td><td>${p.username}</td><td>${format(p.count)}</td>`;
    tbody.appendChild(tr);
  });
}

function renderGlobalBlocks() {
  const tbody = document.getElementById('globalBlocksBody');
  tbody.innerHTML = '';
  const start = blockPage * pageSize;

  globalBlocksList.slice(start, start + pageSize).forEach((b, i) => {
    const tr = document.createElement('tr');
    const name = blockIdToName[b.bid] || `Block ${b.bid}`;
    const rName = rarityNames[b.rarity] || "Common";
    tr.innerHTML = `<td>${start + i + 1}</td><td>${name}</td><td>${rName}</td><td>${format(b.count)}</td>`;

    tr.style.cursor = "pointer";
    const dropdownRow = document.createElement('tr');
    dropdownRow.style.display = 'none';
    const dropdownCell = document.createElement('td');
    dropdownCell.colSpan = 4;
    dropdownCell.style.background = "#111";
    dropdownCell.style.color = "#eee";
    dropdownCell.style.padding = "5px 10px";
    dropdownCell.style.borderTop = "1px solid #333";
    dropdownCell.style.fontSize = "0.9em";
    dropdownRow.appendChild(dropdownCell);

    tr.onclick = () => {
      if (dropdownRow.style.display === 'none') {
        const miners = Object.entries(players)
          .map(([username, pdata]) => ({ username, count: pdata.blocks?.[b.bid] || 0 }))
          .filter(p => p.count > 0)
          .sort((a, z) => z.count - a.count)
          .slice(0, 10);

        if (miners.length === 0) dropdownCell.textContent = "no one has mined this block yet";
        else dropdownCell.innerHTML = miners.map((p, idx) => `#${idx + 1} Miner - @${p.username} (x${format(p.count)})`).join('<br>');

        dropdownRow.style.display = '';
      } else dropdownRow.style.display = 'none';
    };

    tbody.appendChild(tr);
    tbody.appendChild(dropdownRow);
  });
}

function renderStats() {
  const container = document.getElementById('statsContent');
  container.innerHTML = `<p>Total Players: <strong>${format(Object.keys(players).length)}</strong></p><p>Total Blocks Mined: <strong>${format(globalData.total)}</strong></p>`;
}

function renderAll() {
  renderGlobalRank();
  renderRarityRank();
  renderGlobalBlocks();
  renderStats();
}

const sel = document.getElementById('raritySelect');
sel.innerHTML = `<option value="7">Ethereal</option>` +
  Object.entries({ 8: "Celestial", 9: "Zenith", 10: "Divine", 11: "Nil" }).map(([id, name]) => `<option value="${id}">${name}</option>`).join('');

sel.addEventListener('change', e => {
  currentRarity = parseInt(e.target.value);
  rarityPage = 0;
  computeAll();
  renderRarityRank();
});

document.getElementById('playerSearchInput').oninput = e => searchPlayer(e.target.value);
document.getElementById('prevGlobal').onclick = () => { if (globalPage > 0) { globalPage--; renderGlobalRank(); } };
document.getElementById('nextGlobal').onclick = () => { if ((globalPage + 1) * pageSize < globalRankList.length) { globalPage++; renderGlobalRank(); } };
document.getElementById('prevRarity').onclick = () => { if (rarityPage > 0) { rarityPage--; renderRarityRank(); } };
document.getElementById('nextRarity').onclick = () => { if ((rarityPage + 1) * pageSize < rarityRankList.length) { rarityPage++; renderRarityRank(); } };
document.getElementById('prevBlocks').onclick = () => { if (blockPage > 0) { blockPage--; renderGlobalBlocks(); } };
document.getElementById('nextBlocks').onclick = () => { if ((blockPage + 1) * pageSize < globalBlocksList.length) { blockPage++; renderGlobalBlocks(); } };

document.querySelectorAll('.tab').forEach(t => { t.onclick = () => { document.querySelectorAll('.tab,.tabContent').forEach(el => el.classList.remove('active')); t.classList.add('active'); document.getElementById(t.dataset.tab).classList.add('active'); }; });

window.onload = () => { loadData(); setInterval(loadData, 30000); };
