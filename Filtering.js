const body = document.body;
let allProjects = [];
let filteredProjects = [];

function getProjects(projects) {
  const grid = document.getElementById("projects");
  if (!grid) return;


  projects.forEach((project) => {
    const article = document.createElement("article");
    article.classList.add("projects");

    article.innerHTML = `
      <figure class="figure">
        <img loading="lazy" src="Assets/${project.image}" alt="${project.alt}" />
      </figure>
      <h3>${project.name}</h3>
      <p>${project.ProjectType} • ${project.Year}</p>
    `;

    const link = document.createElement("a");
    link.href = project.link;
    link.appendChild(article);

    grid.appendChild(link);
  });

  const totalElements = document.querySelectorAll("#total_items");

  totalElements.forEach(element => element.textContent = projects.length);

}


function filterProjects() {
  const selectedLanguages = Array.from(
    document.querySelectorAll('#category_filter input:checked')
  ).map(i => i.value);

  const selectedSoftware = Array.from(
    document.querySelectorAll('#software_filter input:checked')
  ).map(i => i.value);

  let filtered = allProjects.filter(project => {

    const languageMatch =
      selectedLanguages.length === 0 ||
      selectedLanguages.some(lang => project.languages.includes(lang));

    const softwareMatch =
      selectedSoftware.length === 0 ||
      selectedSoftware.some(soft => project.software.includes(soft));



    return languageMatch && softwareMatch;
  });
 

  currentIndex = 0;
  filteredProjects = filtered;
  getProjects(filteredProjects);
}


function createFilters({ languages, software }) {
  const categoryList = document.getElementById("category_filter");
  const colorList = document.getElementById("software_filter");

  if (!categoryList || !colorList) return;


  languages.forEach(lang => {
    const li = document.createElement("li");
    const label = document.createElement("label");
    const input = document.createElement("input");

    input.type = "checkbox";
    input.value = lang;

    label.textContent = lang;
    label.prepend(input);
    li.appendChild(label);
    categoryList.appendChild(li);

    input.addEventListener("change", filterProjects);
  });

  software.forEach(soft => {
    const li = document.createElement("li");
    const label = document.createElement("label");
    const input = document.createElement("input");

    input.type = "checkbox";
    input.value = soft;

    label.textContent = soft;
    label.prepend(input);
    li.appendChild(label);
    colorList.appendChild(li);

    input.addEventListener("change", filterProjects);
  });
}


function resetFilters() {
  const resetBtn = document.getElementById("reset_projects");

  if (!resetBtn) return;

  resetBtn.addEventListener("click", () => {
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);

    const searchInput = document.getElementById("search");
    if (searchInput) searchInput.value = "";

    const sortSelect = document.getElementById("select_sort");
    if (sortSelect) sortSelect.value = "az";

	currentIndex = 0;
    filteredProjects = allProjects;
    getProjects(filteredProjects);
  });
}


function initProjects() {
	fetch("./Projects.json")
    .then(res => res.json())
    .then(projects => {

      allProjects = projects;
      filteredProjects = projects;

      const languages = [...new Set(projects.flatMap(p => p.languages))].sort();
      const software = [...new Set(projects.flatMap(p => p.software))].sort();

      createFilters({ languages, software });

      console.log("Loaded projects:", projects); 

      getProjects(filteredProjects);

    })
    .catch(err => console.error("Error loading projects:", err));
}


document.addEventListener("DOMContentLoaded", () => {
	console.log("hello");
  initProjects();
  resetFilters();
});