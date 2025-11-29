import React from 'react'
import DarkModeButton from '../common/DarkModeButton'
import { useDarkMode } from '../../Contexts/ThemeContext';

const Navbar = () => {

    const { darkMode, setDarkMode } = useDarkMode();
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };



    return (
        <div>Navbar
            <div className="bg-white text-black dark:bg-customDarkBg dark:text-customDarkText p-4 rounded">
                This div changes colors in dark mode
            </div>
           <button
          onClick={toggleDarkMode}
          className="h-16 w-16 rounded-xl p-3 transition duration-300 cursor-pointer"
        >
          <svg
            className="fill-gray-600 dark:fill-gray-400 block dark:hidden w-10 h-10"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg
            className="fill-yellow-500 hidden dark:block w-10 h-10"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

            <p className='text-green-500 dark:text-red-200'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            <DarkModeButton></DarkModeButton>
        </div>
    )
}

export default Navbar