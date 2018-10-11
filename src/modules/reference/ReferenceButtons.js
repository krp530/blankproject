import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const styles = (theme) => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
  code: {
    padding: theme.spacing.unit,
    background: theme.palette.grey[200],
  },
  table: {
    marginBottom: theme.spacing.unit * 4,
    tableLayout: 'fixed',
    '& td': {
      wordWrap: 'break-word',
    }
  }
})

class ReferenceButtons extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div id="ButtonReference" className={classes.root}>
        <Typography paragraph variant="h4">Buttons</Typography>
        <Typography variant="title">Imports</Typography>
        <Typography paragraph className={classes.code}>
          {'import Button from \'@material-ui/core/Button\';'}
          <br/>
          {'import IconButton from \'@material-ui/core/IconButton\';'}
          <br/>
          {'import SettingsIcon from \'@material-ui/icons/Settings\';'}
        </Typography>

        <Table className={classes.table}>
          <TableRow>
            <TableCell><Button onClick={() => alert("do something!")}>Plain</Button></TableCell>
            <TableCell>{'<Button onClick={() => alert("do something!")}>Plain</Button>'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Button color="primary">Colored</Button></TableCell>
            <TableCell>{'<Button color="primary">Colored</Button>'}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell><Button variant="raised">Raised</Button></TableCell>
            <TableCell>{'<Button variant="raised">Raised</Button>'}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell><Button color="secondary" variant="raised">Colored and Raised</Button></TableCell>
            <TableCell>{'<Button color="secondary" variant="raised">Colored and Raised</Button>'}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell><Button variant="fab"><SettingsIcon /></Button></TableCell>
            <TableCell>{'<Button variant="fab"><SettingsIcon /></Button>'}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell><IconButton><SettingsIcon /></IconButton></TableCell>
            <TableCell>{'<IconButton><SettingsIcon /></IconButton>'}</TableCell>
          </TableRow>
        </Table>

        <Typography variant="title">Full Reference</Typography>
        <Typography paragraph>
          <Button
            component="a"
            href="https://material-ui.com/demos/buttons/"
            target="_blank"
            color="primary"
            variant="raised"
          >
            Material-UI Buttons Demo
          </Button>
          <Button
            component="a"
            href="https://material-ui.com/api/button/"
            target="_blank"
            color="primary"
          >
            Button API
          </Button>
          <Button
            component="a"
            href="https://material-ui.com/api/icon-button/"
            target="_blank"
            color="primary"
          >
            Icon Button API
          </Button>
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(ReferenceButtons);
