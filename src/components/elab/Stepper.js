import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
// Custom
import Labs from "./Labs";

const campus = ["KTR", "RMP", "VDP", "NCR", "Other Campus"];

const department = [
  // department
  // KTR
  {
    dep: ["CSE-KTR", "IT-KTR", "SWE-KTR"],
    labs: [
      // Labs for KTR-CSE
      [
        { label: "JAVA", link: "http://care.srmuniv.ac.in/java" },
        { label: "ADA", link: "http://care.srmuniv.ac.in/ada" }
      ],
      // Labs for KTR IT
      [
        { label: "JAVA-IT", link: "http://care.srmuniv.ac.in/javait" },
        { label: "ADA-IT", link: "http://care.srmuniv.ac.in/adait" }
      ],
      // Labs for KTR SWE
      [
        { label: "JAVA-SWE", link: "http://care.srmuniv.ac.in/javait" },
        { label: "ADA-SWE", link: "http://care.srmuniv.ac.in/adait" }
      ]
    ]
  },
  // RMP
  {
    dep: ["CSE-RMP", "IT-RMP", "SWE-RMP"],
    labs: [
      // Labs for KTR-CSE
      [
        { label: "JAVA RMP", link: "http://care.srmuniv.ac.in/java" },
        { label: "ADA RMP", link: "http://care.srmuniv.ac.in/ada" }
      ],
      // Labs for KTR IT
      [
        { label: "JAVA-IT", link: "http://care.srmuniv.ac.in/javait" },
        { label: "ADA-IT", link: "http://care.srmuniv.ac.in/adait" }
      ],
      // Labs for KTR SWE
      [
        { label: "JAVA-SWE", link: "http://care.srmuniv.ac.in/javait" },
        { label: "ADA-SWE", link: "http://care.srmuniv.ac.in/adait" }
      ]
    ]
  }
];

const styles = theme => ({
  root: {
    width: "90%"
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2
  },
  resetContainer: {
    padding: theme.spacing.unit * 3
  }
});

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
    campus: -1,
    department: -1
  };

  getSteps() {
    return ["Select Campus", "Select Department", "Select Lab"];
  }

  getStepContent(step) {
    switch (step) {
      case 0:
        return campus.map((val, idx) => (
          <div key={idx} onClick={() => this.handleCampus(idx)}>
            <Labs label={val} />
          </div>
        ));
      case 1:
        return this.state.campus >= 0
          ? department[this.state.campus].dep.map((val, idx) => (
              <div key={idx} onClick={() => this.handleDepartment(idx)}>
                <Labs label={val} />
              </div>
            ))
          : null;
      case 2:
        return this.state.department >= 0
          ? department[this.state.campus].labs[this.state.department].map(
              (val, idx) => (
                <div key={idx}>
                  <Labs label={val.label} />
                </div>
              )
            )
          : null;

      default:
        return "Unknown step";
    }
  }

  handleCampus(idx) {
    this.setState({
      ...this.state,
      campus: idx,
      activeStep: this.state.activeStep + 1
    });
  }
  handleDepartment(idx) {
    this.setState({
      ...this.state,
      department: idx,
      activeStep: this.state.activeStep + 1
    });
  }
  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{this.getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(VerticalLinearStepper);
