/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Header = () => {
  return (
    <nav id="header" className="bg-white fixed w-full z-10 top-0 shadow">
      <div className="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">
        <div className="w-1/2 pr-0">
          <div className="flex relative inline-block float-right">
            <div className="relative text-sm">
              <button
                type="button"
                id="userButton"
                className="flex items-center focus:outline-none mr-3"
              >
                <span className="hidden md:inline-block">Hi, User </span>
              </button>
              <div
                id="userMenu"
                className="bg-white rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 invisible"
              >
                <ul className="list-reset">
                  <li>
                    <a
                      href="#"
                      className="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline"
                    >
                      My account
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline"
                    >
                      Notifications
                    </a>
                  </li>
                  <li>
                    <hr className="border-t mx-2 border-gray-400" />
                  </li>
                  <li>
                    <a
                      href="#"
                      className="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="block lg:hidden pr-4">
              <button
                type="button"
                id="nav-toggle"
                className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-teal-500 appearance-none focus:outline-none"
              >
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex flex-1 items-center px-4 md:px-0">
            <li className="mr-6 my-2 md:my-0">
              <a
                href="#"
                className="block py-1 md:py-3 pl-1 align-middle text-orange-600 no-underline hover:text-gray-900 border-b-2 border-orange-600 hover:border-orange-600"
              >
                <i className="fas fa-home fa-fw mr-3 text-orange-600" />
                <span className="pb-1 md:pb-0 text-sm">메인</span>
              </a>
            </li>
            <li className="mr-6 my-2 md:my-0">
              <a
                href="#"
                className="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-pink-500"
              >
                <i className="fas fa-tasks fa-fw mr-3" />
                <span className="pb-1 md:pb-0 text-sm">진행중 경기</span>
              </a>
            </li>
            <li className="mr-6 my-2 md:my-0">
              <a
                href="#"
                className="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-purple-500"
              >
                <i className="fa fa-envelope fa-fw mr-3" />
                <span className="pb-1 md:pb-0 text-sm">경기결과</span>
              </a>
            </li>
            <li className="mr-6 my-2 md:my-0">
              <a
                href="#"
                className="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-green-500"
              >
                <i className="fas fa-chart-area fa-fw mr-3" />
                <span className="pb-1 md:pb-0 text-sm">선수기록</span>
              </a>
            </li>
            <li className="mr-6 my-2 md:my-0">
              <a
                href="#"
                className="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-red-500"
              >
                <i className="fa fa-wallet fa-fw mr-3" />
                <span className="pb-1 md:pb-0 text-sm">선수분석</span>
              </a>
            </li>
            <li className="mr-6 my-2 md:my-0">
              <a
                href="#"
                className="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-red-500"
              >
                <i className="fa fa-wallet fa-fw mr-3" />
                <span className="pb-1 md:pb-0 text-sm">선수관리</span>
              </a>
            </li>
          </ul>

          <div className="relative pull-right pl-4 pr-4 md:pr-0">
            <input
              type="search"
              placeholder="Search"
              className="w-full bg-gray-100 text-sm text-gray-800 transition border focus:outline-none focus:border-gray-700 rounded py-1 px-2 pl-10 appearance-none leading-normal"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
