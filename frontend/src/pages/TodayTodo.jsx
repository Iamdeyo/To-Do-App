import { FiSliders } from 'react-icons/fi';
import Todos from '../components/Todos';
import { useGetTodayTodoQuery } from '../redux/slices/todoApiSlice';
import AddTodo from '../components/AddTodo';
import Loader from '../components/Loader';

const TodayTodo = () => {
  const { data, isLoading, isError, isSuccess } = useGetTodayTodoQuery();

  return (
    <>
      <div className=" px-[16px] sm:px-[55px] pt-[36px] mb-[24px] ">
        <div className="pb-[8px] flex items-center border-b border-b-gray-200">
          <p className="capitalize font-semibold text-xl">today </p>
          <span className="text-textGrey text-xs font-light capitalize pt-[5px] pl-[4px]">
            tue may 23
          </span>
          <span className="ml-auto text-textGrey opacity-70 hover:opacity-100 ease-in-out duration-150 cursor-pointer">
            <FiSliders size={16} className="-rotate-90" />
          </span>
        </div>
      </div>

      {/* main app */}
      {isLoading && (
        <div className="w-full flex items-center justify-center text-priDark">
          <Loader wide={'w-20'} tall={'h-20'} />
        </div>
      )}
      {isSuccess && (
        <div className="px-[16px] sm:px-[55px] overflow-x-hidden  overflow-y-scroll h-[calc(100vh_-_141px)] pb-[36px]">
          <Todos data={data} />
          <AddTodo />
        </div>
      )}
    </>
  );
};

export default TodayTodo;
