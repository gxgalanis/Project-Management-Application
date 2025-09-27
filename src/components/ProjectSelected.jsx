export default function ProjectSelected({ project }) {
  function formatDate(date) {
    const toDate = new Date(date);
    const formattedDate = toDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  }

  return (
    <>
      <div className="w-[35rem] mt-16">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button className="text-stone-600 hover:text-stone-950">
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formatDate(project.dueDate)}</p>
        <p className="text-stone-800 my-4">{project.description}</p>
      </div>
    </>
  );
}
