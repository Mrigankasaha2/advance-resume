/* eslint-disable react/prop-types */
import React from 'react';
import { SiLinkedin, SiFacebook, SiGithub, SiTwitter } from 'react-icons/si';
import { FaDownload } from 'react-icons/fa';

export default function Aboutme() {
  return (
    <figure className="md:flex bg-white dark:bg-gray-700 rounded-xl p-8 md:p-0 mx-4">
      <img
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src="https://avatars.dicebear.com/api/avataaars/Mrigsasdasdaasddddddddd.svg"
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium dark:text-gray-300">
            “I am a driven and results-focused professional with over 5.5 years
            of experience in the technology industry. My expertise lies in
            developing and maintaining applications using the Microsoft
            technology stack, including .NET Core, Angular, and SQL Server. I am
            also a Microsoft Certified Azure Developer and have worked with
            various Azure PaaS solutions, including Web App, Function App, Azure
            Kubernetes Services, Web Jobs, Service Bus, Event Hub, and others.
            In addition to my technical skills, I have also acquired knowledge
            of other technologies such as React, MongoDB, Docker, SignalR,
            TailwindCSS, SCSS, Material UI, and others. I have a basic
            understanding of creating a CICD pipeline using Azure DevOps and
            GitHub Action. My goal is to continue growing my technical knowledge
            and bring value to my clients by delivering high-quality solutions.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-indigo-500 dark:text-indigo-400">
            Mriganka Shekhar Saha
          </div>
          <div className="text-gray-700 dark:text-gray-300">
            - Senior Software Engineer, EY
          </div>
        </figcaption>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <FaDownload className="mr-2 -ml-1 w-5 h-5" />
          Download Resume
        </button>
      </div>
      <div className="pt-4 pb-2">
        <Socialmediaicons
          icons={<SiLinkedin size={28} className="text-blue-700" />}
          link="https://www.linkedin.com/in/mriganka-shekhar-saha-ba16ba13b/"
        />
        <Socialmediaicons
          icons={<SiGithub size={28} className="text-purple-700" />}
          link="https://github.com/Mrigankasaha2"
        />
        <Socialmediaicons
          icons={<SiTwitter size={28} className="text-blue-600" />}
          link="https://twitter.com/beingmriganka"
        />
        <Socialmediaicons
          icons={<SiFacebook size={28} className="text-blue-600" />}
          link="https://www.facebook.com/mriganka.saha.28"
        />
      </div>
    </figure>
  );
}
const Socialmediaicons = ({ icons, link = '' }) => {
  return (
    <a
      className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      href={link}
      target={'_blank'}
      rel="noreferrer"
    >
      {icons}
    </a>
  );
};
