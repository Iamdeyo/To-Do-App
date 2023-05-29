import AddTodo from '../components/AddTodo';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { FiPlus, FiSliders } from 'react-icons/fi';
import Todos from '../components/Todos';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="hidden">
          <Sidebar />
        </div>
        <div>
          <div className=" px-[55px] pt-[36px] mb-[24px] ">
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
          <div className="px-[55px]">
            <div>
              <Outlet />
            </div>
            <AddTodo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
