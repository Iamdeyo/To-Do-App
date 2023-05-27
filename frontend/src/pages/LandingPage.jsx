import { useState } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import heroImg from '../assets/img/hero.png';

const LandingPage = () => {
  const [mobMenu, setMobMenu] = useState(false);
  const mobMenuHandler = () => {
    setMobMenu((prev) => (prev = !prev));
  };
  return (
    <div>
      {/* Nav bar */}
      <div className="bg-[#FEFDFC] flex items-center pl-[8px] pr-[24px] h-[72px] relative border-b lg:justify-between lg:gap-3 lg:border-b-0">
        <div className="flex items-center">
          <svg
            width="60px"
            height="60px"
            viewBox="-2.4 -2.4 28.80 28.80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
            transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
            stroke-width="0.00024000000000000003"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#CCCCCC"
              stroke-width="0.048"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.38358 3C8.75808 3 9.06166 3.31153 9.06166 3.69582V3.92169C9.10586 3.91015 9.15023 3.89901 9.19476 3.88829C11.0399 3.44416 12.9601 3.44416 14.8052 3.88829C14.8498 3.89901 14.8941 3.91014 14.9383 3.92169V3.69582C14.9383 3.31153 15.2419 3 15.6164 3C15.9909 3 16.2945 3.31153 16.2945 3.69582V4.42901C18.2277 5.38732 19.6726 7.19919 20.1754 9.39896C20.6082 11.2924 20.6082 13.2628 20.1754 15.1562C19.5504 17.8905 17.4698 20.0255 14.8052 20.6669C12.9601 21.111 11.0399 21.111 9.19476 20.6669C6.53017 20.0255 4.44963 17.8906 3.82461 15.1562C3.3918 13.2628 3.3918 11.2924 3.82461 9.39896C4.32745 7.19918 5.77233 5.38732 7.70551 4.42901V3.69582C7.70551 3.31153 8.00909 3 8.38358 3ZM11.0274 9.88793C11.2393 9.67055 11.2393 9.31809 11.0274 9.1007C10.8156 8.88331 10.4721 8.88331 10.2603 9.1007L8.83564 10.5626L8.31512 10.0285C8.10327 9.81107 7.7598 9.81107 7.54796 10.0285C7.33611 10.2458 7.33611 10.5983 7.54796 10.8157L8.45206 11.7435C8.66391 11.9608 9.00737 11.9608 9.21922 11.7435L11.0274 9.88793ZM12.9041 10.3293C12.6045 10.3293 12.3616 10.5785 12.3616 10.886C12.3616 11.1934 12.6045 11.4426 12.9041 11.4426H16.0685C16.3681 11.4426 16.6109 11.1934 16.6109 10.886C16.6109 10.5785 16.3681 10.3293 16.0685 10.3293H12.9041ZM11.0274 14.5267C11.2393 14.3093 11.2393 13.9569 11.0274 13.7395C10.8156 13.5221 10.4721 13.5221 10.2603 13.7395L8.83564 15.2014L8.31512 14.6673C8.10327 14.4499 7.7598 14.4499 7.54796 14.6673C7.33611 14.8846 7.33611 15.2371 7.54796 15.4545L8.45206 16.3822C8.66391 16.5996 9.00737 16.5996 9.21922 16.3822L11.0274 14.5267ZM12.9041 14.9681C12.6045 14.9681 12.3616 15.2173 12.3616 15.5248C12.3616 15.8322 12.6045 16.0814 12.9041 16.0814H16.0685C16.3681 16.0814 16.6109 15.8322 16.6109 15.5248C16.6109 15.2173 16.3681 14.9681 16.0685 14.9681H12.9041Z"
                fill="#DE483A"
              ></path>{' '}
            </g>
          </svg>
          <p className="text-[#DE483A] hidden text-3xl font-semibold sm:block">
            d-todo
          </p>
        </div>
        <div className="ml-auto lg:hidden" onClick={mobMenuHandler}>
          {!mobMenu ? (
            <FiMenu className="h-[32px] p-[5px] w-[32px] " />
          ) : (
            <FiX className="h-[32px] p-[5px] w-[32px] " />
          )}
        </div>
        <div
          className={`text-[#232115] h-[calc(100vh_-_72px)] absolute left-0 bg-[rgba(35,33,21,.75)] backdrop-blur w-full capitalize delay-0 duration-1000 ease-in transition-all font-medium tracking-[0.01em] ${
            mobMenu ? 'top-[72px]' : 'bottom-[1000px]'
          } lg:static lg:h-auto lg:backdrop-blur-none lg:w-auto lg:bg-none `}
        >
          <div className="bg-[#FEFDFC] py-[32px] px-[24px] lg:bg-none lg:flex lg:p-0 lg:h-full lg:items-center">
            <div className="flex flex-col gap-2 pb-[16px] lg:flex-row lg:pb-0 lg:pr-[16px]">
              <p className="py-[10px]  rounded-xl text-base lg:px-[14px] hover:bg-[hsla(53,10%,69%,.2)] ease-out duration-150">
                freatures
              </p>
              <p className="py-[10px] rounded-xl text-base lg:px-[14px]  hover:bg-[hsla(53,10%,69%,.2)] ease-out duration-150">
                templates
              </p>
              <p className="py-[10px] rounded-xl text-base lg:px-[14px]  hover:bg-[hsla(53,10%,69%,.2)] ease-out duration-150">
                for teams
              </p>
              <p className="py-[10px] rounded-xl text-base lg:px-[14px] flex items-center justify-between  hover:bg-[hsla(53,10%,69%,.2)] ease-out duration-150">
                resources{' '}
                <FiChevronDown className="h-[20px] w-[20px] self-end" />
              </p>
              <p className="py-[10px] text-base lg:px-[14px]  hover:bg-[hsla(53,10%,69%,.2)] ease-out duration-150">
                pricing
              </p>
            </div>
            <div className="border-t flex gap-2 justify-center text-center pt-[16px] lg:pt-0 lg:border-t-0 lg:border-l lg:pl-[16px]">
              <p className="text-black py-[10px] px-[18px] bg-[hsla(53,10%,69%,.2)] w-full rounded-xl min-w-[72px] lg:w-auto lg:text-inherit lg:bg-transparent lg:hover:bg-[hsla(53,10%,69%,.2)] ease-out duration-150">
                Log in
              </p>
              <p className="bg-[#DE483A] text-white py-[10px] px-[18px] w-full rounded-xl min-w-[72px] ease-out duration-150 lg:w-auto">
                start for free
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end navbar */}

      {/* ************************************************* */}

      {/* hero section */}
      <div className="mb-[1000px] ">
        <div className="text-center px-[16px] pt-[128px] text-[#1f1f1f]">
          <p className="text-4xl font-['Graphik-bold'] font-semibold tracking-wide leading-tight mb-[16px]">
            Organize your work and life, finally.
          </p>
          <p className="text-lg font-medium mb-[24px] leading-7">
            Become focused, organized, and calm with Todoist. The world’s #1
            task manager and to-do list app.
          </p>
          <p className="bg-[#DE483A] text-white py-[10px] px-[18px] rounded-xl min-w-[72px] inline-block ease-out duration-150 hover:opacity-90">
            Start for free
          </p>
        </div>
        <div className="px-[16px]">
          <img src={heroImg} alt="hero" />
        </div>
        <div></div>
      </div>
      {/* end hero section */}
    </div>
  );
};

export default LandingPage;
