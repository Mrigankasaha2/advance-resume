import React from 'react';

export default function Experience() {
  return (
    <div className="container bg-gray-300 dark:bg-gray-800 mx-auto w-full rounded-lg">
      <div className="relative wrap overflow-hidden h-full p-2 sm:p-10">
        <div
          className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-gray-500 h-full border"
          style={{ left: '50%' }}
        ></div>
        <SectionRight
          number="1"
          compantName="EY"
          duration="2021 - Present"
          description="Working in Open Banking project with .NET Core Microservices, Azure SQL Database and Angular Frontend."
        />
        <SectionLeft
          number="2"
          compantName="TCS"
          duration="2017 - 2021"
          description=".NET Fullstack Developer working at L3 support. With Experience in .NET Core, Angular, Azure and SQL Server"
        />
      </div>
    </div>
  );
}
const SectionRight = ({
  number,
  compantName = '',
  duration = '',
  description = '',
}) => {
  return (
    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">{number}</h1>
      </div>
      <div className="order-1 bg-gray-400 dark:bg-gray-700 rounded-lg shadow-xl w-5/12 py-4 px-2 sm:px-6">
        <h3 className="mb-3 font-bold text-gray-800 dark:text-gray-100 text-xl">
          {compantName}
        </h3>
        <h3 className="mb-3 text-gray-500 text-xs">{duration}</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-900 dark:text-gray-400 text-opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
};
const SectionLeft = ({
  number,
  compantName = '',
  duration = '',
  description = '',
}) => {
  return (
    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto text-white font-semibold text-lg">{number}</h1>
      </div>
      <div className="order-1 bg-blue-500 dark:bg-blue-600 rounded-lg shadow-xl w-5/12 py-4 px-2 sm:px-6">
        <h3 className="mb-3 font-bold text-white text-xl">{compantName}</h3>
        <h3 className="mb-3 text-gray-300 text-sm">{duration}</h3>
        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
};
