import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Post from './Post';
import User from './User';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 900 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
          <Tab label="Item Eight" {...a11yProps(7)} />
          <Tab label="Item Nine" {...a11yProps(8)} />
          <Tab label="Item Ten" {...a11yProps(9)} />
          <Tab label="Item Eleven" {...a11yProps(10)} />
          <Tab label="Item Twelve" {...a11yProps(11)} />
          <Tab label="Item Thirteen" {...a11yProps(12)} />
          <Tab label="Item Fourteen" {...a11yProps(13)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <User/>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4} dir={theme.direction}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5} dir={theme.direction}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6} dir={theme.direction}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={7} dir={theme.direction}>
        Item Eight
      </TabPanel>
      <TabPanel value={value} index={8} dir={theme.direction}>
        Item Nine
      </TabPanel>
      <TabPanel value={value} index={9} dir={theme.direction}>
        Item Ten
      </TabPanel>
      <TabPanel value={value} index={10} dir={theme.direction}>
        Item Eleven
      </TabPanel>
      <TabPanel value={value} index={11} dir={theme.direction}>
        Item Twelve
      </TabPanel>
      <TabPanel value={value} index={12} dir={theme.direction}>
        Item Thirteen
      </TabPanel>
      <TabPanel value={value} index={13} dir={theme.direction}>
        Item Fourteen
      </TabPanel>
    </Box>
  );
}

