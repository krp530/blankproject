import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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

class ReferenceCheckboxes extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div id="CheckboxesReference" className={classes.root}>
        <Typography paragraph variant="h4">Checkboxes</Typography>
        <Typography variant="title">Imports</Typography>
        <Typography paragraph className={classes.code}>
          {'import Checkbox from \'@material-ui/core/Checkbox\';'}
          <br/>
          {'import FormControlLabel from \'@material-ui/core/FormControlLabel\';'}
          <br/>
          {'import FormGroup from \'@material-ui/core/FormGroup\';'}
        </Typography>

        <Table className={classes.table}>
          <TableRow>
            <TableCell>
              <FormControlLabel
                control={<Checkbox/>}
                label="Side by"
              />
              <FormControlLabel
                control={<Checkbox/>}
                label="Side"
              />
            </TableCell>
            <TableCell>
              {'<FormControlLabel'}<br />
              &nbsp;&nbsp;{'control={<Checkbox/>}'}<br />
              &nbsp;&nbsp;{'label="Side by"'}<br />
              {'/>'}<br />
              {'<FormControlLabel'}<br />
              &nbsp;&nbsp;{'control={<Checkbox/>}'}<br />
              &nbsp;&nbsp;{'label="Side"'}<br />
              {'/>'}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox/>}
                  label="Stacked"
                />
                <FormControlLabel
                  control={<Checkbox/>}
                  label="Verticaly"
                />
              </FormGroup>
            </TableCell>
            <TableCell>
              {'<FormGroup>'}<br />
              &nbsp;&nbsp;{'<FormControlLabel'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;{'control={<Checkbox/>}'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;{'label="Stacked"'}<br />
              &nbsp;&nbsp;{'/>'}<br />
              &nbsp;&nbsp;{'<FormControlLabel'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;{'control={<Checkbox/>}'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;{'label="Verticaly"'}<br />
              &nbsp;&nbsp;{'/>'}<br />
              {'</FormGroup>'}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell></TableCell>
            <TableCell>{''}</TableCell>
          </TableRow>
        </Table>

        <Typography variant="title">Full Reference</Typography>
        <Typography paragraph>
          <Button
            component="a"
            href="https://material-ui.com/demos/selection-controls/"
            target="_blank"
            color="primary"
            variant="raised"
          >
            Material-UI Selection Controls Demo
          </Button>
          <Button
            component="a"
            href="https://material-ui.com/api/checkbox/"
            target="_blank"
            color="primary"
          >
            Checkbox API
          </Button>
          <Button
            component="a"
            href="https://material-ui.com/api/form-control-label/"
            target="_blank"
            color="primary"
          >
            Form Control Label API
          </Button>
          <Button
            component="a"
            href="https://material-ui.com/api/form-group/"
            target="_blank"
            color="primary"
          >
            Form Group API
          </Button>
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(ReferenceCheckboxes);
