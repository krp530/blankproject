import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import SettingsIcon from '@material-ui/icons/Settings';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
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
    },
    '& td:first-child': {
      width: '30%',
    },
  }
})

class ReferenceSelects extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div id="SelectReference" className={classes.root}>
        <Typography variant="h4">Selects*</Typography>
        <Typography paragraph variant="caption">
          *Examples are shown with hard coded values which
          shouldn't happen when actually using. Value should
          be set with state or props.
        </Typography>

        <Typography variant="title">Imports</Typography>
        <Typography paragraph className={classes.code}>
          {'import Select from \'@material-ui/core/Select\';'}
          <br/>
          {'import MenuItem from \'@material-ui/core/MenuItem\';'}
        </Typography>

        <Table className={classes.table}>
          <TableRow>
            <TableCell>
              <Select value="1">
                <MenuItem value="1">Option 1</MenuItem>
                <MenuItem value="2">Option 2</MenuItem>
              </Select>
            </TableCell>
            <TableCell>
              {'<Select value="1">'}<br />
              &nbsp;&nbsp;{'<MenuItem value="1">Option 1</MenuItem>'}<br />
              &nbsp;&nbsp;{'<MenuItem value="2">Option 2</MenuItem>'}<br />
              {'</Select>'}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <Select value="1" fullWidth>
                <MenuItem value="1">Option 1</MenuItem>
                <MenuItem value="2">Option 2</MenuItem>
              </Select>
            </TableCell>
            <TableCell>
              {'<Select value="1" fullWidth>'}<br />
              &nbsp;&nbsp;{'<MenuItem value="1">Option 1</MenuItem>'}<br />
              &nbsp;&nbsp;{'<MenuItem value="2">Option 2</MenuItem>'}<br />
              {'</Select>'}
            </TableCell>
          </TableRow>
        </Table>

        <Typography variant="title">Full Reference</Typography>
        <Typography paragraph>
          <Button
            component="a"
            href="https://material-ui.com/demos/selects/"
            target="_blank"
            color="primary"
            variant="raised"
          >
            Material-UI Selects Demo
          </Button>
          <Button
            component="a"
            href="https://material-ui.com/api/select/"
            target="_blank"
            color="primary"
          >
            Select API
          </Button>
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(ReferenceSelects);
