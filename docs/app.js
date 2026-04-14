(function () {
  const data = window.CATALOG_DATA;
  if (!data) return;

  const PAGE_SIZE = 30;

  // ── DOM refs ────────────────────────────────────────────────────
  const searchInput = document.getElementById("search");
  const countEl = document.getElementById("count");
  const tagLegendEl = document.getElementById("tagLegend");
  const statsGridEl = document.getElementById("statsGrid");
  const filterBarEl = document.getElementById("filterBar");
  const activeFilterChipsEl = document.getElementById("activeFilterChips");
  const resultsGridEl = document.getElementById("resultsGrid");
  const paginationEl = document.getElementById("pagination");
  const promptBodyEl = document.getElementById("promptBody");
  const promptOutputEl = document.getElementById("promptOutput");
  const copyPromptBtnEl = document.getElementById("copyPromptBtn");
  const clearSelectionBtnEl = document.getElementById("clearSelectionBtn");
  const selectionCountEl = document.getElementById("selectionCount");

  // Site-copy elements
  const elMap = {};
  [
    "siteEyebrow", "siteTitle", "siteSubtitle", "siteAudience",
    "howToUseTitle", "howToUseText", "scopeTitle", "scopeText",
    "searchLabel", "legendTitle", "legendNote", "footerContent",
    "selectionTitle", "selectionText", "selectionCountLabel",
    "resultsTitle", "resultsText"
  ].forEach((id) => { elMap[id] = document.getElementById(id); });

  // ── Data setup ──────────────────────────────────────────────────
  const items = data.entries.map((entry, i) => ({ ...entry, key: `${entry.name}::${i}` }));
  const itemMap = new Map(items.map((item) => [item.key, item]));
  const dimMap = new Map(data.tagDimensions.map((d) => [d.id, d]));

  function getDimValueLabel(dimId, valueId) {
    const dim = dimMap.get(dimId);
    if (!dim) return valueId;
    const f = dim.values.find((v) => v.id === valueId);
    return f ? f.label : valueId;
  }

  function getDimEmoji(dimId) {
    const dim = dimMap.get(dimId);
    return dim ? dim.emoji : "";
  }

  // ── State ───────────────────────────────────────────────────────
  const state = {
    query: "",
    page: 0,
    selectedKeys: new Set(),
    selectedTargets: new Set(),
    selectedTechniques: new Set(),
    selectedForms: new Set(),
    selectedPlatforms: new Set(),
    openDropdown: null  // which filter dropdown is open
  };

  // ── Helpers ─────────────────────────────────────────────────────
  function escapeHtml(v) {
    return String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;");
  }

  function getTag(id) { return data.tags.find((t) => t.id === id); }
  function getTagLabel(id) { const t = getTag(id); return t ? t.label : id; }

  function debounce(fn, ms) {
    let t; return function (...a) { clearTimeout(t); t = setTimeout(() => fn.apply(this, a), ms); };
  }

  // ── Matching ────────────────────────────────────────────────────
  function dimMatch(vals, set) {
    if (set.size === 0) return true;
    if (!vals || vals.length === 0) return false;
    return vals.some((v) => set.has(v));
  }

  function matchesFilters(item, excludeDim) {
    if (excludeDim !== "target" && !dimMatch(item.target, state.selectedTargets)) return false;
    if (excludeDim !== "technique" && !dimMatch(item.technique, state.selectedTechniques)) return false;
    if (excludeDim !== "form" && !dimMatch(item.form, state.selectedForms)) return false;
    if (excludeDim !== "platform" && state.selectedPlatforms.size > 0 &&
        !item.tags.some((t) => state.selectedPlatforms.has(t))) return false;

    const q = state.query.trim().toLowerCase();
    if (q) {
      const hay = [
        item.name, item.desc, ...(item.tags || []),
        ...(item.target || []).map((v) => getDimValueLabel("target", v)),
        ...(item.technique || []).map((v) => getDimValueLabel("technique", v)),
        ...(item.form || []).map((v) => getDimValueLabel("form", v))
      ].join(" ").toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  }

  function getVisible() { return items.filter((i) => matchesFilters(i)); }

  // ── Cross-filtered counts ───────────────────────────────────────
  function dimCounts(dimId) {
    const dim = dimMap.get(dimId);
    if (!dim) return new Map();
    return new Map(dim.values.map((v) => [
      v.id,
      items.filter((i) => (i[dimId] || []).includes(v.id) && matchesFilters(i, dimId)).length
    ]));
  }

  function platformCounts() {
    return new Map(data.tags.map((t) => [
      t.id,
      items.filter((i) => i.tags.includes(t.id) && matchesFilters(i, "platform")).length
    ]));
  }

  // ── Site copy ───────────────────────────────────────────────────
  function applySiteCopy() {
    const md = document.querySelector('meta[name="description"]');
    document.title = data.repo.name;
    if (md && data.site.metaDescription) md.setAttribute("content", data.site.metaDescription);

    elMap.siteEyebrow.textContent = data.site.eyebrow;
    elMap.siteTitle.textContent = data.site.title;
    elMap.siteSubtitle.textContent = data.site.subtitle;
    elMap.siteAudience.textContent = data.site.audience;
    elMap.howToUseTitle.textContent = data.site.howToUseTitle;
    elMap.howToUseText.textContent = data.site.howToUseText;
    elMap.scopeTitle.textContent = data.site.scopeTitle;
    elMap.scopeText.textContent = data.site.scopeText;
    elMap.searchLabel.textContent = data.site.searchLabel;
    searchInput.placeholder = data.site.searchPlaceholder;
    elMap.legendTitle.textContent = data.site.legendTitle;
    elMap.legendNote.textContent = data.site.legendNote;
    elMap.selectionTitle.textContent = data.site.selectionTitle;
    elMap.selectionText.textContent = data.site.selectionEmpty;
    elMap.selectionCountLabel.textContent = data.site.selectionCountLabel;
    copyPromptBtnEl.textContent = data.site.copyPromptLabel;
    clearSelectionBtnEl.textContent = data.site.clearSelectionLabel;
    elMap.resultsTitle.textContent = data.site.resultsTitle;
    elMap.resultsText.textContent = data.site.resultsText;
    elMap.footerContent.innerHTML = `<p>Contributions welcome · <a href="${escapeHtml(data.repo.githubUrl)}">View on GitHub</a></p>`;
  }

  function renderStats() {
    const ut = new Set(items.flatMap((i) => i.target || []));
    const uc = new Set(items.flatMap((i) => i.technique || []));
    const uf = new Set(items.flatMap((i) => i.form || []));
    statsGridEl.innerHTML = [
      { v: items.length, l: "Entries" },
      { v: ut.size, l: "Targets" },
      { v: uc.size, l: "Techniques" },
      { v: uf.size, l: "Forms" }
    ].map((s) => `<div class="stat-card"><span class="value">${s.v}</span><span class="label">${s.l}</span></div>`).join("");
  }

  function buildTagLegend() {
    tagLegendEl.innerHTML = data.tags.map((t) => `
      <div class="tag-legend-item">
        <span class="skill-tag" data-tag="${escapeHtml(t.id)}">${escapeHtml(t.label)}</span>
        <span>${escapeHtml(t.description)}</span>
      </div>
    `).join("");
  }

  // ── Filter dropdowns ────────────────────────────────────────────
  const filterDefs = [
    { id: "target", label: data.site.targetFilterTitle, set: () => state.selectedTargets, type: "dim" },
    { id: "technique", label: data.site.techniqueFilterTitle, set: () => state.selectedTechniques, type: "dim" },
    { id: "form", label: data.site.formFilterTitle, set: () => state.selectedForms, type: "dim" },
    { id: "platform", label: data.site.platformFilterTitle, set: () => state.selectedPlatforms, type: "platform" }
  ];

  function buildFilterBar() {
    filterBarEl.innerHTML = filterDefs.map((fd) => `
      <div class="filter-dropdown" data-filter-id="${fd.id}">
        <button class="filter-btn" type="button" data-toggle="${fd.id}">
          <span class="filter-btn-label">${escapeHtml(fd.label)}</span>
          <span class="filter-btn-arrow">▾</span>
        </button>
        <div class="filter-popup" id="popup-${fd.id}"></div>
      </div>
    `).join("");
  }

  function renderFilterPopup(fd) {
    const popup = document.getElementById(`popup-${fd.id}`);
    if (!popup) return;

    const selectedSet = fd.set();
    let rows = "";

    if (fd.type === "dim") {
      const counts = dimCounts(fd.id);
      const dim = dimMap.get(fd.id);
      if (!dim) return;
      rows = dim.values.map((v) => {
        const c = counts.get(v.id) || 0;
        return `
          <label class="filter-popup-item">
            <input type="checkbox" data-dim="${fd.id}" data-value="${escapeHtml(v.id)}" ${selectedSet.has(v.id) ? "checked" : ""}>
            <span class="label">${escapeHtml(v.label)}</span>
            <span class="cnt${c === 0 ? " zero" : ""}">${c}</span>
          </label>`;
      }).join("");
    } else {
      const counts = platformCounts();
      rows = data.tags.map((t) => {
        const c = counts.get(t.id) || 0;
        return `
          <label class="filter-popup-item">
            <input type="checkbox" data-dim="platform" data-value="${escapeHtml(t.id)}" ${selectedSet.has(t.id) ? "checked" : ""}>
            <span class="label">${escapeHtml(t.label)}</span>
            <span class="cnt${c === 0 ? " zero" : ""}">${c}</span>
          </label>`;
      }).join("");
    }

    popup.innerHTML = rows;
  }

  function updateFilterBtnStates() {
    filterDefs.forEach((fd) => {
      const btn = filterBarEl.querySelector(`[data-toggle="${fd.id}"]`);
      if (!btn) return;
      const selectedSet = fd.set();
      const count = selectedSet.size;
      btn.classList.toggle("has-selection", count > 0);

      // Update label
      const labelSpan = btn.querySelector(".filter-btn-label");
      if (count > 0) {
        labelSpan.innerHTML = `${escapeHtml(fd.label)} <span class="filter-btn-count">${count}</span>`;
      } else {
        labelSpan.textContent = fd.label;
      }
    });
  }

  function toggleDropdown(filterId) {
    if (state.openDropdown === filterId) {
      closeAllDropdowns();
      return;
    }
    closeAllDropdowns();
    state.openDropdown = filterId;
    const popup = document.getElementById(`popup-${filterId}`);
    if (popup) {
      const fd = filterDefs.find((f) => f.id === filterId);
      if (fd) renderFilterPopup(fd);
      popup.classList.add("open");
    }
  }

  function closeAllDropdowns() {
    state.openDropdown = null;
    filterBarEl.querySelectorAll(".filter-popup").forEach((p) => p.classList.remove("open"));
  }

  // ── Prompt panel ────────────────────────────────────────────────
  function buildPrompt() {
    const sel = items.filter((i) => state.selectedKeys.has(i.key));
    if (sel.length === 0) return data.site.selectionEmpty;
    const intro = [
      "Install or set up the following selected skills or repos for my agent environment.",
      "For each item:",
      "1. Inspect the repository and identify the correct install method.",
      "2. Install it if it is directly installable as a skill, plugin, MCP server, or agent extension.",
      "3. If it is a collection, marketplace, paper list, or non-installable reference, explain that clearly and recommend the closest installable target or next step.",
      "4. Summarize what was installed, where it was placed, and any manual follow-up I still need.",
      "", "Selected items:"
    ];
    const entries = sel.map((item, i) => {
      const pt = item.tags.length > 0 ? item.tags.join(", ") : "none";
      return `${i+1}. ${item.name}\n   - URL: ${item.url}\n   - Platform: ${pt}\n   - Target: ${(item.target||[]).join(", ")||"none"}\n   - Technique: ${(item.technique||[]).join(", ")||"none"}\n   - Form: ${(item.form||[]).join(", ")||"none"}\n   - Notes: ${item.desc}`;
    });
    return intro.concat(entries).join("\n");
  }

  function updatePromptPanel() {
    const count = state.selectedKeys.size;
    selectionCountEl.textContent = String(count);
    promptOutputEl.value = buildPrompt();
    copyPromptBtnEl.disabled = count === 0;
    clearSelectionBtnEl.disabled = count === 0;

    // Update subtitle text
    if (count > 0) {
      elMap.selectionText.textContent = data.site.selectionText;
      promptBodyEl.classList.add("open");
    } else {
      elMap.selectionText.textContent = data.site.selectionEmpty;
      promptBodyEl.classList.remove("open");
    }
  }

  async function copyPrompt() {
    if (state.selectedKeys.size === 0) return;
    const orig = data.site.copyPromptLabel;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(promptOutputEl.value);
      } else {
        promptOutputEl.focus(); promptOutputEl.select(); document.execCommand("copy");
      }
      copyPromptBtnEl.textContent = data.site.promptCopiedLabel;
      setTimeout(() => { copyPromptBtnEl.textContent = orig; }, 1200);
    } catch (e) { copyPromptBtnEl.textContent = orig; }
  }

  // ── Active filter chips ─────────────────────────────────────────
  function renderChips(visible) {
    const chips = [];
    state.selectedTargets.forEach((v) => chips.push(`<span class="active-chip dim-target">${escapeHtml(getDimValueLabel("target",v))}</span>`));
    state.selectedTechniques.forEach((v) => chips.push(`<span class="active-chip dim-technique">${escapeHtml(getDimValueLabel("technique",v))}</span>`));
    state.selectedForms.forEach((v) => chips.push(`<span class="active-chip dim-form">${escapeHtml(getDimValueLabel("form",v))}</span>`));
    state.selectedPlatforms.forEach((id) => { const t=getTag(id); if(t) chips.push(`<span class="active-chip">${escapeHtml(t.label)}</span>`); });
    if (state.query.trim()) chips.push(`<span class="active-chip">Search: ${escapeHtml(state.query.trim())}</span>`);
    activeFilterChipsEl.innerHTML = chips.length > 0 ? chips.join("") : "";
  }

  // ── Results + pagination ────────────────────────────────────────
  function renderDimGroup(dimId, values) {
    if (!values || values.length === 0) return "";
    const emoji = getDimEmoji(dimId);
    const cls = `dim-${dimId}`;
    const tags = values.map((v) =>
      `<span class="dim-tag ${cls}">${escapeHtml(getDimValueLabel(dimId, v))}</span>`
    ).join("");
    return `<span class="dim-group"><span class="dim-group-icon">${emoji}</span>${tags}</span>`;
  }

  function renderResults() {
    const visible = getVisible();
    const total = visible.length;
    const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

    // Clamp page
    if (state.page >= totalPages) state.page = totalPages - 1;
    if (state.page < 0) state.page = 0;

    const start = state.page * PAGE_SIZE;
    const pageItems = visible.slice(start, start + PAGE_SIZE);

    countEl.textContent = `${total} / ${items.length}`;
    renderChips(visible);

    if (pageItems.length === 0) {
      resultsGridEl.innerHTML = `<div class="empty-state results-empty">${escapeHtml(data.site.noResultsText)}</div>`;
      paginationEl.innerHTML = "";
      return;
    }

    resultsGridEl.innerHTML = pageItems.map((item) => {
      const platformMarkup = item.tags.map((t) =>
        `<span class="skill-tag" data-tag="${escapeHtml(t)}">${escapeHtml(getTagLabel(t))}</span>`
      ).join("");
      const dimMarkup = [
        renderDimGroup("target", item.target),
        renderDimGroup("technique", item.technique),
        renderDimGroup("form", item.form)
      ].filter(Boolean).join("");
      return `
        <article class="skill-card">
          <div class="skill-card-top">
            <label class="skill-select">
              <input class="skill-checkbox" type="checkbox" data-item-key="${escapeHtml(item.key)}" ${state.selectedKeys.has(item.key)?"checked":""}>
              <span>Select</span>
            </label>
            <a class="skill-link" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(data.site.openRepoLabel)}</a>
          </div>
          <div class="name">${escapeHtml(item.name)}</div>
          <div class="desc">${escapeHtml(item.desc)}</div>
          <div class="dim-tags">${dimMarkup}</div>
          <div class="tags">${platformMarkup}</div>
        </article>`;
    }).join("");

    // Pagination
    if (totalPages <= 1) {
      paginationEl.innerHTML = "";
      return;
    }

    let pgHtml = `<button class="page-btn" data-page="${state.page - 1}" ${state.page === 0 ? "disabled" : ""}>‹ Prev</button>`;

    for (let p = 0; p < totalPages; p++) {
      if (totalPages > 7 && p > 1 && p < totalPages - 2 && Math.abs(p - state.page) > 1) {
        if (p === 2 || p === totalPages - 3) pgHtml += `<span class="page-info">…</span>`;
        continue;
      }
      pgHtml += `<button class="page-btn${p === state.page ? " active" : ""}" data-page="${p}">${p + 1}</button>`;
    }

    pgHtml += `<button class="page-btn" data-page="${state.page + 1}" ${state.page === totalPages - 1 ? "disabled" : ""}>Next ›</button>`;
    paginationEl.innerHTML = pgHtml;
  }

  // ── Full render ─────────────────────────────────────────────────
  function render() {
    updateFilterBtnStates();
    // Re-render open popup if any
    if (state.openDropdown) {
      const fd = filterDefs.find((f) => f.id === state.openDropdown);
      if (fd) renderFilterPopup(fd);
    }
    renderResults();
    updatePromptPanel();
  }

  // ── Init ────────────────────────────────────────────────────────
  applySiteCopy();
  buildTagLegend();
  renderStats();
  buildFilterBar();
  render();

  // ── Events ──────────────────────────────────────────────────────

  // Search (debounced)
  const debouncedRender = debounce(() => { state.page = 0; render(); }, 150);
  searchInput.addEventListener("input", (e) => { state.query = e.target.value; debouncedRender(); });

  // Filter button toggle
  filterBarEl.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-toggle]");
    if (btn) {
      e.stopPropagation();
      toggleDropdown(btn.dataset.toggle);
      return;
    }
  });

  // Filter checkbox change
  filterBarEl.addEventListener("change", (e) => {
    const input = e.target.closest("input[data-dim]");
    if (!input) return;
    const dimId = input.dataset.dim;
    const value = input.dataset.value;
    const setMap = {
      target: state.selectedTargets,
      technique: state.selectedTechniques,
      form: state.selectedForms,
      platform: state.selectedPlatforms
    };
    const set = setMap[dimId];
    if (!set) return;
    if (input.checked) set.add(value); else set.delete(value);
    state.page = 0;
    render();
  });

  // Close dropdown on outside click
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".filter-dropdown")) {
      closeAllDropdowns();
    }
  });

  // Pagination
  paginationEl.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-page]");
    if (!btn || btn.disabled) return;
    state.page = parseInt(btn.dataset.page, 10);
    renderResults();
    window.scrollTo({ top: resultsGridEl.offsetTop - 80, behavior: "smooth" });
  });

  // Skill card checkboxes
  resultsGridEl.addEventListener("change", (e) => {
    const cb = e.target.closest(".skill-checkbox");
    if (!cb) return;
    const key = cb.dataset.itemKey;
    if (!itemMap.has(key)) return;
    if (cb.checked) state.selectedKeys.add(key); else state.selectedKeys.delete(key);
    updatePromptPanel();
  });

  // Prompt panel toggle
  document.querySelector(".prompt-panel-head").addEventListener("click", () => {
    if (state.selectedKeys.size > 0) {
      promptBodyEl.classList.toggle("open");
    }
  });

  copyPromptBtnEl.addEventListener("click", copyPrompt);
  clearSelectionBtnEl.addEventListener("click", () => { state.selectedKeys.clear(); render(); });
})();
