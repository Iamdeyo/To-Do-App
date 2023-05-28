import { useEffect, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import Tl from '../assets/img/1.jpg';
import Tr from '../assets/img/2.jpg';
import Bl from '../assets/img/3.jpg';
import Br from '../assets/img/4.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../redux/slices/authApiSlice';
import { setCredentials } from '../redux/slices/authSlice';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hidPassword, setHidPassword] = useState(true);
  const hidpasswordHandler = () => {
    setHidPassword((prev) => (prev = !prev));
  };
  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/home');
    }
  }, [navigate, userInfo]);

  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const fullname = 'Ademola Taiwo';
      const res = await register({ username, password, fullname }).unwrap();
      console.log(res);
      dispatch(setCredentials(res.data));
    } catch (err) {
      // console.log(err?.data?.message || err.error);
      console.log(err);
    }
  };
  return (
    <>
      <div className="container max-w-5xl mx-auto p-[24px] min-h-[600px] h-screen flex flex-col gap-[32px] lg:gap-0">
        <div className="max-w-[400px] mx-auto w-full lg:max-w-none">
          <div className="flex items-center pb-[32px]">
            <svg
              className="relative -left-[13px] -top-[13px]"
              width="56px"
              height="56px"
              viewBox="-2.4 -2.4 28.80 28.80"
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
            <p className="text-[#DE483A] relative -left-[13px] -top-[13px] text-2xl font-semibold hidden sm:block">
              d-todo
            </p>
          </div>
        </div>
        <div className="pt-[32px] flex">
          <div className="w-full lg:w-1/2 p-[32px] lg:px-0">
            <div className="max-w-[400px] w-full mx-auto lg:mx-0">
              <div className="flex flex-col gap-[32px]">
                <p className="text-3xl text-[#202020] font-bold">Sign up</p>
                <div className="flex flex-col gap-3">
                  <div className="cursor-pointer border px-[16px] flex gap-3 items-center justify-center min-w-[68px] h-[46px] text-lg font-bold hover:bg-liteGrey ease-out duration-150 rounded-lg">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                      className="MfSWZ05"
                      aria-hidden="true"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path
                          d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                          fill="#4285F4"
                        ></path>
                        <path
                          d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
                          fill="#34A853"
                        ></path>
                        <path
                          d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                          fill="#FBBC05"
                        ></path>
                        <path
                          d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
                          fill="#EA4335"
                        ></path>
                        <path d="M0 0h18v18H0z"></path>
                      </g>
                    </svg>
                    <span>Continue with Google</span>
                  </div>
                  <div className="cursor-pointer border px-[16px] flex gap-3 items-center justify-center min-w-[68px] h-[46px] text-lg font-bold hover:bg-liteGrey ease-out duration-150 rounded-lg">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="MfSWZ05"
                      aria-hidden="true"
                    >
                      <mask
                        id="facebook-icon_svg__a"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="18"
                        height="18"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M.001 0H18v17.89H.001V0z"
                          fill="#fff"
                        ></path>
                      </mask>
                      <g mask="url(#facebook-icon_svg__a)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18 9a9 9 0 10-10.406 8.89v-6.288H5.309V9h2.285V7.017c0-2.255 1.343-3.501 3.4-3.501.984 0 2.014.175 2.014.175v2.215h-1.135c-1.118 0-1.467.694-1.467 1.406V9h2.496l-.399 2.602h-2.097v6.289C14.71 17.216 18 13.492 18 9z"
                          fill="#1877F2"
                        ></path>
                      </g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.503 11.602l.4-2.602h-2.497V7.312c0-.712.349-1.406 1.467-1.406h1.135V3.691s-1.03-.175-2.015-.175c-2.056 0-3.4 1.246-3.4 3.501V9H5.31v2.602h2.285v6.289a9.067 9.067 0 002.812 0V11.6h2.097z"
                        fill="#fff"
                      ></path>
                    </svg>
                    <span>Continue with Facebook</span>
                  </div>
                  <div className="cursor-pointer border px-[16px] flex gap-3 items-center justify-center min-w-[68px] h-[46px] text-lg font-bold hover:bg-liteGrey ease-out duration-150 rounded-lg">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 256 315"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid"
                      className="MfSWZ05"
                      aria-hidden="true"
                    >
                      <path d="M214 167c0 48 42 63 42 64s-7 22-22 44c-13 20-26 39-48 39-21 0-28-12-52-12s-31 12-51 12c-21 1-37-20-50-39-27-39-48-111-20-159 14-24 39-39 65-39 21-1 40 13 52 13s36-16 60-14c11 0 39 4 58 31-2 1-35 20-34 60M174 50c11-13 19-32 17-50-16 1-35 11-47 24a66 66 0 00-16 48c17 2 35-9 46-22"></path>
                    </svg>
                    <span>Continue with Apple</span>
                  </div>
                </div>
                <div>
                  <form onSubmit={formHandler} className="flex flex-col gap-3">
                    <div className="h-[62px] min-w-[68px] border rounded-xl p-[8px] pb-[4px] flex flex-col text-[#202020]">
                      <span className="text-xs pb-[8px]">username</span>
                      <input
                        placeholder="Enter your username..."
                        className="w-full outline-none appearance-none bg-transparent"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="h-[62px] min-w-[68px] border rounded-xl p-[8px] pb-[4px] flex flex-col text-[#202020]">
                      <span className="text-xs pb-[8px]">password</span>
                      <div className="flex gap-2">
                        <input
                          placeholder="Enter your password.."
                          className="w-full outline-none appearance-none bg-transparent"
                          type={hidPassword ? 'password' : 'text'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                          onClick={hidpasswordHandler}
                          className="text-[#666]"
                        >
                          {!hidPassword ? <FiEye /> : <FiEyeOff />}
                        </span>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bg-priDark text-white font-semibold px-[16px] min-w-[68px] rounded-lg h-[48px] text-lg hover:bg-priDarkHover ease-out duration-150"
                    >
                      Sign up with Username
                    </button>
                  </form>
                  <p className="pt-4 text-[#202020] text-xs font-medium">
                    By continuing with Google, Apple, or Email, you agree to
                    Todoist’s{' '}
                    <span className="underline">Terms of Service</span> and{' '}
                    <span className="underline">Privacy Policy</span>.
                  </p>
                </div>
                <p className="text-[#202020] text-center text-xs font-medium">
                  Aleardy signed up?{' '}
                  <Link to={'/login'} className="underline">
                    Go to login
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* rhs */}
          <div className="hidden w-1/2 text-[#202020] lg:block">
            <div className="grid items-center p-7 h-full grid-cols-2 grid-rows-2">
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
        </div>
      </div>
    </>
  );
};

export default Register;
