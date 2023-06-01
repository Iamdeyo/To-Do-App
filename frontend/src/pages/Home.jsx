import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex w-full h-[calc(100vh_-_44px)] overflow-hidden">
        <div className="hidden md:block w-full max-w-[305px]">
          <Sidebar />
        </div>
        <div className="w-full">
          <div className="max-w-3xl mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
