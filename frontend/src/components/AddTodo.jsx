import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [addTodo, setAddTodo] = useState(false);
  const addTodoHandler = () => {
    setAddTodo((prev) => (prev = !prev));
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    alert(title);
  };
  return (
    <>
      {!addTodo ? (
        <div
          className="cursor-pointer flex items-center gap-2 group"
          onClick={addTodoHandler}
        >
          <span className="text-priDark group-hover:text-white group-hover:bg-priDark ease-in-out duration-150  rounded-full ">
            <FiPlus size={24} />
          </span>
          <p className="group-hover:text-priDark text-textGrey text-sm font-light ease-in-out duration-150 ">
            Add task
          </p>
        </div>
      ) : (
        <div className="relative border rounded-lg">
          <form onSubmit={submitTodoHandler}>
            <div className="flex flex-col pt-[10px] px-[10px]">
              <input
                type="text"
                placeholder="Task name"
                className="p-[2px] placeholder:text-sm outline-none bg-transparent peer"
              />
              <div className="peer-focus:border border-gray-300 absolute left-0 top-[00px] rounded-lg w-full h-full -z-10"></div>
              <textarea
                placeholder="Description"
                className="resize-none h-[60px] p-[2px] placeholder:font-light placeholder:text-sm outline-none bg-transparent peer"
              ></textarea>
              <div className="peer-focus:border border-gray-300 absolute left-0 top-[00px] rounded-lg w-full h-full -z-10"></div>
            </div>
            <div className="mt-[8px] border-t border-t-gray-200 p-[8px] pr-[12px] flex items-center gap-3">
              <p>date</p>
              <div
                className="ml-auto h-[32px] px-[12px] bg-[#f5f5f5] text-sm text-black flex items-center justify-center rounded-md cursor-pointer hover:bg-gray-200 ease-in-out duration-150"
                onClick={addTodoHandler}
              >
                Cancel
              </div>
              <button
                className="h-[32px] px-[12px] bg-priDark text-sm text-white flex items-center justify-center rounded-md hover:bg-priDarkHover ease-in-out duration-150 disabled:opacity-70 disabled:cursor-not-allowed"
                disabled
              >
                Add task
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AddTodo;
