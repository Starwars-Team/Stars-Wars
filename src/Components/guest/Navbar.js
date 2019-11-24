import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
                        }}
                        >
                        Star Wars
                        </Typography>
                        <Typography
                        variant="h6" 
                        style={{ 
                            flexGrow: 1
                        }}
                        >
                        </Typography>
                        <Button 
                        className="navbarMember"
                        color="inherit"
                        >
                        Register
                        </Button>
                        ||
                        <Button 
                        className="navbarMember"
                        color="inherit"
                        >
                        Login
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
