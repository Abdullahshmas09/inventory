import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    CssBaseline,
    Box,
    Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import GridViewIcon from '@mui/icons-material/GridView';
import { Link } from "react-router-dom";
import { Typography, Container } from "@mui/material";
import Search from '../images/search.png';
import Bel from '../images/bell.png';
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from '../redux/slices/counterSlice';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    drawerPaper: {
        backgroundColor: "#101540",
        width: 100,
        color: "#fff",
        marginTop: "3.8rem",
    },
    iconContainer: {
        marginTop: "2rem",
    },
    reduce: {
        marginLeft: "1rem",
        
        
    },
    bottom: {
        marginTop: "1rem",
      
    },
});

function Layout({ children }) {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };


    const { isLoggedIn, email } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/")

    };

    return (
        <div> 
            <CssBaseline />

            <AppBar position="static" sx={{ background: "white" }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="black"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box display="flex" ml="auto">
                        {isLoggedIn ? (
                            <Box display="flex" mx="" my="" sx="">
                                <Typography variant="h6" style={{ marginRight: "1rem", color: "black"  }}>
                                    {email}
                                </Typography>
                                <Button
                                    variant="contained"
                                    size="small"
                                    color="primary"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Button>

                            </Box>
                        ) : (
                            <>
                                <img
                                    src={Search}
                                    alt="Search"
                                    style={{
                                        background: "#eaeaea",
                                        padding: "5px",
                                        borderRadius: ".3rem",
                                        marginRight: ".4rem",
                                    }}
                                />
                                <img
                                    src={Bel}
                                    width={24}
                                    height={24}
                                    alt="Bell"
                                    style={{ marginRight: ".4rem", marginTop: ".2rem" , }}
                                />
                                <Link to="/signup">
                                    <Button variant="contained" color="primary">
                                        Signup/Login
                                    </Button>
                                </Link>
                            </>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
{
    isLoggedIn &&    <Drawer
    anchor="left"
    open={drawerOpen}
    onClose={toggleDrawer(false)}
    PaperProps={{
        className: classes.drawerPaper,
    }}
> 

    <div className={classes.iconContainer}>
        <Link to="/dashboard">
            <GridViewIcon style={{ fontSize: "3rem" ,}} className={classes.reduce} />
        </Link>
        <Typography color="initial" style={{ marginLeft: ".3rem"  , fontWeight:"bold"}} className={classes.bottom}>
            Dashboard
        </Typography>
        <Link to="/stock">
            <GridViewIcon style={{ fontSize: "3rem" }} className={classes.reduce} />
        </Link>
        <Typography color="initial" style={{ marginLeft: ".3rem" , fontWeight:"bold"}} className={classes.bottom}>
            Stock
        </Typography>
        <Link to="/product">
            <GridViewIcon style={{ fontSize: "3rem" }} className={classes.reduce} />
        </Link>
        <Typography color="initial" style={{ marginLeft: ".3rem" , fontWeight:"bold"}} className={classes.bottom}>
            Product
        </Typography>
        <Link to="/order">
            <GridViewIcon style={{ fontSize: "3rem" }} className={classes.reduce} />
        </Link>

        <Typography color="initial" style={{ marginLeft: ".7rem" , fontWeight:"bold"}} className={classes.bottom}>
            Order
        </Typography>
        <Link to="/sales">
            <GridViewIcon style={{ fontSize: "3rem" }} className={classes.reduce} />
        </Link>

        <Typography color="initial" style={{ marginLeft: ".7rem" , fontWeight:"bold"}} className={classes.bottom}>
            Sales
        </Typography>
    </div>
</Drawer>
}
         

            <main style={{ padding: "16px" }}>{children}</main>
       
        </div>
    );
}

export default Layout;
