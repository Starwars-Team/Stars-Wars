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
                        variant="h6" 
                        style={{ 
                            flexGrow: 1,
                        }}
                        >
                        Star Wars
                        </Typography>
                        <Button 
                        color="inherit"
                        >
                        Register
                        </Button>
                        ||
                        <Button 
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
