import * as React from 'react';
import injectSheet from 'react-jss';
import CalendarConnected from 'containers/CalendarConnected';

const styles = {
  root: {
    margin: '200px auto',
    width: '450px'
  }
};

const DemoScene = ({ classes }) => (
  <div className={classes.root}>
    <CalendarConnected />
  </div>
);

export default injectSheet(styles)(DemoScene);
