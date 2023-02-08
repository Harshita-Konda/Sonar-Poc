import Typography from "@mui/material/Typography";
import React from "react";
interface TypoProps{
    name:string;
    sx:React.CSSProperties;
}
const MuiTypography = (props: TypoProps) => {
    const {name} =props;
    return (
    <div>
      {name}
    </div>
  );
  }
  
  export default MuiTypography;