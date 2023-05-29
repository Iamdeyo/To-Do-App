import { FaCheck } from 'react-icons/fa';
import { FiTrash, FiEdit3 } from 'react-icons/fi';
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from '../redux/slices/todoApiSlice';
import { useCallback, useEffect, useState } from 'react';
const Todo = ({ data }) => {
  const [completed, setCompleted] = useState(data?.completed);
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
      const res = await updateTodo({
        completed: JSON.stringify(!data.completed),
        todoId: data._id,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  // const completedHandler = useCallback(
  //   (todo) => {
  //     updateTodo({ ...todo, completed: !todo.completed, todoId: data._id });
  //   },
  //   [updateTodo]
  // );

  return (
    <div>
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
              <div className="ml-auto text-textGrey hover:text-blue-700 hidden group-hover:block">
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
        <div className="self-end ml-auto text-xs font-light">date</div>
      </div>
    </div>
  );
};

export default Todo;
