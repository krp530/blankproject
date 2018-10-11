import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
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

class ReferenceLoading extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div id="LoadingReference" className={classes.root}>
        <Typography paragraph variant="h4">Loading</Typography>
        <Typography variant="title">Imports</Typography>
        <Typography paragraph className={classes.code}>
          {'import CircularProgress from \'@material-ui/core/CircularProgress\';'}
          <br/>
          {'import LinearProgress from \'@material-ui/core/LinearProgress\';'}
        </Typography>

        <Table className={classes.table}>
          <TableRow>
            <TableCell><CircularProgress /></TableCell>
            <TableCell>{'<CircularProgress />'}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell><CircularProgress size={50} color="secondary" /></TableCell>
            <TableCell>{'<CircularProgress size={50} color={"secondary"} />'}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell><LinearProgress /></TableCell>
            <TableCell>{'<LinearProgress />'}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell><LinearProgress size={50} color="secondary" /></TableCell>
            <TableCell>{'<LinearProgress size={50} color="secondary" />'}</TableCell>
          </TableRow>
        </Table>

        <Typography variant="title">Full Reference</Typography>
        <Typography paragraph>
          <Button
            component="a"
            href="https://material-ui.com/demos/progress/"
            target="_blank"
            color="primary"
            variant="raised"
          >
            Material-UI Progress Demo
          </Button>
          <Button
            component="a"
            href="https://material-ui.com/api/circular-progress/"
            target="_blank"
            color="primary"
          >
            Circular Progress API
          </Button>
          <Button
            component="a"
            href="https://material-ui.com/api/linear-progress/"
            target="_blank"
            color="primary"
          >
            Linear Progress API
          </Button>
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(ReferenceLoading);
