import React from "react";
import { IconPlus } from "@tabler/icons-react";

const CustomButtonSmall = ({ onButtonClick }) => {
  return (
    <button className="custom-button-small" onClick={onButtonClick}>
      <IconPlus color="#FFF" id="plus" size={18} />
    </button>
  );
};

export default CustomButtonSmall;
