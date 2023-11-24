import React from "react";
import { IconMinus } from "@tabler/icons-react";

const CustomButtonSmallMinus = ({ onButtonClick }) => {
  return (
 

<button className="custom-button-minus" onClick={onButtonClick}>
<IconMinus color="#FFF" id="plus" size={18} />
</button>

  );
};

export default CustomButtonSmallMinus;
