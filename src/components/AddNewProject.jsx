import { useRef } from "react";
import ValidationModal from "./ValidationModal";

export default function AddNewProject({ onSave, handleButtonClicked }) {
  const title = useRef('');
  const description = useRef('');
  const dueDate = useRef('');

  const dialog = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    if(title.current.value.trim() === '' || 
       description.current.value.trim() === '' ||
       dueDate.current.value.trim() === ''
    ){
      dialog.current.open();
      return;
    }
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
    <>
    <ValidationModal ref={dialog}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-800 my-4">Oops ... looks like you forgot to enter a value.</p>
        <p className="text-stone-800 my-4">Please make sure you provide a valid value for every input field</p>
    </ValidationModal>
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
          />
          <label className="text-sm font-bold uppercase text-stone-500">
            Description
          </label>
          <textarea
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            ref={description}
          />
          <label className="text-sm font-bold uppercase text-stone-500">
            Due Date
          </label>
          <input
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            type="date"
            ref={dueDate}
          />
        </form>
      </div>
    </>
  );
}
