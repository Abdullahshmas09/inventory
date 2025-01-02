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
import DataTable from 'react-data-table-component';

const useStyles = () => ({
    spacing: {
        margin: '1rem',
    },
    sp1: {
        marginTop: '.75rem',
    },
});

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
    {
        id: 1,
        orderID: '#7676',
        Date: '06/30/2022',
        customer: 'Ramesh Choudhry',
        sales: 'store name',
        Destination: 'Lalitpur',
        items: '3',
        Status: <Button sx={{ background: '#53b889', color: 'black' }}>completed</Button>,
    },
    {
        id: 2,
        orderID: '#7677',
        Date: '07/01/2022',
        customer: 'Suresh Gupta',
        sales: 'store name',
        Destination: 'Kathmandu',
        items: '5',
        Status: <Button sx={{ background: '#bce785', color: 'black', width: "120px" }}>pending</Button>,
    },
    {
        id: 3,
        orderID: '#7676',
        Date: '06/30/2022',
        customer: 'Ramesh Choudhry',
        sales: 'store name',
        Destination: 'Lalitpur',
        items: '3',
        Status: <Button sx={{ background: '#53b889', color: 'black' }}>completed</Button>,
    },
    {
        id: 4,
        orderID: '#7676',
        Date: '06/30/2022',
        customer: 'Ramesh Choudhry',
        sales: 'store name',
        Destination: 'Lalitpur',
        items: '3',
        Status: <Button sx={{ background: '#53b889', color: 'black' }}>completed</Button>,
    },
    {
        id: 5,
        orderID: '#7676',
        Date: '06/30/2022',
        customer: 'Ramesh Choudhry',
        sales: 'store name',
        Destination: 'Lalitpur',
        items: '3',
        Status: <Button sx={{ background: '#53b889', color: 'black' }}>completed</Button>,
    }

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
    const classes = useStyles();
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        sales: 'sales',
        status: 'status',
        filter: 'filter'
    });

    const handleFilterChange = (key) => (event) => {
        setFilters({ ...filters, [key]: event.target.value });
    };

    return (
        <Cont maxWidth="lg">
            <Box sx={{
                '@media(max-width:576px)': {
                    display: "flex",
                    flexDirection: "column"
                }
            }}>
                <Typography>Orders</Typography>
                <Box sx={{
                    '@media(max-width:576px)': {
                        display: "flex",
                        flexDirection: "column",

                    }
                }}>
                    <Button variant="outlined" color="primary" sx={{
                        '@media(max-width:576px)': {
                            marginTop: ".5rem"

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
                '@media(max-width:576px)': {
                    display: "flex",
                    flexDirection: "column"
                }
            }}>
                <TextField
                    id="outlined-basic"
                    label="Search Order ID"
                    variant="outlined"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    className={classes.spacing}
                />
                <Box display="flex" gap={1} alignItems="center" mt={1} sx={{
                    '@media(max-width:576px)': {
                        display: "flex",
                        flexDirection: "column"
                    }
                }}>
                    <CalendarMonthIcon className={classes.sp1} />
                    <FormControl fullWidth>

                        <Select
                            labelId="sales-label"
                            value={filters.sales}
                            onChange={handleFilterChange('sales')}

                        >
                            <MenuItem value="sales" >sales</MenuItem>
                            <MenuItem value="Store A">sales</MenuItem>
                            <MenuItem value="Store B">sales</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>

                        <Select
                            labelId="status-label"
                            value={filters.status}
                            onChange={handleFilterChange('status')}

                        >
                            <MenuItem value="status">status</MenuItem>
                            <MenuItem value="completed">status</MenuItem>
                            <MenuItem value="pending">status</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>

                        <Select
                            labelId="status-label"
                            value={filters.filter}
                            onChange={handleFilterChange('filter')}

                        >
                            <MenuItem value="filter" >filter</MenuItem>
                            <MenuItem value="completed">filter</MenuItem>
                            <MenuItem value="pending">filter</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <hr color="#f3f4ff" />
            <DataTable
                columns={columns}
                data={data}
                pagination
                responsive
                highlightOnHover
            />
        </Cont>
    );
}

export default Order;
