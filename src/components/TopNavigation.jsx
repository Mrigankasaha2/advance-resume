import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import useDarkMode from '../hooks/useDarkMode';

export default function TopNavigation() {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  let navigate = useNavigate();
  return (
    <div className="top-navigation">
      <h5
        className="title-text cursor-pointer"
        onClick={() => {
          navigate('/');
        }}
      >
        Mriganka Resume
      </h5>
      <span onClick={handleMode}>
        {darkTheme ? (
          <FaSun
            size="24"
            className="top-navigation-icon hover:text-yellow-500"
          />
        ) : (
          <FaMoon
            size="24"
            className="top-navigation-icon hover:text-indigo-500"
          />
        )}
      </span>
    </div>
  );
}
