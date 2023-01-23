import { Avatar, Card, CardHeader, Grid, Box } from "@mui/material";
import React from "react";

import LogoutIcon from "@mui/icons-material/Logout";
import MuiIconButton from "../../atoms/IconButton";

const MuiCard = () => {
  return (
    <div>
      <Box
        m={1} //margin
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
      >
        <Card
          sx={{
            width: "250px",
          }}
        >
          <CardHeader
            avatar={<Avatar></Avatar>}
            action={
              <Grid
                spacing={5}
                paddingTop="5px"
                style={{
                  display: "flex",
                }}
              >
                <MuiIconButton icon={<LogoutIcon/>}></MuiIconButton>
              </Grid>
            }
            title="James Rodriguez"
            subheader="James.co"
          />
        </Card>
      </Box>
    </div>
  );
};

export default MuiCard;
