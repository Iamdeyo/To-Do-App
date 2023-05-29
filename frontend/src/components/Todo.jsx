import { FaCheck } from 'react-icons/fa';
import { FiTrash, FiEdit3 } from 'react-icons/fi';
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from '../redux/slices/todoApiSlice';
import { useState } from 'react';
import FormatDate from '../utlis/FormatDate';

const Todo = ({ data, edit, setEdit }) => {
  const [title, setTitle] = useState(data.title);
  const [desc, setDesc] = useState(data.desc);

  // set date
  const newDate = new Date(data.date);
  const formattedDate = newDate.toISOString().split('T')[0];
  const [date, setDate] = useState(formattedDate);
  const currentDate = new Date().toJSON().slice(0, 10);

  const [deleteTodo, { isLoading, isSuccess }] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const deleteTodoHandler = async () => {
    try {
      await deleteTodo(data._id);
    } catch (err) {
      console.log(err);
    }
  };

  const completedHandler = async () => {
    try {
      await updateTodo({
        completed: JSON.stringify(!data.completed),
        todoId: data._id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const submitTodoHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await updateTodo({
        title,
        desc,
        date,
        todoId: data._id,
      }).unwrap();
      console.log(res);
      setEdit('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {edit !== data._id ? (
        <div className="border-b border-b-gray-200 py-2 flex gap-1 flex-col">
          <div className="flex gap-2 w-full">
            <div>
              <div
                onClick={completedHandler}
                className="rounded-full h-[18px] w-[18px] border-green-600 border flex items-center justify-center"
              >
                <FaCheck
                  size={10}
                  className={`ease-in-out duration-150 text-green-600 ${
                    data.completed ? 'block' : 'hidden'
                  }`}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 group w-full">
              <div className="flex items-center gap-2 w-full">
                <p className="text-sm font-medium">{data.title}</p>
                <div
                  onClick={() => setEdit(data._id)}
                  className="ml-auto text-textGrey hover:text-blue-700 hidden group-hover:block"
                >
                  <FiEdit3 />
                </div>
                <div
                  className="text-textGrey hover:text-red-600 hidden group-hover:block"
                  onClick={deleteTodoHandler}
                >
                  <FiTrash />
                </div>
              </div>
              <p className="text-xs">{data.desc}</p>
            </div>
          </div>
          <div className="self-end ml-auto text-xs font-light">
            <FormatDate date={date} />
          </div>
        </div>
      ) : (
        <div className="relative border rounded-lg my-2">
          <form onSubmit={submitTodoHandler}>
            <div className="flex flex-col pt-[10px] px-[10px]">
              <input
                type="text"
                placeholder="Task name"
                className="p-[2px] placeholder:text-sm outline-none bg-transparent peer"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <div className="peer-focus:border border-gray-300 absolute left-0 top-[00px] rounded-lg w-full h-full -z-10"></div>
              <textarea
                placeholder="Description"
                className="resize-none h-[60px] p-[2px] placeholder:font-light placeholder:text-sm outline-none bg-transparent peer text-sm font-light"
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
              ></textarea>
              <div className="peer-focus:border border-gray-300 absolute left-0 top-[00px] rounded-lg w-full h-full -z-10"></div>
            </div>
            <div className="mt-[8px] border-t border-t-gray-200 p-[8px] pr-[12px] flex items-center gap-3">
              {/* <p>date</p> */}

              <span class="datepicker-toggle">
                <span class="datepicker-toggle-button flex items-center justify-center rounded-md border border-blue-300">
                  <FormatDate date={date} />
                </span>
                <input
                  type="date"
                  class="datepicker-input"
                  name="date"
                  id="date"
                  min={currentDate}
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                />
              </span>
              <div
                className="ml-auto h-[32px] px-[12px] bg-[#f5f5f5] text-sm text-black flex items-center justify-center rounded-md cursor-pointer hover:bg-gray-200 ease-in-out duration-150"
                onClick={() => setEdit('')}
              >
                Cancel
              </div>
              <button className="h-[32px] px-[12px] bg-priDark text-sm text-white flex items-center justify-center rounded-md hover:bg-priDarkHover ease-in-out duration-150 disabled:opacity-70 disabled:cursor-not-allowed">
                Add task
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Todo;
