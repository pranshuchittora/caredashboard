import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {
  mailFolderListItems,
  otherMailFolderListItems
} from "../components/tileData";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ElabCourseCard from "../components/elab/CourseCard";
import EProjCourseCard from "../components/eProject/CourseCard";
import EThinkCourseCard from "../components/eThink/CourseCard";
import ECurrCourseCard from "../components/eCurricula/CourseCard";
import ESkillCourseCard from "../components/eSkill/CourseCard";
import ELockCourseCard from "../components/elock/CourseCard";
import ECertificateCourseCard from "../components/eCertificate/CourseCard";
import EeventCourseCard from "../components/eEvent/CourseCard";
const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100%",
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
});

class MiniDrawer extends React.Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          color="primary"
          className={classNames(
            classes.appBar,
            this.state.open && classes.appBarShift
          )}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.hide
              )}
            >
              <MenuIcon />
            </IconButton>
        
            <Typography variant="h6" color="inherit" noWrap>
              SRM Centre for Applied Research in Education
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          title="SRMCARE"
          variant="permanent"
          elevation={20}
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !this.state.open && classes.drawerPaperClose
            )
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>{mailFolderListItems}</List>
          <Divider />
          <List>{otherMailFolderListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {/* Main Tab */}
          <Grid container style={{ paddingTop: "30px" }} spacing={24}>
            <Grid item xs={12} md={4} lg={3}>
              <ElabCourseCard course="eLab" colorHead="#3F51B5" />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <EProjCourseCard course="eProject" colorHead="#2196F3" />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <EThinkCourseCard course="eThink" colorHead="#009688" />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <ECurrCourseCard course="eCurricula" colorHead="#4CAF50" />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <ESkillCourseCard course="eSkill" colorHead="#795548" />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <ECertificateCourseCard
                course="eCertificate"
                colorHead="#6200EA"
              />
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              <EeventCourseCard course="eEvent" colorHead="#FFC107" />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <ELockCourseCard course="eLock" colorHead="#D84315" />
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);
