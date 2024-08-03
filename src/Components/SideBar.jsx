import React from "react";
import { useState } from "react";
import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sideBarIcons, logoutIcon } from "../utils/iconsData";

const Sidebar = () => {
  const [selectedIcon, setSelectedIcon] = useState(sideBarIcons[0]);

  const handleClick = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <div className="bg-custom-bg w-14 sm:w-20 md:w-24 lg:w-26 h-screen flex flex-col items-center shadow-lg">
      <img
        className="w-4 sm:w-6 md:w-8 lg:w-10 pt-8 mb-8 sm:mb-10 md:mb-12 lg:mb-14"
        src={Logo}
        alt="Logo"
      />
      {sideBarIcons.map((icon, index) => (
        <div
          key={index}
          className={`flex items-center relative cursor-pointer ${
            icon === selectedIcon ? "text-blue-custom" : "text-gray-custom"
          } ${
            index < sideBarIcons.length - 1
              ? "mb-4 sm:mb-6 md:mb-8 lg:mb-12"
              : "mb-5"
          }`}
          onClick={() => handleClick(icon)}
        >
          <FontAwesomeIcon
            icon={icon}
            className={`transition-colors duration-300 ease-in-out ${
              icon === selectedIcon
                ? "text-blue-custom"
                : "hover:text-blue-custom"
            } text-sm sm:text-base md:text-lg lg:text-xl`}
          />
          {icon === selectedIcon && (
            <div className="absolute lg:left-[-32px] md:left-[-28px] sm:left-[-24px] left-[-20px] top-1/2 transform -translate-y-1/2 w-1 h-6 rounded-full bg-blue-custom transition-transform duration-300 ease-in-out"></div>
          )}
        </div>
      ))}
      <div
        className="flex items-center relative cursor-pointer mt-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        onClick={() => handleClick(logoutIcon)}
      >
        <FontAwesomeIcon
          icon={logoutIcon}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-custom hover:text-blue-custom"
        />
      </div>
    </div>
  );
};

export default Sidebar;
