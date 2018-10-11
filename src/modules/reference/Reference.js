import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SettingsIcon from '@material-ui/icons/Settings';
import ReferenceMenu from './ReferenceMenu';
import ReferenceButtons from './ReferenceButtons';
import ReferenceTextInputs from './ReferenceTextInputs';
import ReferenceSelects from './ReferenceSelects';
import ReferenceCheckboxes from './ReferenceCheckboxes';
import ReferenceRadios from './ReferenceRadios';
import ReferenceTables from './ReferenceTables';
import ReferenceNotifications from './ReferenceNotifications';
import ReferenceLoading from './ReferenceLoading';

const styles = (theme) => ({
  button: {
    position: 'fixed',
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 4,
  },
  menu: {
    // background: theme.palette.grey[300],
  },
  grid: {
    maxHeight: '100%',
  },
  content: {
    maxHeight: '100%',
    overflowY: 'auto',
    padding: theme.spacing.unit * 3,
  },
  container: {
    display: 'flex',
    padding: theme.spacing.unit / 2,
  },
  divider: {
    marginBottom: theme.spacing.unit * 6,
  },
  dialog: {
    background: theme.palette.grey[300],
  },
  dialogTitle: {
    background: 'white',
  },
  paper: {
    marginBottom: theme.spacing.unit * 2,
  },
})

class Reference extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      open: true,
    });
  }

  closeModal() {
    this.setState({
      open: false,
    });
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <React.Fragment>
        <Button
          className={classes.button}
          color="primary"
          onClick={this.openModal}
          variant="fab"
        >
          <SettingsIcon />
        </Button>
        <Dialog
          fullWidth
          maxWidth='lg'
          open={open}
          onClose={this.closeModal}
          classes={{ paper: classes.dialog }}
        >
          <DialogTitle className={classes.dialogTitle}>Material UI Reference</DialogTitle>
          <DialogContent className={classes.container}>
            <Grid container className={classes.grid}>
              <Grid item xs={2} className={classes.menu}>
                <ReferenceMenu />
              </Grid>
              <Grid item xs={10} className={classes.content}>
                <Paper className={classes.paper}>
                  <ReferenceButtons />
                </Paper>

                <Paper className={classes.paper}>
                  <ReferenceTextInputs />
                </Paper>

                <Paper className={classes.paper}>
                  <ReferenceSelects />
                </Paper>

                <Paper className={classes.paper}>
                  <ReferenceCheckboxes />
                </Paper>

                <Paper className={classes.paper}>
                  <ReferenceRadios />
                </Paper>

                <Paper className={classes.paper}>
                  <ReferenceTables />
                </Paper>

                <Paper className={classes.paper}>
                  <ReferenceNotifications />
                </Paper>

                <Paper className={classes.paper}>
                  <ReferenceLoading />
                </Paper>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Reference)
