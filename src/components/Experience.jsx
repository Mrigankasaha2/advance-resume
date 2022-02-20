/* eslint-disable react/prop-types */
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
          description="Work in Open Banking Solution with .NET Core Microservices, Angular frontend, Azure SQL Database and Azure DevOps."
          sdate="12/8/2021"
          edate="present"
        />
        <SectionLeft
          number="2"
          compantName="TCS"
          duration="2017 - 2021"
          description=".NET Fullstack Developer working at L3 support. With Experience in .NET Core, Angular, Azure and SQL Server"
          sdate="7/6/2017"
          edate="12/6/2021"
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
  sdate = '',
  edate = '',
  empType = 'Fulltime',
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
        <h3 className="mb-3 text-gray-500 text-xs">
          {duration}
          <Timeduration startDatetime={sdate} endDatetime={edate} />
          <p className="text-xs">{empType}</p>
        </h3>
        <p className="text-xs leading-snug tracking-wide text-gray-900 dark:text-gray-400 text-opacity-100">
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
  sdate = '',
  edate = '',
  empType = 'Fulltime',
}) => {
  return (
    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto text-white font-semibold text-lg">{number}</h1>
      </div>
      <div className="order-1 bg-blue-500 dark:bg-blue-600 rounded-lg shadow-xl w-5/12 py-4 px-2 sm:px-6">
        <h3 className="mb-3 font-bold text-white text-xl">{compantName}</h3>
        <h3 className="mb-3 text-gray-300 text-xs">
          {duration}
          <Timeduration startDatetime={sdate} endDatetime={edate} />
          <p className="text-xs">{empType}</p>
        </h3>
        <p className="text-xs font-medium leading-snug tracking-wide text-white text-opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
};
const Timeduration = ({ startDatetime, endDatetime }) => {
  const sdate = new Date(startDatetime);
  const edate = endDatetime === 'present' ? new Date() : new Date(endDatetime);
  const diff = Math.ceil((edate - sdate) / (1000 * 60 * 60 * 24));
  let month = 0,
    day = 0,
    year = 0;
  if (diff > 365) {
    year = Math.floor(diff / 365);
    month = Math.floor((diff % 365) / 30);
    day = Math.floor((diff % 365) % 30);
  } else if (diff > 30) {
    month = Math.floor(diff / 30);
    day = Math.floor(diff % 30);
  } else {
    day = diff;
  }
  return (
    <span className="pl-1">
      {year > 0 ? year + ' Years' : ''} {month > 0 ? month + ' months' : ''}{' '}
      {year > 1 ? '' : day > 0 ? day + ' days' : ''}
    </span>
  );
};
