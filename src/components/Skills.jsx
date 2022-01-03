import React from "react";
import {
  SiCsharp,
  SiMicrosoftazure,
  SiAngular,
  SiReact,
  SiMicrosoftsqlserver,
  SiVisualstudio,
  SiVisualstudiocode,
  SiAzuredevops,
  SiPostman,
  SiGithub,
  SiTypescript,
  SiJavascript,
  SiJquery,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMaterialdesign,
} from "react-icons/si";
import { FaSass, FaBootstrap } from "react-icons/fa";

export default function Skills() {
  return (
    <>
      <div className="card-div">
        <h2 className="skill-header-text">Skills</h2>
        <Skill icon={<SiCsharp />} skilltitle=".NET Core" covered="w-5/6" />
        <Skill
          icon={<SiMicrosoftazure />}
          skilltitle="Microsoft Azure"
          covered="w-4/6"
        />
        <Skill icon={<SiAngular />} skilltitle="Angular" covered="w-4/6" />
        <Skill icon={<SiReact />} skilltitle="React" covered="w-3/5" />
        <Skill
          icon={<SiMicrosoftsqlserver />}
          skilltitle="SQL Server"
          covered="w-11/12"
        />
      </div>
      <br></br>
      <div className="card-div">
        <h2 className="skill-header-text">Other Skills</h2>
        <div className="grid sm:flex place-items-center">
          <Otherskill
            icon={<SiTypescript className="text-blue-500" size="50" />}
          />
          <Otherskill
            icon={<SiJavascript className="text-yellow-500" size="50" />}
          />
          <Otherskill icon={<SiJquery className="text-blue-300" size="50" />} />
          <Otherskill
            icon={<SiHtml5 className="text-orange-500" size="50" />}
          />
          <Otherskill icon={<SiCss3 className="text-yellow-500" size="50" />} />
          <Otherskill icon={<FaSass className="text-pink-500" size="50" />} />
          <Otherskill
            icon={<FaBootstrap className="text-purple-500" size="50" />}
          />
          <Otherskill
            icon={<SiTailwindcss className="text-blue-400" size="50" />}
          />
          <Otherskill
            icon={<SiMaterialdesign className="text-gray-400" size="50" />}
          />
        </div>
      </div>
      <br></br>
      <div className="card-div">
        <h2 className="skill-header-text">Tools Used</h2>
        <div className="grid sm:flex text-center">
          <Tools
            icon={<SiVisualstudio className="text-purple-500" size="50" />}
          />
          <Tools
            icon={<SiVisualstudiocode className="text-blue-500" size="50" />}
          />
          <Tools icon={<SiAzuredevops className="text-blue-500" size="50" />} />
          <Tools icon={<SiPostman className="text-orange-500" size="50" />} />
          <Tools icon={<SiGithub className="text-purple-500" size="50" />} />
        </div>
      </div>
    </>
  );
}
const Skill = ({ icon, skilltitle = "Skill Title", covered = "w-full" }) => {
  return (
    <div className="mb-2">
      <h2 className="mb-2 text-gray-800 dark:text-gray-500 flex flex-row text-lg">
        <div className="flex justify-center items-center mr-2">{icon}</div>
        <div>{skilltitle}</div>
      </h2>
      <div className={"h-1 " + covered}>
        <div className="bg-blue-500 h-1 animation-progress "></div>
      </div>
    </div>
  );
};
const Tools = ({ icon }) => {
  return (
    <div className="flex-col m-4">
      <div className="flex justify-center items-center mr-2">{icon}</div>
    </div>
  );
};
const Otherskill = ({ icon }) => {
  return <div className="flex-col m-4">{icon}</div>;
};
