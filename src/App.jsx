import { useState, useRef } from "react";

import AddNewProject from "./components/AddNewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSelected from "./components/ProjectSelected";

function App() {
  const [projects, setProjects] = useState([]);
  const [addProjectClicked, setAddProjectClicked] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  function handleAddProject(clicked) {
    setAddProjectClicked(clicked);
  }

  function handleSelectProject(project) {
    setAddProjectClicked(false);
    setSelectedProject(project);
  }

  function onSaveProject(titleVal, descriptionVal, dueDateVal) {
    console.log("went in here", titleVal);
    setProjects((prevProjects) => {
      prevProjects.push({
        title: titleVal,
        description: descriptionVal,
        dueDate: dueDateVal,
      });
      return prevProjects;
    });
    console.log("in function", projects);
  }

  console.log(projects);

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar
          projectList={projects}
          handleAddNewClicked={handleAddProject}
          handleSelectProject={handleSelectProject}
        />
        {addProjectClicked && (
          <AddNewProject
            onSave={onSaveProject}
            handleSaveClicked={handleAddProject}
          />
        )}
        {!addProjectClicked && !selectedProject && (
          <NoProjectSelected handleAddProject={handleAddProject} />
        )}
        {!addProjectClicked && selectedProject && (
          <ProjectSelected project={selectedProject} />
        )}
      </main>
    </>
  );
}

export default App;
