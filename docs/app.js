(function () {
  const data = window.CATALOG_DATA;

  if (!data) {
    return;
  }

  const searchInput = document.getElementById("search");
  const countEl = document.getElementById("count");
  const tagLegendEl = document.getElementById("tagLegend");
  const catNavEl = document.getElementById("catNav");
  const statsGridEl = document.getElementById("statsGrid");
  const siteEyebrowEl = document.getElementById("siteEyebrow");
  const siteTitleEl = document.getElementById("siteTitle");
  const siteSubtitleEl = document.getElementById("siteSubtitle");
  const siteAudienceEl = document.getElementById("siteAudience");
  const howToUseTitleEl = document.getElementById("howToUseTitle");
  const howToUseTextEl = document.getElementById("howToUseText");
  const scopeTitleEl = document.getElementById("scopeTitle");
  const scopeTextEl = document.getElementById("scopeText");
  const searchLabelEl = document.getElementById("searchLabel");
  const legendTitleEl = document.getElementById("legendTitle");
  const legendNoteEl = document.getElementById("legendNote");
  const footerContentEl = document.getElementById("footerContent");
  const selectionTitleEl = document.getElementById("selectionTitle");
  const selectionTextEl = document.getElementById("selectionText");
  const selectionCountLabelEl = document.getElementById("selectionCountLabel");
  const selectionCountEl = document.getElementById("selectionCount");
  const promptOutputEl = document.getElementById("promptOutput");
  const copyPromptBtnEl = document.getElementById("copyPromptBtn");
  const clearSelectionBtnEl = document.getElementById("clearSelectionBtn");
  const categoryFilterTitleEl = document.getElementById("categoryFilterTitle");
  const categoryFilterTextEl = document.getElementById("categoryFilterText");
  const categoryFiltersEl = document.getElementById("categoryFilters");
  const platformFilterTitleEl = document.getElementById("platformFilterTitle");
  const platformFilterTextEl = document.getElementById("platformFilterText");
  const platformFiltersEl = document.getElementById("platformFilters");
  const resultsTitleEl = document.getElementById("resultsTitle");
  const resultsTextEl = document.getElementById("resultsText");
  const activeFilterChipsEl = document.getElementById("activeFilterChips");
  const resultsGridEl = document.getElementById("resultsGrid");

  const items = data.categories.flatMap((category) =>
    category.groups.flatMap((group) =>
      group.items.map((item, index) => ({
        ...item,
        key: `${category.id}::${group.title}::${item.name}::${index}`,
        categoryId: category.id,
        categoryTitle: category.title,
        categoryEmoji: category.emoji,
        groupTitle: group.title
      }))
    )
  );

  const itemMap = new Map(items.map((item) => [item.key, item]));

  const state = {
    query: "",
    selectedKeys: new Set(),
    selectedCategories: new Set(),
    selectedPlatforms: new Set()
  };

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function getTag(tagId) {
    return data.tags.find((tag) => tag.id === tagId);
  }

  function getTagLabel(tagId) {
    const tag = getTag(tagId);
    return tag ? tag.label : tagId;
  }

  function getStats() {
    const taggedCount = items.filter((item) => item.tags.length > 0).length;
    const multiPlatformCount = items.filter((item) => item.tags.length > 1).length;

    return [
      { value: String(items.length), label: "Catalog entries" },
      { value: String(data.categories.length), label: "Categories" },
      { value: String(taggedCount), label: "Tagged entries" },
      { value: String(multiPlatformCount), label: "Multi-platform entries" }
    ];
  }

  function buildCategoryCounts() {
    return new Map(
      data.categories.map((category) => [
        category.id,
        category.groups.reduce((sum, group) => sum + group.items.length, 0)
      ])
    );
  }

  function buildPlatformCounts() {
    return new Map(
      data.tags.map((tag) => [
        tag.id,
        items.filter((item) => item.tags.includes(tag.id)).length
      ])
    );
  }

  function applySiteCopy() {
    const metaDescription = document.querySelector('meta[name="description"]');

    document.title = data.repo.name;

    if (metaDescription && data.site.metaDescription) {
      metaDescription.setAttribute("content", data.site.metaDescription);
    }

    siteEyebrowEl.textContent = data.site.eyebrow;
    siteTitleEl.textContent = data.site.title;
    siteSubtitleEl.textContent = data.site.subtitle;
    siteAudienceEl.textContent = data.site.audience;
    howToUseTitleEl.textContent = data.site.howToUseTitle;
    howToUseTextEl.textContent = data.site.howToUseText;
    scopeTitleEl.textContent = data.site.scopeTitle;
    scopeTextEl.textContent = data.site.scopeText;
    searchLabelEl.textContent = data.site.searchLabel;
    searchInput.placeholder = data.site.searchPlaceholder;
    legendTitleEl.textContent = data.site.legendTitle;
    legendNoteEl.textContent = data.site.legendNote;
    selectionTitleEl.textContent = data.site.selectionTitle;
    selectionTextEl.textContent = data.site.selectionText;
    selectionCountLabelEl.textContent = data.site.selectionCountLabel;
    copyPromptBtnEl.textContent = data.site.copyPromptLabel;
    clearSelectionBtnEl.textContent = data.site.clearSelectionLabel;
    categoryFilterTitleEl.textContent = data.site.categoryFilterTitle;
    categoryFilterTextEl.textContent = data.site.categoryFilterText;
    platformFilterTitleEl.textContent = data.site.platformFilterTitle;
    platformFilterTextEl.textContent = data.site.platformFilterText;
    resultsTitleEl.textContent = data.site.resultsTitle;
    resultsTextEl.textContent = data.site.resultsText;
    footerContentEl.innerHTML = `<p>Contributions welcome · <a href="${escapeHtml(data.repo.githubUrl)}">View on GitHub</a></p>`;
  }

  function buildTagLegend() {
    tagLegendEl.innerHTML = data.tags
      .map(
        (tag) => `
          <div class="tag-legend-item">
            <span class="skill-tag" data-tag="${escapeHtml(tag.id)}">${escapeHtml(tag.label)}</span>
            <span>${escapeHtml(tag.description)}</span>
          </div>
        `
      )
      .join("");
  }

  function buildCategoryNav() {
    catNavEl.innerHTML = data.categories
      .map(
        (category) => `<a href="#filter-${escapeHtml(category.id)}">${escapeHtml(category.title)}</a>`
      )
      .join("");
  }

  function renderStats() {
    statsGridEl.innerHTML = getStats()
      .map(
        (stat) => `
          <div class="stat-card">
            <span class="value">${escapeHtml(stat.value)}</span>
            <span class="label">${escapeHtml(stat.label)}</span>
          </div>
        `
      )
      .join("");
  }

  function renderCategoryFilters() {
    const categoryCounts = buildCategoryCounts();
    const allChecked = state.selectedCategories.size === 0;

    const allRow = `
      <label class="check-chip" id="filter-all-categories">
        <input type="checkbox" data-filter-type="all-categories" ${allChecked ? "checked" : ""}>
        <span class="check-chip-main">${escapeHtml(data.site.allCategoriesLabel)}</span>
        <span class="check-chip-count">${data.categories.length}</span>
      </label>
    `;

    const rows = data.categories
      .map((category) => `
        <label class="check-chip" id="filter-${escapeHtml(category.id)}">
          <input
            type="checkbox"
            data-filter-type="category"
            data-filter-value="${escapeHtml(category.id)}"
            ${state.selectedCategories.has(category.id) ? "checked" : ""}
          >
          <span class="check-chip-main">${escapeHtml(category.emoji)} ${escapeHtml(category.title)}</span>
          <span class="check-chip-count">${categoryCounts.get(category.id)}</span>
        </label>
      `)
      .join("");

    categoryFiltersEl.innerHTML = allRow + rows;
  }

  function renderPlatformFilters() {
    const platformCounts = buildPlatformCounts();
    const allChecked = state.selectedPlatforms.size === 0;

    const allRow = `
      <label class="check-chip">
        <input type="checkbox" data-filter-type="all-platforms" ${allChecked ? "checked" : ""}>
        <span class="check-chip-main">${escapeHtml(data.site.allPlatformsLabel)}</span>
        <span class="check-chip-count">${data.tags.length}</span>
      </label>
    `;

    const rows = data.tags
      .map((tag) => `
        <label class="check-chip">
          <input
            type="checkbox"
            data-filter-type="platform"
            data-filter-value="${escapeHtml(tag.id)}"
            ${state.selectedPlatforms.has(tag.id) ? "checked" : ""}
          >
          <span class="check-chip-main">${escapeHtml(tag.label)}</span>
          <span class="check-chip-count">${platformCounts.get(tag.id)}</span>
        </label>
      `)
      .join("");

    platformFiltersEl.innerHTML = allRow + rows;
  }

  function getSelectedItems() {
    return items.filter((item) => state.selectedKeys.has(item.key));
  }

  function buildPrompt() {
    const selectedItems = getSelectedItems();

    if (selectedItems.length === 0) {
      return data.site.selectionEmpty;
    }

    const intro = [
      "Install or set up the following selected skills or repos for my agent environment.",
      "For each item:",
      "1. Inspect the repository and identify the correct install method.",
      "2. Install it if it is directly installable as a skill, plugin, MCP server, or agent extension.",
      "3. If it is a collection, marketplace, paper list, or non-installable reference, explain that clearly and recommend the closest installable target or next step.",
      "4. Summarize what was installed, where it was placed, and any manual follow-up I still need.",
      "",
      "Selected items:"
    ];

    const entries = selectedItems.map((item, index) => {
      const tags = item.tags.length > 0 ? item.tags.join(", ") : "none";
      return `${index + 1}. ${item.name}\n   - URL: ${item.url}\n   - Category: ${item.categoryTitle} / ${item.groupTitle}\n   - Tags: ${tags}\n   - Notes: ${item.desc}`;
    });

    return intro.concat(entries).join("\n");
  }

  function updatePromptPanel() {
    const selectedCount = state.selectedKeys.size;

    selectionCountEl.textContent = String(selectedCount);
    promptOutputEl.value = buildPrompt();
    copyPromptBtnEl.disabled = selectedCount === 0;
    clearSelectionBtnEl.disabled = selectedCount === 0;
  }

  async function copyPrompt() {
    if (state.selectedKeys.size === 0) {
      return;
    }

    const originalLabel = data.site.copyPromptLabel;
    const copiedLabel = data.site.promptCopiedLabel;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(promptOutputEl.value);
      } else {
        promptOutputEl.focus();
        promptOutputEl.select();
        document.execCommand("copy");
      }

      copyPromptBtnEl.textContent = copiedLabel;
      window.setTimeout(() => {
        copyPromptBtnEl.textContent = originalLabel;
      }, 1200);
    } catch (error) {
      copyPromptBtnEl.textContent = originalLabel;
    }
  }

  function matches(item) {
    const query = state.query.trim().toLowerCase();
    const categoryMatch =
      state.selectedCategories.size === 0 || state.selectedCategories.has(item.categoryId);
    const platformMatch =
      state.selectedPlatforms.size === 0 ||
      item.tags.some((tagId) => state.selectedPlatforms.has(tagId));

    if (!categoryMatch || !platformMatch) {
      return false;
    }

    if (!query) {
      return true;
    }

    const haystack = [
      item.name,
      item.desc,
      item.categoryTitle,
      item.groupTitle,
      ...item.tags
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  }

  function renderActiveFilterChips(visibleItems) {
    const chips = [];

    state.selectedCategories.forEach((categoryId) => {
      const category = data.categories.find((entry) => entry.id === categoryId);

      if (category) {
        chips.push(`<span class="active-chip">${escapeHtml(category.title)}</span>`);
      }
    });

    state.selectedPlatforms.forEach((tagId) => {
      const tag = getTag(tagId);

      if (tag) {
        chips.push(`<span class="active-chip">${escapeHtml(tag.label)}</span>`);
      }
    });

    if (state.query.trim()) {
      chips.push(`<span class="active-chip">Search: ${escapeHtml(state.query.trim())}</span>`);
    }

    if (chips.length === 0) {
      activeFilterChipsEl.innerHTML = `<span class="active-chip subtle">${visibleItems.length} visible</span>`;
      return;
    }

    activeFilterChipsEl.innerHTML = chips.join("");
  }

  function renderResults() {
    const visibleItems = items.filter(matches);

    countEl.textContent = `${visibleItems.length} / ${items.length} visible`;
    renderActiveFilterChips(visibleItems);

    if (visibleItems.length === 0) {
      resultsGridEl.innerHTML = `<div class="empty-state results-empty">${escapeHtml(data.site.noResultsText)}</div>`;
      return;
    }

    resultsGridEl.innerHTML = visibleItems
      .map((item) => {
        const tagMarkup = item.tags
          .map(
            (tagId) =>
              `<span class="skill-tag" data-tag="${escapeHtml(tagId)}">${escapeHtml(getTagLabel(tagId))}</span>`
          )
          .join("");

        return `
          <article class="skill-card">
            <div class="skill-card-top">
              <label class="skill-select">
                <input class="skill-checkbox" type="checkbox" data-item-key="${escapeHtml(item.key)}" ${state.selectedKeys.has(item.key) ? "checked" : ""}>
                <span>Select</span>
              </label>
              <a class="skill-link" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(data.site.openRepoLabel)}</a>
            </div>
            <div class="skill-card-head">
              <span class="category-pill">${escapeHtml(item.categoryEmoji)} ${escapeHtml(item.categoryTitle)}</span>
              <span class="group-pill">${escapeHtml(item.groupTitle)}</span>
            </div>
            <div class="name">${escapeHtml(item.name)}</div>
            <div class="desc">${escapeHtml(item.desc)}</div>
            <div class="skill-card-meta">
              <span><strong>${escapeHtml(data.site.categoryLabel)}:</strong> ${escapeHtml(item.categoryTitle)}</span>
              <span><strong>${escapeHtml(data.site.groupLabel)}:</strong> ${escapeHtml(item.groupTitle)}</span>
            </div>
            <div class="tags">${tagMarkup}</div>
          </article>
        `;
      })
      .join("");
  }

  function render() {
    renderCategoryFilters();
    renderPlatformFilters();
    renderResults();
    updatePromptPanel();
  }

  applySiteCopy();
  buildTagLegend();
  buildCategoryNav();
  renderStats();
  render();

  searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderResults();
  });

  categoryFiltersEl.addEventListener("change", (event) => {
    const input = event.target.closest("input");

    if (!input) {
      return;
    }

    const filterType = input.dataset.filterType;
    const value = input.dataset.filterValue;

    if (filterType === "all-categories") {
      state.selectedCategories.clear();
      render();
      return;
    }

    if (filterType === "category" && value) {
      if (input.checked) {
        state.selectedCategories.add(value);
      } else {
        state.selectedCategories.delete(value);
      }
    }

    render();
  });

  platformFiltersEl.addEventListener("change", (event) => {
    const input = event.target.closest("input");

    if (!input) {
      return;
    }

    const filterType = input.dataset.filterType;
    const value = input.dataset.filterValue;

    if (filterType === "all-platforms") {
      state.selectedPlatforms.clear();
      render();
      return;
    }

    if (filterType === "platform" && value) {
      if (input.checked) {
        state.selectedPlatforms.add(value);
      } else {
        state.selectedPlatforms.delete(value);
      }
    }

    render();
  });

  resultsGridEl.addEventListener("change", (event) => {
    const checkbox = event.target.closest(".skill-checkbox");

    if (!checkbox) {
      return;
    }

    const itemKey = checkbox.dataset.itemKey;

    if (!itemMap.has(itemKey)) {
      return;
    }

    if (checkbox.checked) {
      state.selectedKeys.add(itemKey);
    } else {
      state.selectedKeys.delete(itemKey);
    }

    updatePromptPanel();
  });

  copyPromptBtnEl.addEventListener("click", () => {
    copyPrompt();
  });

  clearSelectionBtnEl.addEventListener("click", () => {
    state.selectedKeys.clear();
    render();
  });
})();
