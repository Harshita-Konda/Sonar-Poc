import IconButton from "@mui/material/IconButton";
import React from "react";

interface IconButtonProps{
    icon:React.ReactNode;
}

const MuiIconButton = (props:IconButtonProps) => {
     const {icon}=props;
  return (
    <div>
        <IconButton>{icon}</IconButton>
    </div>
  );
};


export default MuiIconButton;