import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Router from "react-router-dom/BrowserRouter";
import RouterLink from "react-router-dom/Link";
import Route from "react-router-dom/Route";
import appStyles from "./App.styles";
import MatchResult from "./components/MatchResult/MatchResult.component";
import Nav from "./components/Nav/Nav.component";
import Participant from "./components/Participant/Participant.component";
import Stats from "./components/Stats/Stats.component";

const theme = createMuiTheme({
  overrides: {
    MuiFab: {
      root: {
        position: `fixed`,
        bottom: `1em`,
        right: `1em`
      }
    }
  }
});

const App = ({ classes }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="sticky">
          <Toolbar>
            <Link
              className={classes.title}
              color="inherit"
              component={RouterLink}
              to="/"
            >
              <Typography color="inherit" variant="h6">
                Leader Board
              </Typography>
            </Link>
            <Nav />
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <Route path="/results" component={MatchResult} />
          <Route path="/participants" component={Participant} />
          <Route path="/stats" component={Stats} />
        </main>
      </Router>
    </MuiThemeProvider>
  );
};

export default withStyles(appStyles)(App);
