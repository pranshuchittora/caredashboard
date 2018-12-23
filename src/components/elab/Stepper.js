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
import { ContextRecentsConsumer } from "../../pages/MainPage";
import Labs from "./Labs";
import UpdateLS from "../../util/UpdateLocalStorage";
const campus = ["KTR", "RMP", "VDP", "NCR", "Other Campus"];

const department = [
  // department
  // KTR
  {
    dep: ["CSE", "IT", "SWE", "PPS", "3rd Year Skill Training", "Staff Elab"],
    labs: [
      // Labs for KTR-CSE
      [
        {
          label: "JAVA",
          link: "http://care.srmuniv.ac.in/elockktrsrmcarecsejava"
        },
        {
          label: "ADA",
          link: "http://care.srmuniv.ac.in/elockadaktrsrmcarecsejava"
        }
      ],
      // Labs for KTR IT
      [
        {
          label: "JAVA & ADA",
          link: "http://care.srmuniv.ac.in/elockitcaresrmadajavaktr"
        }
      ],
      // Labs for KTR SWE
      [
        {
          label: "JAVA & ADA",
          link: "http://care.srmuniv.ac.in/elockswecaresrmadajavaktr"
        }
      ],
      // Labs for PPS
      [
        {
          label: "PPS",
          link: "http://care.srmuniv.ac.in/elockcaresrmcseitswektrpps"
        }
      ],
      // Labs for 3rd year skill
      [
        {
          label: "Skill Training",
          link: "http://care.srmuniv.ac.in/ktrstudentskill"
        }
      ],
      // Labs for KTR Staff
      [{ label: "Staff Lab", link: "http://care.srmuniv.ac.in/ktrstaffskill" }]
    ]
  },
  // RMP
  {
    dep: ["CSE-RMP", "IT-RMP", "PPS", "3rd Year Skill Training", "Staff Elab"],
    labs: [
      // Labs for RMP-CSE
      [
        { label: "JAVA", link: "http://care.srmuniv.ac.in/java" },
        { label: "ADA", link: "http://care.srmuniv.ac.in/ada" }
      ],
      // Labs for RMP IT
      [{ label: "JAVA & ADA", link: "http://care.srmuniv.ac.in/javait" }],
      // Labs for PPS
      [{ label: "PPS", link: "http://care.srmuniv.ac.in/javait" }],
      // Labs for 3rd year skill
      [{ label: "Skill Training", link: "http://care.srmuniv.ac.in/javait" }],
      // Labs for KTR Staff
      [{ label: "Staff Lab", link: "http://care.srmuniv.ac.in/javait" }]
    ]
  },
  // VDP
  {
    dep: ["CSE", "PPS", "3rd Year Skill Training", "Staff"],
    labs: [
      // Labs for VDP CSE
      [{ label: "JAVA & ADA", link: "http://care.srmuniv.ac.in/java" }],
      // Labs for VDP PPS
      [{ label: "PPS", link: "http://care.srmuniv.ac.in/javait" }],
      // Labs for 3rd Year
      [
        {
          label: "3rd Year Skill Training",
          link: "http://care.srmuniv.ac.in/javait"
        }
      ],
      // Labs for Staff
      [{ label: "Staff eLab", link: "http://care.srmuniv.ac.in/javait" }]
    ]
  },
  // Delhi NCR
  {
    dep: ["CSE", "IT", "PPS", "3rd Year Skill Training", "Staff"],
    labs: [
      // Labs for NCR-CSE
      [{ label: "JAVA & ADA", link: "http://care.srmuniv.ac.in/java" }],
      // Labs for NCR IT
      [{ label: "JAVA & ADA", link: "http://care.srmuniv.ac.in/javait" }],
      // Labs for NCR PPS
      [{ label: "PPS", link: "http://care.srmuniv.ac.in/javait" }],
      // Labs for 3rd Year
      [
        {
          label: "3rd Year Skill Training",
          link: "http://care.srmuniv.ac.in/javait"
        }
      ],
      // Labs for Staff
      [{ label: "Staff eLab", link: "http://care.srmuniv.ac.in/javait" }]
    ]
  }, // Amravathi & Vallamai
  {
    dep: ["Amravathi", "TRP-Valliammai-Easwari"],
    labs: [
      // Labs for Amravathi
      [{ label: "SRM - Amaravathi", link: "http://care.srmuniv.ac.in/java" }],
      // Labs for TRP-EEC-VEC
      [{ label: "TRP-EEC-VEC", link: "http://care.srmuniv.ac.in/javait" }]
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
                <ContextRecentsConsumer>
                  {context => (
                    <div
                      key={idx}
                      onClick={() => {
                        this.handleUpdateStorage(
                          campus[this.state.campus],
                          department[this.state.campus].dep[
                            this.state.department
                          ],
                          val.label,
                          val.link
                        );
                        context.updateRecents();
                      }}
                    >
                      <Labs label={val.label} />
                    </div>
                  )}
                </ContextRecentsConsumer>
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
  handleUpdateStorage(campus, department, label, link) {
    UpdateLS(campus, department, label, link);
  }

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
