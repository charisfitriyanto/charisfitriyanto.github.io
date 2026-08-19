const body = document.body;
const themeButton = document.querySelector(".theme-button");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");
const year = document.querySelector("#year");
const search = document.querySelector("#post-search");

if (year) year.textContent = new Date().getFullYear();

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") body.classList.add("dark");

if (themeButton) {
  themeButton.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
  });
}

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

if (search) {
  const rows = [...document.querySelectorAll(".searchable")];
  const empty = document.querySelector("#search-empty");

  search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();
    let visible = 0;

    rows.forEach(row => {
      const haystack = (row.dataset.search || "").toLowerCase();
      const match = haystack.includes(q);
      row.hidden = !match;
      if (match) visible++;
    });

    if (empty) empty.hidden = visible !== 0;
  });

  document.addEventListener("keydown", event => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      search.focus();
    }
  });
}
