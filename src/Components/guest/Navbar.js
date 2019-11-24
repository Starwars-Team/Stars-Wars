import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom"; //
export default class Navbar extends Component {

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
                        className="navbarMember"
                        variant="h6" 
                        style={{ 
                            flexGrow: 1,
                        }}
                        >
                        Star Wars
                        </Typography>
                        <Button 
                        className="navbarMember"
                        color="inherit"
                        ><Link to="/signup">
                        Register</Link> 
                        </Button>
                        ||
                        <Button 
                        className="navbarMember"
                        color="inherit"
                        ><Link to="/signin">
                        Login</Link>
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
