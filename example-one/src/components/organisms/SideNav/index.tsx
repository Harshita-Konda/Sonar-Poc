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
import { styled } from "@mui/material";
import MuiIconButton from "../../atoms/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";

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

  const StyleTypography = styled(Typography)({
    color: theme.palette.primary.main,
    padding: "8px",
    fontWeight: theme.typography.h1.fontWeight,
    fontSize: theme.typography.h1.fontSize,
  });

  const StyleBox = styled(Box)({
    maxWidth: "250px",
    maxHeight: "800px",
    backgroundColor: "lightgray",
    borderRadius: "5px",
  });

  const StyleGrid = styled(Grid)({
    
    display: "flex",
    p: "3px",
    "&:hover": {
      backgroundColor: "whitesmoke",
      color: theme.palette.primary.main,
      borderRadius: 2,
    },
  });

  return (
    <Box>
      <StyleBox
        m={1} //margin
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
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
          <StyleTypography>RECRUIT</StyleTypography>
          <Stack spacing={2}>
            {vals.map((e) => (
              <>
                <StyleGrid
                  spacing={5}
                  // sx={{
                  //   display: "flex",
                  //   p: "3px",
                  //   "&:hover": {
                  //     backgroundColor: "whitesmoke",
                  //     color: theme.palette.primary.main,
                  //     borderRadius: 2,
                  //   },
                  // }}
                >
                  <Stack direction={"row"} spacing={1}>
                    <MuiIcon icon={e.iconOf} />

                    <Typography
                      variant="subtitle1"
                      sx={{
                        padding: "3px",
                      }}
                    >
                      {e.name}
                    </Typography>
                  </Stack>
                </StyleGrid>
              </>
            ))}
          </Stack>
        </Box>
      </StyleBox>
      <MuiCard>
        <MuiIconButton icon={<LogoutIcon />}></MuiIconButton>
      </MuiCard>
    </Box>
  );
};

export default SideNav;
