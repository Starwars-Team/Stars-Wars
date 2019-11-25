import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const logOut = () => {
    localStorage.removeItem("isLogin");
    Swal.fire(
      'Log Out!',
      'You' + 're logged out!',
      'success'
    )
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Peoples" component={Link} to="/Peoples" />
        <Tab label="Planets" component={Link} to="/Planets" />
        <Tab label="Starships" component={Link} to="/Starships" />
        <Tab label="Vehicles" component={Link} to="/Vehicles" />
        <Tab label="Films" component={Link} to="/Films" />
        <Tab label="Log Out" component={Link} to="/" onClick={logOut} />
      </Tabs>
    </Paper>
  );
}
