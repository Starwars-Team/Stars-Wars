import React, { Component } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom"; //
import Background from '../Background'
import banner from "./banner.png"
export default class Header extends Component {
  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{
            color: "white",
            backgroundColor: "black"
          }}
        >
          <Toolbar>
            <Typography  variant="h6" style={{}}>
            <Link to="/"
            >
              <img style={{width:'12%', paddingTop:'10px'}} src={banner} alt="banner"/>
            </Link>
            </Typography>
            <Typography
              variant="h6"
              style={{
                flexGrow: 1
              }}
            >
            </Typography>
            <Button color="inherit">
              <Link to="/signup"
              className="navbarMember"
              >
                Register</Link>
            </Button>
            ||
            <Button color="inherit">
              <Link to="/signin"
              className="navbarMember"
              >
                Login</Link>
            </Button>
          </Toolbar>
        </AppBar>
        <Background
					ref={this.navEffect}
					id="my-background"
					aboutRef={this.about}
					bounceIn={"wow bounceIn"}
				/>
      </div>
    );
  }
}
