export function filterProjects(
  projects,
  selectedLanguages,
  selectedSoftware
) {
  return projects.filter((project) => {
    const languageMatch =
      selectedLanguages.length === 0 ||
      selectedLanguages.some((language) =>
        project.languages.includes(language)
      );

    const softwareMatch =
      selectedSoftware.length === 0 ||
      selectedSoftware.some((software) =>
        project.software.includes(software)
      );

    return languageMatch && softwareMatch;
  });
}