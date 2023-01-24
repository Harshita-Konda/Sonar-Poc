import React from "react";
import MuiIcon from "../../atoms/Icon";
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
import MuiCard from "../../molecules/Card";
import theme from "../../../themes";

const SideNav = () => {
  const vals = [
    {
      iconOf: <GridViewOutlinedIcon />,
      name: "Home",
    },
    {
      iconOf: <PeopleAltOutlinedIcon />,
      name: "Candidates",
    },
    {
      iconOf: <GavelIcon />,
      name: "Adverse Actions",
    },
    {
      iconOf: <DescriptionIcon />,
      name: "Logs",
    },
    {
      iconOf: <AssessmentOutlinedIcon />,
      name: "Analytics",
    },
    {
      iconOf: <ManageAccountsOutlinedIcon />,
      name: "Account",
    },
    {
      iconOf: <WysiwygIcon />,
      name: "Screenings",
    },
  ];


  return (
    <Box>
      <Box
        m={1} //margin
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          maxWidth: "250px",
          maxHeight: "800px",
          backgroundColor: "lightgray",
          borderRadius: "5px",
        }}
      >
        <Box
          m={1}
          sx={{
            padding: "20px",
            width: "250px",
            height: "500px",
            backgroundColor: "white",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={"bold"}
            sx={{
              color: theme.palette.primary.main,
              padding:"8px"
            }}
          >
            RECRUIT
          </Typography>
          <Stack spacing={2}>
          {vals.map((e) => (
            <>
              <Grid 
              spacing={5}
                sx={{
                  display: "flex",
                  p: "3px",
                  "&:hover": {
                    backgroundColor:"whitesmoke",
                    color:theme.palette.primary.main,
                    borderRadius: 2,
                  },
                }}
              ><Stack direction={"row"}spacing={1}>
                <MuiIcon icon={e.iconOf} />
                
                <Typography variant="body1"
                  sx={{
                    padding: "3px",
                  }}
                >
                {e.name}
                </Typography>
                </Stack>
              </Grid>
            </>
          ))}
          </Stack>
        </Box>
      </Box>
      <MuiCard />
    </Box>
  );
};

export default SideNav;
