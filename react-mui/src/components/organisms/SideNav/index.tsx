/* eslint-disable array-callback-return */
import React from "react";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import Box from "@mui/material/Box";
import GavelIcon from "@mui/icons-material/Gavel";
import DescriptionIcon from "@mui/icons-material/DescriptionOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import { Stack } from "@mui/system";
import MuiIcon from "../../atoms/Icon";
import MuiTypography from "../../atoms/TypoGraphy";
import theme from "../../../themes";

const SideNav =()=>{
  const vals=[
    {
      iconOf:<AssessmentOutlinedIcon/>,
      name:"Home",
    },
    {
      iconOf:<AssessmentOutlinedIcon/>,
      name:"Home",
    },
    {
      iconOf:<AssessmentOutlinedIcon/>,
      name:"Home",
    }
  ];
  // <PeopleAltOutlinedIcon />,
  // <GavelIcon />,
  // <DescriptionIcon />,
  // <AssessmentOutlinedIcon />,
  // <ManageAccountsOutlinedIcon />,
  // <WysiwygIcon />,

    return (
        <div>
        <Box
          sx={{
            padding: "20px",
            width: "200px",
            height: "500px",
            border: "1px solid black",
          }}
        >
          <h2>RECRUIT</h2>
         {vals.map((item)=>(
          <>
            <Stack spacing={2}>
            <Grid spacing={5} style={{ display: "flex" }}>
              <MuiIcon icon={item.iconOf}/>
              <MuiTypography name={item.name} sx={{ padding: "3px" }}></MuiTypography>
              </Grid>
          </Stack>
          
          </>
         ))};
        </Box>
      </div>
    );
}
export default SideNav;