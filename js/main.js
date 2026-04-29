(function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navMap = {
    "index.html": "home",
    "about.html": "about",
    "projects.html": "projects",
    "resume.html": "resume",
    "career-plan.html": "career",
    "contact.html": "contact"
  };

  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === navMap[currentPage]) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  renderProjects();
})();

function renderProjects() {
  const projectGrid = document.getElementById("project-grid");
  if (!projectGrid || !window.portfolioProjects) {
    return;
  }

  const ccarrSections = [
    ["Challenge/Context", "challenge"],
    ["Action", "action"],
    ["Result", "result"],
    ["Reflection", "reflection"]
  ];

  window.portfolioProjects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.id = project.slug;

    const techTags = project.tech.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
    const ccarrItems = ccarrSections.map(([label, field]) => `
      <div class="ccarr-item">
        <h3>${label}</h3>
        <p>${escapeHtml(project.ccarr[field])}</p>
      </div>
    `).join("");

    card.innerHTML = `
      <div class="project-card-main">
        <h2>${escapeHtml(project.title)}</h2>
        <p>${escapeHtml(project.description)}</p>
        <div class="tag-list" aria-label="Technologies used">${techTags}</div>
        <footer>
          <a class="repo-link" href="${escapeAttribute(project.repo)}" target="_blank" rel="noreferrer">GitHub Repository</a>
          <button class="expand-button" type="button" aria-expanded="false">View CCARR</button>
        </footer>
      </div>
      <div class="ccarr">
        <div class="ccarr-grid">${ccarrItems}</div>
      </div>
    `;

    const button = card.querySelector(".expand-button");
    button.addEventListener("click", () => {
      const isOpen = card.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
      button.textContent = isOpen ? "Hide CCARR" : "View CCARR";
    });

    projectGrid.appendChild(card);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}
