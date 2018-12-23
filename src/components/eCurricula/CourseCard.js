import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from "@material-ui/core/Divider";
import Labs from './Labs'

import AssignIco from '@material-ui/icons/Assignment'
const styles = theme => ({
  
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
 
  render() {
    const { classes } = this.props;
    const colorProps = this.props.colorHead
    return (
    <Card style={{height:"100%"}}>
    
     
        <CardContent style={{display:"flex"}}>
          <div>
          <Typography variant="h4" style={{color:colorProps}}>{this.props.course}</Typography>
          <Typography component="p">
           An Online tool for learning and assessment
          </Typography>
          </div>
          <IconButton style={{transform:"scale(1.8)",textAlign:"center",margin:"auto"}}><AssignIco style={{color:colorProps}} /> </IconButton>
          
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
      
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Labs label="Login"  btncolor={colorProps} link="http://care.srmuniv.ac.in/ecurricula/"/>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);