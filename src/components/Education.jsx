import React from "react";

export default function Education() {
  return (
    <div className="flex flex-col sm:flex-row">
      <EducationDetails
        InstituteName="HITK"
        University="M.A.K.A.U.T"
        Subject="ECE"
        Year="2013 - 2017"
      />
      <EducationDetails
        InstituteName="Birati High School"
        University="WBBHSE"
        Subject="Science"
        Year="2011 - 2013"
      />
      <EducationDetails
        InstituteName="Birati High School"
        University="WBBSE"
        Subject="Madhyamik"
        Year="2009 - 2011"
      />
    </div>
  );
}
const EducationDetails = ({
  Year,
  InstituteName = "",
  University = "",
  Subject = "",
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 m-4">
      <img
        className="h-16 w-16 rounded-full mx-auto mb-4"
        src={`https://avatars.dicebear.com/api/initials/${InstituteName}.svg`}
        alt="EducationImage"
      />
      <div className="text-gray-900 dark:text-white">
        <h2 className="font-medium">{InstituteName}</h2>
        <div className="text-gray-500 dark:text-gray-400">{University}</div>
        <div className="text-gray-500 dark:text-gray-400">{Subject}</div>
        <div className="text-gray-500 dark:text-gray-400">Year - ({Year})</div>
      </div>
    </div>
  );
};
