import React from 'react';
import { AiOutlineRight, AiFillHome } from 'react-icons/ai';
import { useLocation, Link } from 'react-router-dom';
export default function BreadCrum() {
  let location = useLocation().pathname.split('/')[1];
  if (location !== '') {
    location = location.charAt(0).toUpperCase() + location.slice(1);
  }
  return (
    <nav className="flex ml-20 mt-2" aria-label="Breadcrumb">
      {location === '' ? null : (
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <AiFillHome className="mr-2 w-4 h-4" />
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <AiOutlineRight className="w-4 h-4 text-gray-400" />
              <span className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                {location}
              </span>
            </div>
          </li>
        </ol>
      )}
    </nav>
  );
}
