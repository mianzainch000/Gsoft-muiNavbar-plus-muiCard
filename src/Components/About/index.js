import React from "react";
import { Grid } from "@mui/material";
export const About = () => {
  return (
    <div>
      <Grid container item lg={12} sx={{ marginTop: "100px;" }}>
        <Grid container item lg={6}>
          <Grid
            item
            lg={12}
            sx={{ width: "100%;", height: "200px;", backgroundColor: "green;" }}
          ></Grid>
          <Grid
            item
            lg={12}
            sx={{ width: "100%;", height: "100px;", backgroundColor: "red;" }}
          ></Grid>
          <Grid
            item
            lg={6}
            sx={{ backgroundColor: "blue;", height: "70px;" }}
          ></Grid>
          <Grid
            item
            lg={6}
            sx={{ backgroundColor: "orange;", height: "70px;" }}
          ></Grid>
        </Grid>

        <Grid container item lg={6}>
          <Grid
            item
            lg={6}
            sx={{ backgroundColor: "blue;", height: "70px;" }}
          ></Grid>
          <Grid
            item
            lg={6}
            sx={{ backgroundColor: "orange;", height: "70px;" }}
          ></Grid>

          <Grid
            item
            lg={12}
            sx={{ width: "100%;", height: "100px;", backgroundColor: "red;" }}
          ></Grid>
          <Grid
            item
            lg={12}
            sx={{ width: "100%;", height: "200px;", backgroundColor: "green;" }}
          ></Grid>
        </Grid>
      </Grid>
    </div>
  );
};
