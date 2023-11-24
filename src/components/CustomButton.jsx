import React from "react";

const CustomButton = ({ buttonText, wide, black }) => {
  const buttonClassName = wide
    ? "custom-button custom-button-wide"
    : "custom-button";
  const buttonStyle = black ? { backgroundColor: "#323434" } : {};

  return (
    <button className={buttonClassName} style={buttonStyle}>
      <span>{buttonText}</span>
    </button>
  );
};

export default CustomButton;
