import { createPortal } from "react-dom";

export default function ProjectSidebar({ projectList, handleAddNewClicked }) {
  return (
    <aside className="bg-black w-1/3 px-8 py-16 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <button
        onClick={() => handleAddNewClicked(true)}
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      >
        +Add Project
      </button>
      <ul>
        {projectList.map((p, i) => (
          <li key={`${p.title}${i}`}>{p.title}</li>
        ))}
      </ul>
    </aside>
  );
}
