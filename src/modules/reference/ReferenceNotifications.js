import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import SnackbarContent from '@material-ui/core/SnackbarContent';
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

class ReferenceNotifications extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div id="NotificationsReference" className={classes.root}>
        <Typography variant="h4">Notifications*</Typography>
        <Typography paragraph variant="caption">
          *Examples shown are not functional, see full documentation
          for full working examples. Example is using SnackbarContent,
          but you should use Snackbar for toast type notifications.
        </Typography>

        <Typography variant="title">Imports</Typography>
        <Typography paragraph className={classes.code}>
          {'import SnackbarContent from \'@material-ui/core/SnackbarContent\';'}
          <br/>
          {'import IconButton from \'@material-ui/core/IconButton\';'}
          <br/>
          {'import Button from \'@material-ui/core/Button\';'}
          <br/>
          {'import CloseIcon from \'@material-ui/icons/Close\';'}
        </Typography>
        <br />
        <Typography variant="title">Example</Typography>
        <SnackbarContent
          message={<span id="message-id">Something Saved!</span>}
          action={[
            <Button color="secondary" size="small">
              UNDO
            </Button>,
            <IconButton
              color="inherit"
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
        <br />
        <Typography variant="title">Code</Typography>
        <Typography paragraph variant="body" className={classes.code}>
          {'<SnackbarContent'}<br />
          &nbsp;&nbsp;{'message={<span id="message-id">Something Saved!</span>}'}<br />
          &nbsp;&nbsp;{'action={['}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'<Button color="secondary" size="small">'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'UNDO'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'</Button>,'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'<IconButton color="inherit">'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<CloseIcon />'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'</IconButton>,'}<br />
          &nbsp;&nbsp;{']}'}<br />
          {'/>'}
        </Typography>
        <br />
        <Typography variant="title">Full Reference</Typography>
        <Typography paragraph>
          <Button
            component="a"
            href="https://material-ui.com/demos/snackbars/"
            target="_blank"
            color="primary"
            variant="raised"
          >
            Material-UI Snackbars Demo
          </Button>
          <Button
            component="a"
            href="https://material-ui.com/api/snackbar-content/"
            target="_blank"
            color="primary"
          >
            Snackbar Content API
          </Button>
          <Button
            component="a"
            href="https://material-ui.com/api/snackbar/"
            target="_blank"
            color="primary"
          >
            Snackbar API
          </Button>
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(ReferenceNotifications);
