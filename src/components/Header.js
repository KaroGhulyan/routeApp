import React from 'react';
import {
  createTheme,
  makeStyles,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { selectRoutes, selectFinishedCount } from '../features/appSlice';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function Header({ selectedTab }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const route = useSelector(selectRoutes);
  const finishedCount = useSelector(selectFinishedCount);
  const handleChange = (event, newValue) => {
    selectedTab(newValue);
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      secondary: {
        main:"#ffffff",
      },
    },
  });
  return (
    <MuiThemeProvider theme={theme}>
      <Paper
        className={classes.root}
        style={{ position: 'fixed', width: '100%', zIndex: '1000' }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          centered
          style={{ backgroundColor: 'black' }}
        >
          <Tab
            label={`stops ${finishedCount}/${route?.length}`}
            style={{ color: 'white' }}
          />
          <Tab label="Map" style={{ color: 'white' }} />
        </Tabs>
      </Paper>
    </MuiThemeProvider>
  );
}

export default Header;
