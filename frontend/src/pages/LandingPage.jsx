import { useState } from 'react';
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiStar,
  FiChevronRight,
  FiChevronsRight,
  FiArrowRight,
} from 'react-icons/fi';
import {
  BsFacebook,
  BsGlobe2,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs';
import Tl from '../assets/img/1.jpg';
import Tr from '../assets/img/2.jpg';
import Bl from '../assets/img/3.jpg';
import Br from '../assets/img/4.jpg';

import heroImg from '../assets/img/hero.png';
import bgRight from '../assets/img/bg-right.png';
import bgLeft from '../assets/img/bg-left.png';
import recImg from '../assets/img/rec.png';
import getMoreImg from '../assets/img/get-more.png';
import clearMindImg from '../assets/img/clear-mind.png';
import FloImg from '../assets/img/flo.png';
import icon1Img from '../assets/img/icon-1.png';
import icon2Img from '../assets/img/icon-2.png';
import icon3Img from '../assets/img/icon-3.png';
import icon4Img from '../assets/img/icon-4.png';
import icon5Img from '../assets/img/icon-5.png';

import dividerImg from '../assets/img/divider.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [mobMenu, setMobMenu] = useState(false);
  const mobMenuHandler = () => {
    setMobMenu((prev) => (prev = !prev));
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (optionId) => {
    setSelectedOption(optionId);
    setIsOpen(false);
  };
  return (
    <div>
      {/* Nav bar */}
      <nav className="fixed top-0 left-0 w-full bg-[#FEFDFC] z-20 h-[72px] ">
        <div className="flex md:container mx-auto items-center relative px-[24px] h-full  w-full border-b lg:justify-between lg:gap-3 lg:border-b-0 ">
          <Link to={'/'} className="flex items-center gap-1">
            <svg
              width="35px"
              height="35px"
              viewBox="2.5 4.5 20 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
              strokeWidth="0.00024000000000000003"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="0.048"
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
            <p className="text-[#DE483A] hidden text-2xl font-semibold sm:block">
              dtodo
            </p>
          </Link>
          <div
            className="ml-auto lg:hidden cursor-pointer"
            onClick={mobMenuHandler}
          >
            {!mobMenu ? (
              <FiMenu className="h-[32px] p-[5px] w-[32px] " />
            ) : (
              <FiX className="h-[32px] p-[5px] w-[32px] " />
            )}
          </div>
          <div
            className={`text-[#232115] h-[calc(100vh_-_72px)] overflow-y-scroll absolute left-0 bg-[rgba(35,33,21,.75)] backdrop-blur w-full capitalize delay-0 duration-100 ease-in transition-all font-medium tracking-[0.01em] ${
              mobMenu ? 'top-[72px]' : 'bottom-[1000px]'
            } lg:static lg:h-auto lg:backdrop-blur-none lg:w-auto lg:bg-none  lg:overflow-hidden`}
          >
            <div className="bg-[#FEFDFC] py-[32px] px-[24px]  lg:bg-none lg:flex lg:p-0 lg:h-full lg:items-center text-base lg:text-[0.96em]">
              <div className="flex flex-col gap-2 pb-[16px] lg:flex-row lg:pb-0 lg:pr-[4px] lg:gap-0 ">
                <p className="py-[10px] cursor-pointer rounded-xl lg:px-[14px] hover:bg-[hsla(53,10%,69%,.2)] ease-out duration-150">
                  freatures
                </p>
                <p className="py-[10px] cursor-pointer rounded-xl lg:px-[14px]  hover:bg-[hsla(53,10%,69%,.2)] ease-out duration-150">
                  templates
                </p>
                <p className="py-[10px] cursor-pointer rounded-xl lg:px-[14px]  hover:bg-[hsla(53,10%,69%,.2)] ease-out duration-150">
                  for teams
                </p>
                <p className="py-[10px] cursor-pointer rounded-xl lg:px-[14px] flex items-center justify-between  hover:bg-[hsla(53,10%,69%,.2)] ease-out duration-150">
                  resources{' '}
                  <FiChevronDown className="h-[20px] w-[20px] self-end" />
                </p>
                <p className="py-[10px] cursor-pointer rounded-xl text-base lg:px-[14px]  hover:bg-[hsla(53,10%,69%,.2)] ease-out duration-150">
                  pricing
                </p>
              </div>
              <div className="border-t flex gap-2 justify-center text-center pt-[16px] lg:pt-0 lg:border-t-0 lg:border-l lg:pl-[4px]">
                <Link
                  to={'/login'}
                  className="text-black py-[10px] px-[18px] lg:px-[14px] bg-[hsla(53,10%,69%,.2)] w-full rounded-xl min-w-[72px] lg:w-auto lg:text-inherit lg:bg-transparent lg:hover:bg-[hsla(53,10%,69%,.2)] ease-out duration-150"
                >
                  Log in
                </Link>
                <Link
                  to={'/register'}
                  className="bg-[#DE483A] text-white py-[10px] px-[18px] lg:px-[14px] w-full rounded-xl min-w-[72px] ease-out duration-150 lg:w-auto"
                >
                  start for free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* end navbar */}

      {/* ************************************************* */}

      {/* hero section */}
      <section>
        <div className="text-center px-[16px] pt-[128px]  flex flex-col items-center text-[#1f1f1f]">
          <h1 className="text-[2.313em] font-['Graphik-bold'] sm:text-[5.5vw] font-bold -tracking-[0.01em] leading-tight mb-[16px]">
            Organize your <br /> work and life, finally.
          </h1>
          <h2 className="text-lg font-medium mb-[24px] leading-7">
            Become focused, organized, and calm with Todoist. The world’s #1
            task manager and to-do list app.
          </h2>
          <Link
            to={'/register'}
            className="bg-[#DE483A] text-white py-[10px] px-[18px] rounded-xl min-w-[72px] inline-block ease-out duration-150 hover:opacity-90"
          >
            Start for free
          </Link>
        </div>
        <div className="px-[16px]">
          <div className="lg:grid grid-rows-1 intersection">
            <img
              src={bgLeft}
              alt="heroL"
              className="hidden lg:block col-start-1 col-end-3 row-start-1"
            />
            <img
              src={bgRight}
              alt="heroR"
              className="hidden lg:block col-start-4 col-end-6 row-start-1"
            />
            <img
              src={heroImg}
              alt="hero"
              className="col-start-2 col-end-5 row-start-1"
            />
          </div>
        </div>
      </section>
      {/* end hero section */}
      {/* rating section */}
      <section className=" relative -mt-[48px]">
        <img src={dividerImg} alt="div" className="h-12 -mb-2" />
        <div className="pt-[16px] px-[24px] pb-[48px] items-center rating">
          <div className="flex flex-col max-w-3xl mx-auto items-center md:flex-row justify-around">
            <div className="pb-[24px] flex flex-col items-center">
              <p className="pb-4">200,000+ REVIEWS</p>
              <span className="flex gap-1 mb-4">
                <FiStar fill="black" />
                <FiStar fill="black" />
                <FiStar fill="black" />
                <FiStar fill="black" />
                <FiStar fill="black" />
              </span>
              <p className="font-semibold mb-4">App Store and Google Play</p>
            </div>
            <div className="pb-[24px] flex flex-col items-center">
              <p className="uppercase text-sm mb-4">
                Used by individuals and teams at
              </p>
              <img src={recImg} alt="rec" className="mb-4" />
            </div>
          </div>
        </div>
        {/* <img src={bgBottom} alt="bg-bottom" /> */}
      </section>
      {/* end rating section */}

      <section>
        <div className="grid items-center p-[32px] mb-[64px] text-center max-w-lg md:container mx-auto gap-4 md:grid-cols-2 md:text-start ">
          <div className="pb-[32px]">
            <p className="pb-1 text-sm">Get more done</p>
            <p className="font-['Graphik-bold'] text-2xl">
              Add your tasks. <br /> Organize your life. <br /> Achieve more
              every day.
            </p>
            <p className="text-wrap text-[#575757]">
              Add tasks like “Read work emails every day at 10am” to fill your
              to-do list in seconds using Todoist’s powerful natural language
              recognition and recurring dates.
            </p>
          </div>
          <img src={getMoreImg} alt="get more" className="pb-[32px]" />
          <div className="md:order-last pb-[32px]">
            <p className="pb-1 text-sm">Clear your mind</p>
            <p className="font-['Graphik-bold'] text-2xl">
              Reach that mental clarity <br /> you’ve been longing for.
            </p>
            <p className="text-wrap text-[#575757]">
              Your to-do lists are automatically sorted into Today, Upcoming and
              custom Filter views to help you focus on your most important
              things.
            </p>
          </div>
          <img src={clearMindImg} alt="clear your mind" className="pb-[32px]" />
        </div>
      </section>
      <section>
        <div className="pb-[64px] px-[24px] md:container md:mx-auto">
          <div className="flex mb-[32px] items-center flex-col text-center lg:text-start lg:items-start lg:mb-[64px]">
            <p className="text-wrap font-semibold text-3xl font-['Graphik-bold'] pt-[24px] mb-[8px] max-w-[20ch]  lg:max-w-[40ch]">
              Delightfully simple and deceptively powerful task management
            </p>
            <p className=" max-w-[30ch]  lg:max-w-[50ch]">
              30 million+ people organize billions of tasks in Todoist for their
              work, education, and personal life.
            </p>
          </div>
          <div className="grid gap-6 grid-flow-row md:grid-cols-2 lg:gap-10">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
              <img src={icon1Img} className="w-[90px] mb-2" alt="icon-1" />

              <p className="text-lg font-semibold mb-1">With you everywhere</p>
              <p className="max-w-[40ch] lg:max-w-full">
                Use dtodo’s apps, extensions and widgets on any device or
                platform.
              </p>
              <span className="text-[#316fea] font-['Graphik-web'] flex items-center gap-2 hover:border-b border-b-[#316fea] cursor-pointer">
                <FiArrowRight /> Download apps
              </span>
            </div>
            <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
              <img src={icon2Img} className="w-[90px] mb-2" alt="icon-2" />

              <p className="text-lg font-semibold mb-1">
                There’s a template for that
              </p>
              <p className="max-w-[40ch] lg:max-w-full">
                Project templates are available to get you started with
                whatever’s on your plate.
              </p>
              <span className="text-[#316fea] font-['Graphik-web'] flex items-center gap-2 hover:border-b border-b-[#316fea] cursor-pointer">
                <FiArrowRight /> Start with templates
              </span>
            </div>
            <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
              <img src={icon3Img} className="w-[90px] mb-2" alt="icon-3" />

              <p className="text-lg font-semibold mb-1">With you everywhere</p>
              <p className="max-w-[40ch] lg:max-w-full">
                Customize your to-do list with filters, labels, priorities, and
                more.
              </p>
              <span className="text-[#316fea] font-['Graphik-web'] flex items-center gap-2 hover:border-b border-b-[#316fea] cursor-pointer">
                <FiArrowRight /> See all features
              </span>
            </div>
            <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
              <img src={icon4Img} className="w-[90px] mb-2" alt="icon-1" />

              <p className="text-lg font-semibold mb-1">
                Connect with your other tools
              </p>
              <p className="max-w-[40ch] lg:max-w-full">
                Link Todoist with your calendar, voice assistant, and 70+ other
                tools.
              </p>
              <span className="text-[#316fea] font-['Graphik-web'] flex items-center gap-2 hover:border-b border-b-[#316fea] cursor-pointer">
                <FiArrowRight /> Install integrations
              </span>
            </div>
            <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
              <img src={icon5Img} className="w-[90px] mb-2" alt="icon-5" />

              <p className="text-lg font-semibold mb-1">Productivity Methods</p>
              <p className="max-w-[40ch] lg:max-w-full">
                Personal productivity recommendations based on your unique
                traits and strengths.
              </p>
              <span className="text-[#316fea] font-['Graphik-web'] flex items-center gap-2 hover:border-b border-b-[#316fea] cursor-pointer">
                <FiArrowRight /> Take the quiz
              </span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-[24px] mb-[64px] lg:mb-[190px] flex flex-col items-center lg:flex-row container mx-auto">
          <div className="flex mb-[32px] items-center flex-col lg:w-2/5 text-center lg:text-start lg:items-start">
            <p className="text-wrap font-semibold text-3xl font-['Graphik-bold'] pt-[24px] mb-[8px]">
              A task manager you <br /> can trust for life
            </p>
            <p className="lg:max-w-[30ch] max-w-[40ch]">
              We’ve been building Todoist for 16 years and 131 days.{' '}
              <span className="text-[#316fea] hover:underline cursor-pointer">
                We're in it for the long haul.
              </span>
            </p>
          </div>

          <div className="grid items-center w-full max-w-xs lg:max-w-full lg:w-3/5 h-full grid-cols-2 grid-rows-2 lg:flex">
            <div className="flex flex-col items-center">
              <img src={Tl} alt="img1" />
              <p className="pt-3 text-base font-semibold">30 million+</p>
              <p className="text-sm text-[#808080]">app downloads</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={Tr} alt="img1" />
              <p className=" pt-3 text-base font-semibold">15 years+</p>
              <p className="text-sm text-[#808080]">in business</p>
            </div>
            <div className="mt-[18px] flex flex-col items-center">
              <img src={Bl} alt="img1" />
              <p className="pt-3 text-base font-semibold">2 billion+</p>
              <p className="text-sm text-[#808080]">tasks completed</p>
            </div>
            <div className="mt-[18px] flex flex-col items-center">
              <img src={Br} alt="img1" />
              <p className="pt-3 text-base font-semibold">1 million+</p>
              <p className="text-sm text-[#808080]">per users</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#fff9f3] p-[32px] border-b">
        <div className="flex items-center md:container justify-center mx-auto px-[24px] md:justify-around gap-20">
          <div className="hidden md:block -mt-[84px] min-w-2/5">
            <img src={FloImg} alt="" />
          </div>
          <div className="flex flex-col md:w-full items-center gap-4 md:items-start">
            <p className="font-semibold font-['Graphik-bold'] text-3xl text-[#1f1f1f]">
              Achieve peace of <br /> mind with dtodo
            </p>
            <Link
              to={'/register'}
              className="bg-[#DE483A] text-white py-[10px] px-[18px] rounded-xl min-w-[72px] inline-block ease-out duration-150 hover:opacity-90"
            >
              Start for free
            </Link>
          </div>
        </div>
      </section>
      <footer className="  bg-[#fff9f3]">
        <div className="md:container flex md:gap-8 flex-col md:flex-row px-[24px] pt-[48px] pb-[32px] mx-auto">
          <div className="footer-grid md:flex md:flex-col w-full md:w-3/5 items-start mb-12 md:mb-0">
            <Link to={'/'} className="flex items-center gap-1">
              <svg
                width="35px"
                height="35px"
                viewBox="2.5 4.5 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
                transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
                strokeWidth="0.00024000000000000003"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.048"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.38358 3C8.75808 3 9.06166 3.31153 9.06166 3.69582V3.92169C9.10586 3.91015 9.15023 3.89901 9.19476 3.88829C11.0399 3.44416 12.9601 3.44416 14.8052 3.88829C14.8498 3.89901 14.8941 3.91014 14.9383 3.92169V3.69582C14.9383 3.31153 15.2419 3 15.6164 3C15.9909 3 16.2945 3.31153 16.2945 3.69582V4.42901C18.2277 5.38732 19.6726 7.19919 20.1754 9.39896C20.6082 11.2924 20.6082 13.2628 20.1754 15.1562C19.5504 17.8905 17.4698 20.0255 14.8052 20.6669C12.9601 21.111 11.0399 21.111 9.19476 20.6669C6.53017 20.0255 4.44963 17.8906 3.82461 15.1562C3.3918 13.2628 3.3918 11.2924 3.82461 9.39896C4.32745 7.19918 5.77233 5.38732 7.70551 4.42901V3.69582C7.70551 3.31153 8.00909 3 8.38358 3ZM11.0274 9.88793C11.2393 9.67055 11.2393 9.31809 11.0274 9.1007C10.8156 8.88331 10.4721 8.88331 10.2603 9.1007L8.83564 10.5626L8.31512 10.0285C8.10327 9.81107 7.7598 9.81107 7.54796 10.0285C7.33611 10.2458 7.33611 10.5983 7.54796 10.8157L8.45206 11.7435C8.66391 11.9608 9.00737 11.9608 9.21922 11.7435L11.0274 9.88793ZM12.9041 10.3293C12.6045 10.3293 12.3616 10.5785 12.3616 10.886C12.3616 11.1934 12.6045 11.4426 12.9041 11.4426H16.0685C16.3681 11.4426 16.6109 11.1934 16.6109 10.886C16.6109 10.5785 16.3681 10.3293 16.0685 10.3293H12.9041ZM11.0274 14.5267C11.2393 14.3093 11.2393 13.9569 11.0274 13.7395C10.8156 13.5221 10.4721 13.5221 10.2603 13.7395L8.83564 15.2014L8.31512 14.6673C8.10327 14.4499 7.7598 14.4499 7.54796 14.6673C7.33611 14.8846 7.33611 15.2371 7.54796 15.4545L8.45206 16.3822C8.66391 16.5996 9.00737 16.5996 9.21922 16.3822L11.0274 14.5267ZM12.9041 14.9681C12.6045 14.9681 12.3616 15.2173 12.3616 15.5248C12.3616 15.8322 12.6045 16.0814 12.9041 16.0814H16.0685C16.3681 16.0814 16.6109 15.8322 16.6109 15.5248C16.6109 15.2173 16.3681 14.9681 16.0685 14.9681H12.9041Z"
                    fill="#232115"
                  ></path>{' '}
                </g>
              </svg>
              <p className="text-[#232115] hidden text-2xl font-semibold lg:block">
                dtodo
              </p>
            </Link>
            <p className=" text-lg font-medium">
              Join millions of people who organize work and life with dtodo.
            </p>
          </div>

          <div className="text-sm w-full md:w-1/4 footer-grid md:flex md:flex-col mb-8 md:mb-0">
            <p className="font-semibold col-start-2">Features</p>
            <ul className="col-start-2 -ml-[14px] pb-8 border-b md:border-none">
              <li className="flex items-center justify-between cursor-pointer px-[14px] py-[9px] rounded-md hover:bg-liteGrey">
                How it Works <FiChevronRight size={20} className="md:hidden" />
              </li>
              <li className="flex items-center justify-between cursor-pointer px-[14px] py-[9px] rounded-md hover:bg-liteGrey">
                For Teams <FiChevronRight size={20} className="md:hidden" />
              </li>
              <li className="flex items-center justify-between cursor-pointer px-[14px] py-[9px] rounded-md hover:bg-liteGrey">
                Pricing <FiChevronRight size={20} className="md:hidden" />
              </li>
              <li className="flex items-center justify-between cursor-pointer px-[14px] py-[9px] rounded-md hover:bg-liteGrey">
                Templates <FiChevronRight size={20} className="md:hidden" />
              </li>
            </ul>
          </div>
          <div className="text-sm w-full md:w-1/4 footer-grid md:flex md:flex-col mb-8 md:mb-0">
            <p className="font-semibold col-start-2">Features</p>
            <ul className="col-start-2 -ml-[14px] pb-8 border-b md:border-none">
              <li className="flex items-center justify-between cursor-pointer px-[14px] py-[9px] rounded-md hover:bg-liteGrey">
                Download Apps <FiChevronRight size={20} className="md:hidden" />
              </li>
              <li className="flex items-center justify-between cursor-pointer px-[14px] py-[9px] rounded-md hover:bg-liteGrey">
                Help Center <FiChevronRight size={20} className="md:hidden" />
              </li>
              <li className="flex items-center justify-between cursor-pointer px-[14px] py-[9px] rounded-md hover:bg-liteGrey">
                Productivity Methods{' '}
                <FiChevronRight size={20} className="md:hidden" />
              </li>
              <li className="flex items-center justify-between cursor-pointer px-[14px] py-[9px] rounded-md hover:bg-liteGrey">
                Integrations
                <FiChevronRight size={20} className="md:hidden" />
              </li>
              <li className="flex items-center justify-between cursor-pointer px-[14px] py-[9px] rounded-md hover:bg-liteGrey">
                Channel Partners{' '}
                <FiChevronRight size={20} className="md:hidden" />
              </li>
              <li className="flex items-center justify-between cursor-pointer px-[14px] py-[9px] rounded-md hover:bg-liteGrey">
                Developer API <FiChevronRight size={20} className="md:hidden" />
              </li>
              <li className="flex items-center justify-between cursor-pointer px-[14px] py-[9px] rounded-md hover:bg-liteGrey">
                Status <FiChevronRight size={20} className="md:hidden" />
              </li>
            </ul>
          </div>
          <div className="text-sm w-full md:w-1/4 footer-grid md:flex md:flex-col mb-8 md:mb-0">
            <p className="font-semibold col-start-2">Company</p>
            <ul className="col-start-2 -ml-[14px] pb-8 border-b md:border-none">
              <li className="flex items-center justify-between cursor-pointer px-[14px] py-[9px] rounded-md hover:bg-liteGrey">
                About Us <FiChevronRight size={20} className="md:hidden" />
              </li>
              <li className="flex items-center justify-between cursor-pointer px-[14px] py-[9px] rounded-md hover:bg-liteGrey">
                Careers <FiChevronRight size={20} className="md:hidden" />
              </li>
              <li className="flex items-center justify-between cursor-pointer px-[14px] py-[9px] rounded-md hover:bg-liteGrey">
                Inspiration Hub{' '}
                <FiChevronRight size={20} className="md:hidden" />
              </li>
              <li className="flex items-center justify-between cursor-pointer px-[14px] py-[9px] rounded-md hover:bg-liteGrey">
                Press <FiChevronRight size={20} className="md:hidden" />
              </li>
              <li className="flex items-center justify-between cursor-pointer px-[14px] py-[9px] rounded-md hover:bg-liteGrey">
                Twist <FiChevronRight size={20} className="md:hidden" />
              </li>
            </ul>
          </div>
          <div className="w-full footer-grid md:block md:w-fit">
            <div className="col-start-2 flex items-center -ml-[12px] md:flex-col md:-mt-[12px]">
              <span className="p-[12px] rounded-md hover:bg-liteGrey cursor-pointer">
                <BsTwitter size={20} />
              </span>
              <span className="p-[12px] rounded-md hover:bg-liteGrey cursor-pointer">
                <BsYoutube size={20} />
              </span>
              <span className="p-[12px] rounded-md hover:bg-liteGrey cursor-pointer">
                <BsFacebook size={20} />
              </span>
              <span className="p-[12px] rounded-md hover:bg-liteGrey cursor-pointer">
                <BsInstagram size={20} />
              </span>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#0000000d] pb-[70px] pt-[10px] md:pb-[10px]">
        <div className="footer-grid px-6 md:container md:flex md:items-center mx-auto md:justify-between md:flex-row-reverse">
          <div className="col-start-2 min-w-[200px]">
            <div className="flex items-center text-sm w-full p-2 bg-zinc-200 rounded-md gap-3">
              <BsGlobe2 /> <p>English</p>
            </div>
          </div>
          <div className="col-start-2 text-[#232115A6] text-xs">
            <span className="pr-1 border-r border-r-[#232115A6]">Security</span>
            <span className="px-1 border-r border-r-[#232115A6]">Privacy</span>
            <span className="px-1">Terms</span>
            <span className="pl-1"> &copy; dt-coders </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
