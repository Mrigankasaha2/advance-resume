import React from "react";
import { SiLinkedin, SiFacebook, SiGithub, SiTwitter } from "react-icons/si";

export default function Aboutme() {
  return (
    <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 dark:bg-gray-800 mx-4">
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
            “I am a full stack developer with work experience in .NET Core,
            Angular, SQL Server, and Azure”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-indigo-500 dark:text-indigo-400">
            Mriganka Shekhar Saha
          </div>
          <div className="text-gray-700 dark:text-gray-500">
            - Senior Software Engineer, EY
          </div>
        </figcaption>
      </div>
      <div className="pt-4 pb-2">
        <Socialmediaicons
          icons={<SiLinkedin size={28} className="text-blue-500" />}
          link="https://www.linkedin.com/in/mriganka-saha-ba16ba13b/"
        />
        <Socialmediaicons
          icons={<SiGithub size={28} className="text-purple-700" />}
          link="https://github.com/Mrigankasaha2"
        />
        <Socialmediaicons
          icons={<SiTwitter size={28} className="text-blue-400" />}
          link="https://twitter.com/beingmriganka"
        />
        <Socialmediaicons
          icons={<SiFacebook size={28} className="text-blue-500" />}
          link="https://www.facebook.com/mriganka.saha.1996"
        />
      </div>
    </figure>
  );
}
const Socialmediaicons = ({ icons, link = "" }) => {
  return (
    <a
      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      href={link}
      target={"_blank"}
      rel="noreferrer"
    >
      {icons}
    </a>
  );
};
