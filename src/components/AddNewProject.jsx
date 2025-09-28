import { useRef } from "react";

export default function AddNewProject({ onSave, handleButtonClicked }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSubmit(e) {
    onSave(
      title.current.value,
      description.current.value,
      dueDate.current.value
    );
    handleButtonClicked(null);
    title.current.value = "";
    description.current.value = "";
    dueDate.current.value = "";
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <menu className="flex items-center justify-end gap-4 my-4">
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={() => handleButtonClicked(null)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </menu>
        <label className="text-sm font-bold uppercase text-stone-500">
          Title
        </label>
        <input
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          type="text"
          ref={title}
          required
        />
        <label className="text-sm font-bold uppercase text-stone-500">
          Description
        </label>
        <textarea
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          ref={description}
          required
        />
        <label className="text-sm font-bold uppercase text-stone-500">
          Due Date
        </label>
        <input
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          type="date"
          ref={dueDate}
          required
        />
      </form>
    </div>
  );
}
