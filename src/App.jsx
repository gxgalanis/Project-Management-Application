import { useState, useRef } from "react";

import AddNewProject from "./components/AddNewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projects, setProjects] = useState([]);
  const [addProjectClicked, setAddProjectClicked] = useState(false);

  function handleAddProject(clicked) {
    setAddProjectClicked(clicked);
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
        />
        {addProjectClicked && (
          <AddNewProject
            onSave={onSaveProject}
            handleSaveClicked={handleAddProject}
          />
        )}
        {!addProjectClicked && (
          <NoProjectSelected handleAddProject={handleAddProject} />
        )}
      </main>
    </>
  );
}

export default App;
