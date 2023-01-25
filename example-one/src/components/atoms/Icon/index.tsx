import { Icon } from "@mui/material";
import React from "react";
interface IconProps{
  icon:React.ReactNode | string;
  sx?:React.CSSProperties,
 iconColor?:	'inherit'
  | 'action'
  | 'disabled'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning'
  | string
 
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
