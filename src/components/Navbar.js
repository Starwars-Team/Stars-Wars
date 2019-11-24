import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withRouter, Link } from "react-router-dom";



class Navbar extends Component {

    render() {
        return (
            <div
            style={{ flexGrow: 1}}>
                <AppBar 
                position="static"
                style={{
                    color : 'white', 
                    backgroundColor:'black'
                }}
                >
                    <Toolbar>
                        <Typography
                        variant="h6" 
                        style={{ 
                            flexGrow: 1,
                        }}
                        >
                            <h4 className="test">Star Wars</h4>
                        
                        </Typography>
                        <Button 
                        color="inherit"
                        >
                            <Link to="/signup">Register</Link>
                        
                        </Button>
                        ||
                        <Button 
                        color="inherit"
                        >
                            <Link to="/signin">Login</Link>
                        
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withRouter(Navbar);
