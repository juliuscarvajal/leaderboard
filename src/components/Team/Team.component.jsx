import { Grid } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Participant from "../Participant/Participant.component";

const Team = ({ label }) => {
  return (
    <React.Fragment>
      <Grid container direction="column">
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
      </Grid>
      <Fab color="primary" variant="extended">
        <Typography color="inherit">Add New {label}</Typography>
      </Fab>
    </React.Fragment>
  );
};

export default Team;
