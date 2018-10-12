import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <Grid container justify="center" style={{ marginTop: "50px" ,minHeight:"50vh",padding:"10px"}} spacing={24}>
      <Grid item xs={12} lg={5} >
        <Paper className={classes.root} elevation={2} style={{padding:"15px" ,minHeight:"40%"}}>
          <Typography variant="h5" component="h3">
            Vision
          </Typography>
          <Typography component="p">
            The SRM Centre for Applied Research in Education(SRM - CARE), is a
            place where our Institution faculty, staff, students, and other
            members work in a collaborative environment to create rich, engaged
            learning and teaching experiences; conduct research in all aspects
            of education; increase student success, build vital partnerships for
            improved learning, and invites individuals to become members of an
            intellectually diverse, active learning community.
          </Typography>
        </Paper>
        </Grid>
        <Grid item xs={12} lg={6}>
        <Paper className={classes.root} elevation={2} style={{padding:"15px",minHeight:"40%"}}>
          <Typography variant="h5" component="h3">
            Mission
          </Typography>
          <Typography component="p">
            To facilitate a productive educational environment in the Institute
            by motivating teachers and students towards an efficient and
            enjoyable educational interaction through exposure to
            research-based, scientifically-proven, and innovative
            teaching-learning methodologies, to promote high class research in
            education, to create and develop synergy between the teachers and
            students for a new and sustainable paradigm of higher technical
            education, with the ultimate aim of producing human resources of the
            highest professional and personal quality.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
