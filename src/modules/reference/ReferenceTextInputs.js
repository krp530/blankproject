import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import SettingsIcon from '@material-ui/icons/Settings';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
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
  },
})

class ReferenceTextInputs extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div id="TextFieldReference" className={classes.root}>
        <Typography paragraph variant="h4">Text Field</Typography>
        <Typography variant="title">Imports</Typography>
        <Typography paragraph className={classes.code}>
          {'import Button from \'@material-ui/core/TextField\';'}
          <br/>
          {'import IconButton from \'@material-ui/core/InputAdornment\';'}
        </Typography>

        <Table className={classes.table}>
          <TableRow>
            <TableCell><TextField label="Plain" /></TableCell>
            <TableCell>{'<TextField label="plain" />'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><TextField label="Outlined" variant="outlined" /></TableCell>
            <TableCell>{'<TextField label="Outlined" variant="outlined" />'}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell><TextField label="Helper Text" helperText="I'm Helping!" /></TableCell>
            <TableCell>{'<TextField label="Helper Text" helperText="I\'m Helping!" />'}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell><TextField label="Error" error /></TableCell>
            <TableCell>{'<TextField label="Error" error />'}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <TextField
                label="Adorned"
                variant="outlined"
                InputProps={{
                  startAdornment: <InputAdornment position="start">Foo</InputAdornment>,
                  endAdornment: <InputAdornment position="end">Bar</InputAdornment>
                }}
              />
            </TableCell>
            <TableCell>
              {'<TextField'}<br />
              &nbsp;&nbsp;{'label="Adorned"'}<br />
              &nbsp;&nbsp;{'variant="outlined"'}<br />
              &nbsp;&nbsp;{'InputProps={{'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;{'startAdornment: <InputAdornment position="start">Foo</InputAdornment>,'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;{'endAdornment: <InputAdornment position="end">Bar</InputAdornment>'}<br />
              &nbsp;&nbsp;{'}}'}<br />
              {'/>'}
            </TableCell>
          </TableRow>
        </Table>

        <Typography variant="title">Full Reference</Typography>
        <Typography paragraph>
          <Button
            component="a"
            href="https://material-ui.com/demos/text-fields/"
            target="_blank"
            color="primary"
            variant="raised"
          >
            Material-UI Text Fields Demo
          </Button>
          <Button
            component="a"
            href="https://material-ui.com/api/text-field/"
            target="_blank"
            color="primary"
          >
            Text Field
          </Button>
          <Button
            component="a"
            href="https://material-ui.com/api/input-adornment/"
            target="_blank"
            color="primary"
          >
            Input Adornment
          </Button>
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(ReferenceTextInputs);
