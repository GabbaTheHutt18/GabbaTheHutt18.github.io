import "./ProjectFilterStyle.css";

function ProjectFilters({
  languages,
  software,
  selectedLanguages,
  selectedSoftware,
  setSelectedLanguages,
  setSelectedSoftware,
  onReset,
}) {
  function handleLanguageChange(language) {
    setSelectedLanguages((current) => {
      if (current.includes(language)) {
        return current.filter((item) => item !== language);
      }

      return [...current, language];
    });
  }

  function handleSoftwareChange(item) {
    setSelectedSoftware((current) => {
      if (current.includes(item)) {
        return current.filter((value) => value !== item);
      }

      return [...current, item];
    });
  }

  return (
    <form
      aria-label="Project Filters"
      className="filters-container"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="filter-column">
      <button
        className="resetButton"
        onClick={onReset}
      >
        Reset
      </button>
        <fieldset className="filter_items">
          <legend className="sr-only">
            <b>Filter by language</b>
          </legend>

          <ul>
            {languages.map((language) => (
              <li key={language}>
                <label>
                  <input
                    type="checkbox"
                    value={language}
                    checked={selectedLanguages.includes(language)}
                    onChange={() =>
                      handleLanguageChange(language)
                    }
                  />

                  {language}
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
      </div>

      <div className="filter-column">

        <fieldset className="filter_items">
          <legend className="sr-only">
            <b>Filter by software</b>
          </legend>

          <ul>
            {software.map((item) => (
              <li key={item}>
                <label>
                  <input
                    type="checkbox"
                    value={item}
                    checked={selectedSoftware.includes(item)}
                    onChange={() =>
                      handleSoftwareChange(item)
                    }
                  />

                  {item}
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
      </div>

      
    </form>
  );
}

export default ProjectFilters;