(function () {
  const data = window.CATALOG_DATA;

  if (!data) {
    return;
  }

  const searchInput = document.getElementById("search");
  const countEl = document.getElementById("count");
  const categoriesEl = document.getElementById("categories");
  const tagFiltersEl = document.getElementById("tagFilters");
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

  const state = {
    query: "",
    tag: "all",
    selectedKeys: new Set()
  };

  const items = data.categories.flatMap((category) =>
    category.groups.flatMap((group) =>
      group.items.map((item, index) => ({
        ...item,
        key: `${category.id}::${group.title}::${item.name}::${index}`,
        categoryId: category.id,
        categoryTitle: category.title,
        groupTitle: group.title
      }))
    )
  );

  const itemMap = new Map(items.map((item) => [item.key, item]));

  function escapeHtml(value) {
    return value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function getTagLabel(tagId) {
    const tag = data.tags.find((entry) => entry.id === tagId);
    return tag ? tag.label : tagId;
  }

  function applySiteCopy() {
    const pageTitle = data.site && data.site.title ? data.site.title : data.repo.name;
    const metaDescription = document.querySelector('meta[name="description"]');

    document.title = data.repo.name;

    if (metaDescription && data.site && data.site.metaDescription) {
      metaDescription.setAttribute("content", data.site.metaDescription);
    }

    siteEyebrowEl.textContent = data.site.eyebrow;
    siteTitleEl.textContent = pageTitle;
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
    footerContentEl.innerHTML = `<p>Contributions welcome · <a href="${escapeHtml(data.repo.githubUrl)}">View on GitHub</a></p>`;
  }

  function getStats() {
    const taggedCount = items.filter((item) => item.tags.length > 0).length;
    const multiPlatformCount = items.filter((item) => item.tags.length > 1).length;

    return [
      { value: String(items.length), label: "Catalog entries" },
      { value: String(data.categories.length), label: "Top-level categories" },
      { value: String(taggedCount), label: "Entries with platform tags" },
      { value: String(multiPlatformCount), label: "Multi-platform entries" }
    ];
  }

  function buildTagControls() {
    const buttons = ['<button class="tag-btn active" type="button" data-tag="all">All</button>']
      .concat(
        data.tags.map(
          (tag) =>
            `<button class="tag-btn" type="button" data-tag="${escapeHtml(tag.id)}">${escapeHtml(tag.label)}</button>`
        )
      )
      .join("");

    tagFiltersEl.innerHTML = buttons;

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

    tagFiltersEl.addEventListener("click", (event) => {
      const button = event.target.closest(".tag-btn");

      if (!button) {
        return;
      }

      state.tag = button.dataset.tag || "all";
      render();
    });
  }

  function buildCategoryNav() {
    catNavEl.innerHTML = data.categories
      .map(
        (category) =>
          `<a href="#${escapeHtml(category.id)}">${escapeHtml(category.title.replace(/^[^\s]+\s/, ""))}</a>`
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
    const tagMatch = state.tag === "all" || item.tags.includes(state.tag);

    if (!tagMatch) {
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

  function renderCategories() {
    let visibleCount = 0;

    const categoryMarkup = data.categories
      .map((category) => {
        const groupMarkup = category.groups
          .map((group) => {
            const visibleItems = group.items.filter((item) =>
              matches({
                ...item,
                categoryTitle: category.title,
                groupTitle: group.title
              })
            );

            if (visibleItems.length === 0) {
              return "";
            }

            visibleCount += visibleItems.length;

            const cards = visibleItems
              .map((item) => {
                const tagMarkup = item.tags
                  .map(
                    (tag) =>
                      `<span class="skill-tag" data-tag="${escapeHtml(tag)}">${escapeHtml(getTagLabel(tag))}</span>`
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
                    <div class="name">${escapeHtml(item.name)}</div>
                    <div class="meta">${escapeHtml(group.title)}</div>
                    <div class="desc">${escapeHtml(item.desc)}</div>
                    <div class="tags">${tagMarkup}</div>
                  </article>
                `;
              })
              .join("");

            return `
              <section class="subcategory">
                <h3>${escapeHtml(group.title)}</h3>
                ${cards}
              </section>
            `;
          })
          .join("");

        if (!groupMarkup) {
          return "";
        }

        return `
          <section class="category" id="${escapeHtml(category.id)}">
            <h2><a href="#${escapeHtml(category.id)}">${escapeHtml(category.title)}</a></h2>
            <p class="category-desc">${escapeHtml(category.description)}</p>
            ${groupMarkup}
          </section>
        `;
      })
      .join("");

    countEl.textContent = `${visibleCount} / ${items.length} visible`;
    categoriesEl.innerHTML =
      categoryMarkup ||
      '<div class="empty-state">No entries matched the current search and tag filter.</div>';
  }

  function renderTagSelection() {
    tagFiltersEl.querySelectorAll(".tag-btn").forEach((button) => {
      button.classList.toggle("active", button.dataset.tag === state.tag);
    });
  }

  function render() {
    renderTagSelection();
    renderCategories();
    updatePromptPanel();
  }

  buildTagControls();
  buildCategoryNav();
  applySiteCopy();
  renderStats();
  render();

  searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    render();
  });

  categoriesEl.addEventListener("change", (event) => {
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
