import React from "react";
import profile from "../assets/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { headerIcons, searchIcon } from "../utils/iconsData";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full px-2 bg-">
      <div className="relative w-full sm:w-80 md:w-96 lg:w-1/2 xl:w-1/3">
        <input
          type="text"
          placeholder="Search"
          className="w-60 h-10 pl-10 pr-4 bg-input-bg text-gray-custom placeholder-gray-custom rounded-md shadow-md focus:outline-none 
    sm:w-10 sm:h-6
    md:w-40 md:h-8
    lg:w-60 lg:h-10
   "
        />
        <i className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-custom">
          <FontAwesomeIcon icon={searchIcon} />
        </i>
      </div>
      <div className="flex items-center">
        {headerIcons.map((icon, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center w-10 h-10 mx-2 bg-icon-bg rounded-full"
          >
            {icon === headerIcons[2] && (
              <div className="absolute top-0 right-2 w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
            )}
            <FontAwesomeIcon icon={icon} className="text-gray-custom" />
          </div>
        ))}
        <div className="ml-2">
          <img
            src={profile}
            alt="profile"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
