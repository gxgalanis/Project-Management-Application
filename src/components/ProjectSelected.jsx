import { useRef } from "react";

export default function ProjectSelected({ project, addTask, clearTask, deleteProject }) {
  const taskRef = useRef();

  function formatDate(date) {
    const toDate = new Date(date);
    const formattedDate = toDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  }

  function handleSubmitTask(e) {
    e.preventDefault();
    const newTask = { id: Date.now(), descr: taskRef.current.value };
    addTask(newTask);
    taskRef.current.value = "";
  }

  return (
    <div className="w-[35rem] mt-16">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">
          {project.title}
        </h1>
        <button className="text-stone-600 hover:text-stone-950" onClick={()=>deleteProject(project)}>Delete</button>
      </div>
      <p className="mb-4 text-stone-400">{formatDate(project.dueDate)}</p>
      <p className="text-stone-600 whitespace-pre-wrap">
        {project.description}
      </p>
      <hr className="my-4 border-stone-300" />
      <h2 className="text-3xl font-bold text-stone-600 mb-2">Tasks</h2>
      <form className="mt-4 text-right" onSubmit={(e) => handleSubmitTask(e)}>
        <input
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          type="text"
          ref={taskRef}
          required
        />
        <button type="submit">Add Task</button>
      </form>
      {!(project.tasks.length > 0) && <p>Your project has no tasks</p>}
      {project.tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {project.tasks.map((t) => (
            <li key={`${t.id}`} className="flex justify-between my-4">
              <p className="text-stone-800 my-4">{t.descr}</p>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => clearTask(t)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
