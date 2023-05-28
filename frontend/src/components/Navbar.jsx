import { FiMenu, FiX } from 'react-icons/fi';
import Sidebar from './Sidebar';
import { useState } from 'react';
import { BsGear } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../redux/slices/authApiSlice';
import { logout as clearUserInfo } from '../redux/slices/authSlice';

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [menu, setMenu] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const menuHandler = () => {
    setMenu((prev) => (prev = !prev));
  };
  const dropDownHandler = () => {
    setDropDown((prev) => (prev = !prev));
  };

  const [logout] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      const res = await logout();
      dispatch(clearUserInfo());
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="bg-priDark text-white flex items-center justify-between h-[44px] px-[12px] md:px-[16px] lg:px-[20px]">
        <div className="cursor-pointer" onClick={menuHandler}>
          <div className="md:hidden">
            {menu ? <FiX size={28} /> : <FiMenu size={28} />}
          </div>
          <div>
            <FiMenu size={28} className="hidden md:block" />
          </div>
        </div>
        <div className="cursor-pointer" onClick={dropDownHandler}>
          <div className="flex items-center justify-center rounded-full w-[28px] h-[28px] bg-violet-950 capitalize">
            {userInfo?.username[0]}
          </div>
        </div>
        {/* dropdown */}
        {dropDown && (
          <div
            onClick={dropDownHandler}
            className="cursor-pointer absolute text-textpri left-0 top-0 h-screen w-screen px-[12px] md:px-[16px] lg:px-[20px] flex justify-end pt-[42px] font-light text-sm z-40"
          >
            <div className="bg-white rounded-lg pt-[6px] px-[12px] pb-[12px] shadow-md h-fit w-full max-w-[278px] flex flex-col gap-1">
              <div className="flex gap-3 items-center pb-1">
                <div className="flex text-white text-3xl items-center justify-center rounded-full w-[50px] h-[50px] bg-violet-950 capitalize">
                  {userInfo?.username[0]}
                </div>
                <div className="">
                  <p className=" text-sm font-medium capitalize">
                    {userInfo?.username}
                  </p>
                  <p className="text-textGrey text-sm capitalize">
                    {userInfo?.fullname}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 py-1 hover:font-medium ease-in-out duration-150">
                <div>
                  <BsGear size={24} className="text-textGrey" />
                </div>
                <p> Settings</p>
              </div>
              <div
                className="flex items-center gap-3 hover:font-medium ease-in-out duration-150"
                onClick={logoutHandler}
              >
                <div>
                  <BiLogOut size={24} className="text-textGrey" />
                </div>
                <p> Log out</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        onClick={menuHandler}
        className={`${
          menu ? 'right-0' : 'right-[200%]'
        } bg-[#0000007f] absolute w-full top-[44px] ease-in-out duration-200 z-40 md:hidden`}
      >
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;
