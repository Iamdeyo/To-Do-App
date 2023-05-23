import { BsCalendar2, BsCalendarWeek, BsCardList } from 'react-icons/bs';
const Sidebar = () => {
  return (
    <div className="bg-white w-full max-w-[305px] h-[calc(100vh_-_44px)] p-[18px]">
      <div className="flex items-center p-[5px] cursor-pointer">
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
      </div>
      <div className="flex items-center p-[5px] cursor-pointer">
        <div className="w-[24px] h-[24px] flex items-center justify-center text-violet-700">
          <div className="relative">
            <BsCalendarWeek />
          </div>
        </div>
        <p className="pl-[8px] text-sm hover:font-semibold ease-in duration-150">
          Upcoming
        </p>
        <span className="ml-auto text-xs">5</span>
      </div>
      <div className="flex items-center p-[5px] cursor-pointer">
        <div className="w-[24px] h-[24px] flex items-center justify-center text-orange-500">
          <div className="relative">
            <BsCardList />
          </div>
        </div>
        <p className="pl-[8px] text-sm hover:font-semibold ease-in duration-150">
          All Todos
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
