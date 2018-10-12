
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import Pencil from '@material-ui/icons/BorderColor'
import Desktop from '@material-ui/icons/DesktopMac'
import Assignment from '@material-ui/icons/Assignment'
import Search from '@material-ui/icons/YoutubeSearchedFor'
import Lock from '@material-ui/icons/VpnLock'
import Print from '@material-ui/icons/LocalPrintshop'
import AppGrid from '@material-ui/icons/GridOn'


export const mailFolderListItems = (
  <div>
    <ListItem button style={{paddingTop:'20px'}}>
      <ListItemIcon>
        <Desktop color="primary" />
      </ListItemIcon>
      <ListItemText primary="eLab" />
    </ListItem>
    <ListItem button style={{paddingTop:'20px'}}>
      <ListItemIcon>
       <Pencil color="secondary" />
      </ListItemIcon>
      <ListItemText primary="eProject" />
    </ListItem>
    <ListItem button style={{paddingTop:'20px'}}>
      <ListItemIcon>
        <Assignment />
      </ListItemIcon>
      <ListItemText primary="eCuriculla" />
    </ListItem>
    <ListItem button style={{paddingTop:'20px'}}>
      <ListItemIcon>
        <Search />
      </ListItemIcon>
      <ListItemText primary="eThink" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Lock />
      </ListItemIcon>
      <ListItemText primary="eLock" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Print />
      </ListItemIcon>
      <ListItemText primary="ePrint" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AppGrid />
      </ListItemIcon>
      <ListItemText primary="Care App" />
    </ListItem>
  </div>
);
