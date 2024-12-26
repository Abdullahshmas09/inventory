import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, CssBaseline } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@material-ui/core/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from 'react-router-dom';
import main from '../images/Vector (1).png'

const useStyles = makeStyles({
    drawerPaper: {
        backgroundColor: '#101540',
        width: 100,
        color: '#fff',
        marginTop: "3.8rem"
    },
    iconContainer: {
        marginTop: "2rem",
    }
});

function Layout({ children }) {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [largeScreen, setLargeScreen] = useState(false);
    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };
    return (
        <div>
            <CssBaseline />
            {/* AppBar */}
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>

                </Toolbar>
            </AppBar>

            {/* Drawer */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    className: classes.drawerPaper,
                }}
            >
                <div className={classes.iconContainer}>
                    <Link to="/dashboard">
                        <DashboardIcon style={{ fontSize: '3rem', marginLeft: "1rem" }} />
                    </Link>
                    <Typography color="initial" style={{ marginLeft: ".3rem" }}>
                        Dashboard
                    </Typography>

                    {/*  */}
                    <Link to="/stock">
                        <DashboardIcon style={{ fontSize: '3rem', marginLeft: "1rem" }} />
                    </Link>
                    <Typography color="initial" style={{ marginLeft: ".3rem" }}>
                        Stock
                    </Typography>
                    {/*  */}
                    <Link to="/product">
                        <DashboardIcon style={{ fontSize: '3rem', marginLeft: "1rem" }} />
                    </Link>
                    <Typography color="initial" style={{ marginLeft: ".3rem" }}>
                        Product
                    </Typography>
                    {/*  */}
                    <Link to="/order">
                        <DashboardIcon style={{ fontSize: '3rem', marginLeft: "1rem" }} />
                    </Link>
                    <Typography color="initial" style={{ marginLeft: ".3rem" }}>
                        Order
                    </Typography>
                </div>

            </Drawer>

            {/* Main Content */}
            <main style={{ padding: '16px' }}>{children}</main>
        </div>
    );
}

export default Layout;
