// import React from "react"
// import { Helmet } from "react-helmet"
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';



// const styles = {
//     root: {
//       flexGrow: 1,
//     },
//   };
// export default () => 
// (<div>
// <Helmet>
// <title> XYZ</title>
// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></link>
// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></link>
// </Helmet>
// <AppBar position="static" color="default">
//         <Toolbar>
//           <Typography variant="title" color="inherit">
//             Photos
//           </Typography>
//         </Toolbar>
//       </AppBar>

// </div>
// )

// SimpleAppBar.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
  
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SimpleTabs from "../components/maintab";
import classNames from 'classnames';
const styles = {
  root: {
    flexGrow: 1,
    background: '#ff0000',
  },
  backg:{
    background: '#ff0000',
  }
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classNames(styles.backg)}>
        <Toolbar>
          <Typography variant="title" color="inherit">
           SRM Cenre For Applied Research in Education 
          </Typography>
        </Toolbar>
      </AppBar>
      <SimpleTabs />
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);