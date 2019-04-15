import { withStyles } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import ArrowBackIcon from "@material-ui/icons/ArrowBackIos";
import CheckIcon from "@material-ui/icons/Check";
import React, { useState } from "react";
import Team from "../Team/Team.component";
import newMatchStyles from "./NewMatch.component.styles";

const NewMatch = ({ classes }) => {
  const [open, setOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <React.Fragment>
      <Fab color="primary" onClick={() => setOpen(true)}>
        <AddIcon />
      </Fab>
      <Dialog fullScreen open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          <Grid alignItems="center" container>
            <Grid item>
              <IconButton onClick={() => setOpen(false)}>
                <ArrowBackIcon />
              </IconButton>
            </Grid>
            <Grid classes={{ item: classes.title }} item>
              <Typography align="center" variant="h6">
                New Match 3v4
              </Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={() => setOpen(false)}>
                <CheckIcon />
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <Tabs
            indicatorColor="primary"
            onChange={(event, value) => setTabIndex(value)}
            value={tabIndex}
            variant="fullWidth"
          >
            <Tab label="Winners" />
            <Tab label="Losers" />
          </Tabs>
          {tabIndex === 0 && (
            <div className={classes.tabContainer}>
              <Team label="Winner" />
            </div>
          )}
          {tabIndex === 1 && (
            <div className={classes.tabContainer}>
              <Team label="Loser" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default withStyles(newMatchStyles)(NewMatch);
