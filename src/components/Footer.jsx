import React from "react";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import { FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="md:flex md:items-center md:justify-between h-16">
        <ul className="flex mb-4 md:order-1 md:mb-0 ml-16">
          <Contacticon icon={<FaPhone size={20} />} link="tel:+919432121761" />
          <Contacticon
            icon={<SiWhatsapp size={20} />}
            link="https://wa.me/919432121761"
          />
          <Contacticon
            icon={<SiGmail size={20} />}
            link="mailto: mrigankasaha2@gmail.com"
          />
        </ul>
        <div className="text-sm text-gray-600 dark:text-gray-500 mr-4 ml-20">
          Made by{" "}
          <a
            className="text-blue-600 hover:underline"
            href="https://cruip.com/"
          >
            Mriganka Shekhar Saha
          </a>
          . All rights reserved.
        </div>
      </div>
    </div>
  );
}

const Contacticon = ({ icon, link = "" }) => {
  return (
    <li>
      <a
        className="flex justify-center items-center text-gray-600 dark:text-gray-400 bg-transparent mx-2"
        aria-label="contact"
        href={link}
      >
        {icon}
      </a>
    </li>
  );
};
