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
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
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

class ReferenceTables extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div id="TablesReference" className={classes.root}>
        <Typography variant="h4">Tables*</Typography>
        <Typography paragraph variant="caption">
          *Tables can get very complicated very fast. Example
          shown is just the most simple table, see full reference
          for anything more complicated, such as pagination &amp;
          sorting.
        </Typography>

        <Typography variant="title">Imports</Typography>
        <Typography paragraph className={classes.code}>
          {'import Table from \'@material-ui/core/Table\';'}
          <br/>
          {'import TableHead from \'@material-ui/core/TableHead\';'}
          <br/>
          {'import TableBody from \'@material-ui/core/TableBody\';'}
          <br/>
          {'import TableRow from \'@material-ui/core/TableRow\';'}
          <br/>
          {'import TableCell from \'@material-ui/core/TableCell\';'}
        </Typography>

        <Typography variant="title">Example</Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Sex</TableCell>
              <TableCell>Occupation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Luke Skywalker</TableCell>
              <TableCell>Male</TableCell>
              <TableCell>Jedi</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Boba Fett</TableCell>
              <TableCell>Male</TableCell>
              <TableCell>Bounty Hunter</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Leia Organa Solo</TableCell>
              <TableCell>Female</TableCell>
              <TableCell>Princess</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Typography variant="title">Code</Typography>
        <Typography paragraph variant="body" className={classes.code}>
          {'<Table>'}<br />
          &nbsp;&nbsp;{'<TableHead>'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'<TableRow>'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<TableCell>Name</TableCell>'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<TableCell>Sex</TableCell>'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<TableCell>Occupation</TableCell>'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'</TableRow>'}<br />
          &nbsp;&nbsp;{'</TableHead>'}<br />
          &nbsp;&nbsp;{'<TableBody>'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'<TableRow>'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<TableCell>Luke Skywalker</TableCell>'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<TableCell>Male</TableCell>'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<TableCell>Jedi</TableCell>'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'</TableRow>'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'<TableRow>'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<TableCell>Boba Fett</TableCell>'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<TableCell>Male</TableCell>'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<TableCell>Bounty Hunter</TableCell>'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'</TableRow>'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'<TableRow>'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<TableCell>Leia Organa Solo</TableCell>'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<TableCell>Female</TableCell>'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<TableCell>Princess</TableCell>'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'</TableRow>'}<br />
          &nbsp;&nbsp;{'</TableBody>'}<br />
          {'</Table>'}
        </Typography>

        <Typography variant="title">Full Reference</Typography>
        <Typography paragraph>
          <Button
            component="a"
            href="https://material-ui.com/demos/tables/"
            target="_blank"
            color="primary"
            variant="raised"
          >
            Material-UI Tables Demo
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

export default withStyles(styles)(ReferenceTables);
