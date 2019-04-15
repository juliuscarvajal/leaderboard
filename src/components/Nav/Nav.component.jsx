import Link from "@material-ui/core/Link";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import RouterLink from "react-router-dom/Link";
import navStyles from "./Nav.component.styles";

const Nav = ({ classes }) => {
  return (
    <React.Fragment>
      <Link color="inherit" component={RouterLink} to="/results">
        <Typography className={classes.menuItem} color="inherit" variant="h6">
          Results
        </Typography>
      </Link>
      <Link color="inherit" component={RouterLink} to="/participants">
        <Typography className={classes.menuItem} color="inherit" variant="h6">
          Participants
        </Typography>
      </Link>
      <Link color="inherit" component={RouterLink} to="/stats">
        <Typography className={classes.menuItem} color="inherit" variant="h6">
          Stats
        </Typography>
      </Link>
    </React.Fragment>
  );
};

export default withStyles(navStyles)(Nav);
