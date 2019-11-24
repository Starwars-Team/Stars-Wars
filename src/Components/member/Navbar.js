import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
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

    const handleChangeIndex = index => {
        setValue(index);
    };

    return (
        <div
        style={{color:'white'}}>
        <AppBar position="static" color="default">
            <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="full width tabs"
            style={{color:'white', background:'black'}}
            >
            <Tab label="People" {...a11yProps(0)} />
            <Tab label="Planets" {...a11yProps(1)} />
            <Tab label="Vehicles" {...a11yProps(2)} />
            <Tab label="Starships" {...a11yProps(3)} />
            <Tab label="Films" {...a11yProps(4)} />
            <Tab label="Logout" {...a11yProps(5)} />
            </Tabs>
        </AppBar>
        <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
        >
            <TabPanel value={value} index={0} dir={theme.direction}>
            People
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
            Planet
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
            Vehicle
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
            Starship
            </TabPanel>
            <TabPanel value={value} index={4} dir={theme.direction}>
            Film
            </TabPanel>
            <TabPanel value={value} index={5} dir={theme.direction}>
            Isi Fungsi LogOut disini
            </TabPanel>
        </SwipeableViews>
        </div>
    );
    }