import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: "95%"
  },
  input: {
    display: "none"
  }
});

function ContainedButtons(props) {
  const { classes } = props;
  const btnColor = props.btncolor;

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        href={props.link}
        target="_blank"
      >
        {props.label}
      </Button>
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContainedButtons);
