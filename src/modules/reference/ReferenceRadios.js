import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
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

class ReferenceRadios extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div id="RadiosReference" className={classes.root}>
        <Typography variant="h4">Radios*</Typography>
        <Typography paragraph variant="caption">
          *Examples are shown with hard coded or uncontrolled
          values and checked properties which shouldn't happen
          when actually using. Value should be set with state
          or props.
        </Typography>

        <Typography variant="title">Imports</Typography>
        <Typography paragraph className={classes.code}>
          {'import Radio from \'@material-ui/core/Radio\';'}
          <br/>
          {'import RadioGroup from \'@material-ui/core/RadioGroup\';'}
          <br/>
          {'import FormControlLabel from \'@material-ui/core/FormControlLabel\';'}
        </Typography>

        <Table className={classes.table}>
          <TableRow>
            <TableCell>
              <FormControlLabel
                control={<Radio checked />}
                label="Side by"
              />
              <FormControlLabel
                control={<Radio checked={false} />}
                label="Side"
              />
            </TableCell>
            <TableCell>
              {'<FormControlLabel'}<br />
              &nbsp;&nbsp;{'control={<Radio checked />}'}<br />
              &nbsp;&nbsp;{'label="Side by"'}<br />
              {'/>'}<br />
              {'<FormControlLabel'}<br />
              &nbsp;&nbsp;{'control={<Radio checked={false} />}'}<br />
              &nbsp;&nbsp;{'label="Side"'}<br />
              {'/>'}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <RadioGroup value="1">
                <FormControlLabel
                  control={<Radio />}
                  label="Stacked"
                  value="1"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="Verticaly"
                  value="2"
                />
              </RadioGroup>
            </TableCell>
            <TableCell>
              {'<RadioGroup value="1">'}<br />
              &nbsp;&nbsp;{'<FormControlLabel'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;{'control={<Radio />}'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;{'label="Stacked"'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;{'value="1"'}<br />
              &nbsp;&nbsp;{'/>'}<br />
              &nbsp;&nbsp;{'<FormControlLabel'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;{'control={<Radio />}'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;{'label="Verticaly"'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;{'value="2"'}<br />
              &nbsp;&nbsp;{'/>'}<br />
              {'</RadioGroup>'}
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
            href="https://material-ui.com/api/radio/"
            target="_blank"
            color="primary"
          >
            Radio API
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
            href="https://material-ui.com/api/radio-group/"
            target="_blank"
            color="primary"
          >
            Radio Group API
          </Button>
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(ReferenceRadios);
