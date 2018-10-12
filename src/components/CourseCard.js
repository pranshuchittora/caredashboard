import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'; 
import CardContent from '@material-ui/core/CardContent';

import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
const styles = {
  
};

function SimpleCard(props) {
  const { classes } = props;
  const BgClr = props.bgcolor;
  return (
    <Card className={classes.card} style={{background:BgClr}} >
      <CardContent>
     
     <Typography  variant="h4" align="center" style={{color:"#ffffff"}}>{props.course} </Typography>
  <Divider light />
      <Typography variant="p" align="center" style={{color:"#ffffff"}}>
      eLab is an online sdfds dfdfsdfdf sdg sdg dsfg dfsgdfs gdf gfd gdfsg dfs gdsfg fd gvdffgfdg dfg dfg fdg dfg dfg dfg fdg df g
      </Typography>
      </CardContent>
  
    </Card>
  );
}


export default withStyles(styles)(SimpleCard);