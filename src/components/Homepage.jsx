import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="text-center pb-12 md:pb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-gray-900 dark:text-gray-50">
          Hi, My Name is{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Mriganka
          </span>
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            “I am a full stack developer with work experience in .NET Core,
            Angular, SQL Server, and Azure”
          </p>
          <div className="max-w-xs mx-auto sm:max-w-none flex flex-col sm:flex-row justify-center items-center">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-48 m-4"
              onClick={() => {
                navigate('/skills');
              }}
            >
              View My Skills
            </button>
            <button
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-48 m-4"
              onClick={() => {
                navigate('/about');
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
