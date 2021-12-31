import React from "react";
import { FaHome, FaUserGraduate, FaUserAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { SiVisualstudiocode } from "react-icons/si";

export default function Sidebar() {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg"
    >
      <a href="/">
        <SideBarIcon icon={<FaHome size="28" />} text="Home" />
      </a>
      <Divider />
      <a href="/experience">
        <SideBarIcon icon={<MdWork size="32" />} text="Experience" />
      </a>
      <a href="/skills">
        <SideBarIcon icon={<SiVisualstudiocode size="20" />} text="Skills" />
      </a>

      <a href="/education">
        <SideBarIcon icon={<FaUserGraduate size="20" />} text="Education" />
      </a>
      <Divider />
      <a href="/about">
        <SideBarIcon icon={<FaUserAlt size="22" />} text="About" />
      </a>
    </div>
  );
}

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;
