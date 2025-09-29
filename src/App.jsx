import { useState, useRef } from "react";

import AddNewProject from "./components/AddNewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSelected from "./components/ProjectSelected";

function App() {
  const [projects, setProjects] = useState([]);
  const [addProjectClicked, setAddProjectClicked] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  function handleAddProjectFlag(clicked) {
    setAddProjectClicked(clicked);
  }

  function handleSelectProject(project) {
    setAddProjectClicked(false);
    setSelectedProject(project);
  }

  function handleAddTask(newTask) {
    setProjects((prevProjects) =>
      prevProjects.map((p) =>
        p.id === selectedProject.id
          ? {
              ...p,
              tasks: [...p.tasks, newTask],
            }
          : p
      )
    );

    setSelectedProject((prev) => ({
      ...prev,
      tasks: [...prev.tasks, newTask],
    }));
  }

  function handleClearTask(task) {
    setProjects((prevProjects) =>
      prevProjects.map((p) =>
        p.id === selectedProject.id
          ? {
              ...p,
              tasks: p.tasks.filter((t) => t.id !== task.id),
            }
          : p
      )
    );

    setSelectedProject((prev) => ({
      ...prev,
      tasks: prev.tasks.filter((t) => t.id !== task.id),
    }));
  }

  function onSaveProject(titleVal, descriptionVal, dueDateVal) {
    setProjects((prevProjects) => [
      ...prevProjects,
      {
        id: Date.now(),
        title: titleVal,
        description: descriptionVal,
        dueDate: dueDateVal,
        tasks: [],
      },
    ]);
  }

  function onDeleteProject(projectToDelete){
    setProjects((prevProjects) => {
      return prevProjects.filter(p => p.id !== projectToDelete.id);
    });
    setSelectedProject(null);
  }

  console.log(projects);

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar
          projectList={projects}
          handleAddNewClicked={handleAddProjectFlag}
          handleSelectProject={handleSelectProject}
        />
        {addProjectClicked && (
          <AddNewProject
            onSave={onSaveProject}
            handleButtonClicked={handleSelectProject}
          />
        )}
        {!addProjectClicked && !selectedProject && (
          <NoProjectSelected handleAddNewClicked={handleAddProjectFlag} />
        )}
        {!addProjectClicked && selectedProject && (
          <ProjectSelected
            project={selectedProject}
            addTask={handleAddTask}
            clearTask={handleClearTask}
            deleteProject={onDeleteProject}
          />
        )}
      </main>
    </>
  );
}

export default App;
