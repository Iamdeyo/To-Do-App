import { BsCalendar2, BsCalendarWeek, BsCardList } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="bg-white w-full max-w-[305px] h-full p-[18px] md:bg-liteGrey">
      <Link to={'/todo'} className="flex items-center p-[5px] cursor-pointer">
        <div className="w-[24px] h-[24px] flex items-center justify-center text-green-600">
          <div className="relative">
            <BsCalendar2 />
            <span className="text-[8px] absolute top-[4px] left-[3px]">23</span>
          </div>
        </div>
        <p className="pl-[8px] text-sm hover:font-semibold ease-in duration-150">
          Today
        </p>
        <span className="ml-auto text-xs">5</span>
      </Link>
      <Link
        to={'/todo/upcoming'}
        className="flex items-center p-[5px] cursor-pointer"
      >
        <div className="w-[24px] h-[24px] flex items-center justify-center text-violet-700">
          <div className="relative">
            <BsCalendarWeek />
          </div>
        </div>
        <p className="pl-[8px] text-sm hover:font-semibold ease-in duration-150">
          Upcoming
        </p>
        <span className="ml-auto text-xs">5</span>
      </Link>
      <Link
        to={'/todo/all'}
        className="flex items-center p-[5px] cursor-pointer"
      >
        <div className="w-[24px] h-[24px] flex items-center justify-center text-orange-500">
          <div className="relative">
            <BsCardList />
          </div>
        </div>
        <p className="pl-[8px] text-sm hover:font-semibold ease-in duration-150">
          All Todos
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
