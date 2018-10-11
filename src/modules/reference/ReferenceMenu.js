import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

const styles = (theme) => ({
  coloredMenuItem: {
    color: theme.palette.primary.main,
    background: theme.palette.grey[100],
  },
})

class ReferenceMenu extends Component {
  render() {
    const { classes } = this.props;

    return (
      <MenuList>
        <MenuItem component="a" href="#ButtonReference">Buttons</MenuItem>
        <MenuItem component="a" href="#TextFieldReference">Text Field</MenuItem>
        <MenuItem component="a" href="#SelectReference">Select</MenuItem>
        <MenuItem component="a" href="#CheckboxesReference">Checkboxes</MenuItem>
        <MenuItem component="a" href="#RadiosReference">Radios</MenuItem>
        <MenuItem component="a" href="#TablesReference">Tables</MenuItem>
        <MenuItem component="a" href="#NotificationsReference">Notifications</MenuItem>
        <MenuItem component="a" href="#LoadingReference">Loading</MenuItem>
        <MenuItem
          className={classes.coloredMenuItem}
          component="a"
          href="https://material-ui.com/"
          target="_blank"
        >
          Full Documentation
        </MenuItem>
      </MenuList>
    );
  }
}

export default withStyles(styles)(ReferenceMenu);
