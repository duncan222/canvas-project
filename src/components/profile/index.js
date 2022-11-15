import "./index.scss";
import "../Layout/index.scss";
import React from "react";
import { useState, useEffect } from "react";

const Icon = () => {
  return <img src="../src/images/arrow-down.png" />;
};

const options = [
  { value: "Helvetica Neue", label: "Helvetica" },
  { value: "Coolvetica", label: "Coolvetica" },
  { value: "Times New Roman", label: "Times New Roman" },
  { value: "Arial", label: "Arial" },
];

const options2 = [
  { value: "Blue", label: "Blue" },
  { value: "Green", label: "Green" },
  { value: "Red", label: "Red" },
  { value: "Purple", label: "Purple" },
];

const Dropdown = ({ placeHolder, options }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    const handler = () => setShowMenu(false);

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });
  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.label;
    }

    return placeHolder;
  };

  const onItemClick = (option) => {
    setSelectedValue(option);
  };

  const isSelected = (option) => {
    if (!selectedValue) {
      return false;
    } else {
      document.getElementsByClassName(
        "dropdown-container"
      )[0].style.fontFamily = option.value;
      return selectedValue.value === option.value;
    }
  };

  return (
    <div className="dropdown-container">
      <div onClick={handleInputClick} className="dropdown-input">
        <div className="dropdown-selected-value">{getDisplay()}</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            <Icon />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div
              onClick={() => onItemClick(option)}
              key={option.value}
              className={`dropdown-item ${isSelected(option) && "selected"}`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Profile = () => {
  return (
    <div className="container profile-page">
      <div className="text-zone">
        <h1>Profile</h1>
      </div>
      <div>
        <h1 className="myText">Customization</h1>
      </div>
      <div position="relative">
        <Dropdown placeHolder="Font Type" options={options} />
      </div>
      <br />
      <div position="relative" left="600px">
        <Dropdown placeHolder="Color" options={options2} />
      </div>
      <button className="button">Sign Out</button>
    </div>
  );
};

export default Profile;
