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

const SideNav = () => {
  const vals = [
    [
      <GridViewOutlinedIcon />,
      <PeopleAltOutlinedIcon />,
      <GavelIcon />,
      <DescriptionIcon />,
      <AssessmentOutlinedIcon />,
      <ManageAccountsOutlinedIcon />,
      <WysiwygIcon />,
    ],
  ];
  return (
    <div>
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
          {vals.map((e) => {
            return (
              <>
                <Stack spacing={3}>
                  <Typography
                    variant="h6"
                    fontWeight={"bold"}
                    sx={{
                      color: "rebeccapurple",
                    }}
                  >
                    RECRUIT
                  </Typography>
                  <Grid
                    spacing={5}
                    sx={{
                      display: "flex",
                      p: "3px",
                      "&:hover": {
                        backgroundColor: "whitesmoke",
                        borderRadius: 2,
                      },
                    }}
                  >
                    <MuiIcon icon={e[0]} />
                    <Typography
                      sx={{
                        padding: "3px",
                      }}
                    >
                      Home
                    </Typography>
                  </Grid>
                  <Grid spacing={5} style={{ display: "flex" }}>
                    {/* <MuiIcon icon={e[1]} /> */}
                    {e[1]}
                    <Typography sx={{ padding: "3px" }}>Candidates</Typography>
                  </Grid>
                  <Grid spacing={5} style={{ display: "flex" }}>
                    <MuiIcon icon={e[2]} />
                    <Typography sx={{ padding: "3px" }}>
                      Adverse Actions
                    </Typography>
                  </Grid>
                  <Grid spacing={5} style={{ display: "flex" }}>
                    <MuiIcon icon={e[3]} />
                    <Typography sx={{ padding: "3px" }}>Logs</Typography>
                  </Grid>
                  <Grid spacing={5} style={{ display: "flex" }}>
                    <MuiIcon icon={e[4]} />
                    <Typography sx={{ padding: "3px" }}>Analytics</Typography>
                  </Grid>
                  <Grid spacing={5} style={{ display: "flex" }}>
                    <MuiIcon icon={e[5]} />
                    <Typography sx={{ padding: "3px" }}>Account</Typography>
                  </Grid>
                  <Grid spacing={5} style={{ display: "flex" }}>
                    <MuiIcon icon={e[6]} />
                    <Typography sx={{ padding: "3px" }}>Screenings</Typography>
                  </Grid>
                </Stack>
              </>
            );
          })}
        </Box>
      </Box>
      <MuiCard />
    </div>
  );
};

export default SideNav;
