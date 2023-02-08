import { Icon } from "@mui/material";
import React from "react";
interface IconProps{
  icon:React.ReactNode;
 
}
const MuiIcon = (props: IconProps) => {
  const {icon} =props;
  return (
  <div>
    <Icon>{icon}</Icon>
  </div>
);
}

export default MuiIcon;
