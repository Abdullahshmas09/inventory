import React, { useState } from 'react';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { InputAdornment, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { makeStyles } from '@material-ui/core';
import DataTable from 'react-data-table-component';



const useStyles = makeStyles({
    spacing: {
        margin: "1rem"
    },
    sp1: {
        marginTop: ".75rem"
    }
})


const Cont = styled(Container)`
  padding: 16px;

  & .MuiBox-root {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  & .MuiTypography-root {
    font-size: var(--heading-size);
  }

  & .MuiButton-root {
    margin-right: 8px;
    font-size: 1rem;
  }
`;

const data = [
    { id: 1, orderID: '#7676', Date: '06/30/2022', customer: "Ramesh Choudhry", sales: "store name", Destination: "Lalitpur", items: "3", Status: <Button sx={{ background: "#53b889", color: "black" }}>completed</Button> },
    { id: 2, orderID: '#7676', Date: '06/30/2022', customer: "Ramesh Choudhry", sales: "store name", Destination: "Lalitpur", items: "3", Status: <Button sx={{ background: "#bce785", color: "black", alignContent: "center" }}>pending</Button> },
    { id: 3, orderID: '#7676', Date: '06/30/2022', customer: "Ramesh Choudhry", sales: "store name", Destination: "Lalitpur", items: "3", Status: <Button sx={{ background: "#53b889", color: "black" }}>completed</Button> },
    { id: 4, orderID: '#7676', Date: '06/30/2022', customer: "Ramesh Choudhry", sales: "store name", Destination: "Lalitpur", items: "3", Status: <Button sx={{ background: "#53b889", color: "black" }}>completed</Button> },

];


const columns = [
    {
        name: 'Order ID',
        selector: (row) => row.orderID,
        sortable: true,
    },
    {
        name: 'Date',
        selector: (row) => row.Date,
        sortable: true,
    },
    {
        name: 'Customer',
        selector: (row) => row.customer,
        sortable: true,
    },
    {
        name: 'Sales',
        selector: (row) => row.sales,
        sortable: true,
    },
    {
        name: 'Destination',
        selector: (row) => row.Destination,
        sortable: true,
    },
    {
        name: 'Items',
        selector: (row) => row.items,
        sortable: true,
    },
    {
        name: 'Status',
        selector: (row) => row.Status,
        sortable: true,
    },
];

function Order() {
    const classes = useStyles()
    const [selectedDate, setSelectedDate] = useState('');
    const [searchQuery, setSearchQuery] = useState('');


    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

     
    }

    return (
        <Cont maxWidth="lg">
            <Box sx={{
                '@media(max-width:576px)': {
                    display: "flex",
                    flexDirection: "column",

                }
            }}>
                <Typography color="initial">Orders</Typography>
                <Box sx={{
                    '@media(max-width:576px)': {
                        display: "flex",
                        flexDirection: "column",

                    }
                }}>
                    <Button variant="outlined" color="primary" sx={{
                        '@media(max-width:576px)': {
                            marginTop: "1rem"
                        }
                    }}>
                        Export to Excel
                    </Button>
                    <Button variant="outlined" color="primary" sx={{
                        '@media(max-width:576px)': {
                            marginTop: ".5rem"
                        }
                    }}>
                        Import Orders
                    </Button>
                    <Button variant="contained" color="primary" startIcon={<AddIcon />} sx={{
                        '@media(max-width:576px)': {
                            marginTop: ".5rem"
                        }
                    }}>
                        New Orders
                    </Button>
                </Box>
            </Box>
            <hr color="#f3f4ff" />
            <Box sx={{
                marginTop: "1.5rem",
                '@media(max-width:576px)': {
                    display: "flex",
                    flexDirection: "column"
                }
            }}>
                <TextField
                    id="outlined-basic"
                    label="Search Order ID"
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}

                    className={classes.spacing}
                />

                <Box sx={{
                    marginTop: "1rem",
                    '@media(max-width:576px)': {
                        display: "flex",
                        flexDirection: "column"
                    }
                }}>
                    <Box sx={{

                        '@media(max-width:576px)': {
                            display: "flex",
                            flexDirection: "column"
                        }
                    }} >
                        <CalendarMonthIcon className={classes.sp1} />
                        <FormControl fullWidth sx={{ margin: "0 .3rem", 
                            '@media(max-width:576px)':{
                              margin:".5rem 10px"
                            }
                         }}>
                            <InputLabel id="select-label">sales</InputLabel>
                            <Select
                                labelId="select-label"
                                value={selectedDate}
                                onChange={handleDateChange}
                                label="Select Date"
                                name='sales'
                            >
                                <MenuItem value="2024-01-01">
                                    sales
                                </MenuItem>
                                <MenuItem value="2024-01-01">
                                    sales
                                </MenuItem>


                            </Select>
                        </FormControl>
                        {/*  */}
                        <FormControl fullWidth sx={{ margin: "0 .5rem" }}>
                            <InputLabel id="select-label">status</InputLabel>
                            <Select
                                labelId="select-label"
                                value={selectedDate}
                                onChange={handleDateChange}
                                label="Select Date"
                                name='status'
                            >
                                <MenuItem value="2024-01-01">
                                    status
                                </MenuItem>
                                <MenuItem value="2024-01-01">
                                    status
                                </MenuItem>


                            </Select>
                        </FormControl>
                        {/*  */}
                        <FormControl fullWidth className={classes.spacing} sx={{
                            '@media(max-width:576px)':{
                                 margin:".5rem 8px"
                            }
                        }}>
                            <InputLabel id="select-label">Filter</InputLabel>
                            <Select
                                labelId="select-label"
                                value={selectedDate}
                                onChange={handleDateChange}
                                label="Select Date"
                                name='filter'
                            >
                                <MenuItem value="2024-01-01">
                                    filter
                                </MenuItem>
                                <MenuItem value="2024-01-01">
                                    filter
                                </MenuItem>


                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            </Box>
            <hr color="#f3f4ff" />
            <DataTable
                columns={columns}
                data={data}
                pagination
                responsive
                highlightOnHover
                customStyles={{
                    rows: {
                        style: {
                            minHeight: '72px',
                        },
                    },
                }}
            />



        </Cont>
    );
}

export default Order;
