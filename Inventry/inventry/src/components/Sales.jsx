import { useState, Fragment } from 'react';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  TextField,
} from '@mui/material';
import { nanoid } from 'nanoid';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

function Sales() {
  const [salesData, setSalesData] = useState([
    { id: nanoid(), product: 'Product A', quantity: 3, total: '$30' },
    { id: nanoid(), product: 'Product B', quantity: 1, total: '$15' },
  ]);

  const [editSalesId, setEditSalesId] = useState(null); // To track the row being edited
  const [addFormData, setAddFormData] = useState({
    product: '',
    quantity: '',
    total: '',
  });

  // Handle form input changes for adding a new item
  const handleAddFormChange = (event) => {
    const { name, value } = event.target;
    setAddFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle adding a new item
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newSale = {
      id: nanoid(),
      product: addFormData.product,
      quantity: addFormData.quantity,
      total: addFormData.total,
    };
    setSalesData((prev) => [...prev, newSale]);
    setAddFormData({ product: '', quantity: '', total: '' });
  };

  // Handle clicking the Edit button
  const handleEditClick = (event, sale) => {
    event.preventDefault();
    setEditSalesId(sale.id); // Set the ID of the row being edited
  };

  // Handle saving changes made to the editable row
  const handleSaveClick = (id, updatedData) => {
    setSalesData((prev) =>
      prev.map((sale) => (sale.id === id ? { ...sale, ...updatedData } : sale)),
    );
    setEditSalesId(null); // Exit edit mode
  };

  // Handle canceling edit mode
  const handleCancelClick = () => {
    setEditSalesId(null); // Exit edit mode without saving
  };

  // Handle deleting an item
  const handleDelete = (id) => {
    setSalesData((prev) => prev.filter((sale) => sale.id !== id));
  };

  return (
    <Container>
      <h2>Sales Overview</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align='center'>Quantity</TableCell>
              <TableCell align='center'>Total</TableCell>
              <TableCell align='center'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {salesData.map((sale) => (
              <Fragment key={sale.id}>
                {editSalesId === sale.id ? (
                  <EditableRow
                    sale={sale}
                    handleSaveClick={handleSaveClick}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    sale={sale}
                    handleEditClick={handleEditClick}
                    handleDelete={handleDelete}
                  />
                )}
              </Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box component='form' onSubmit={handleAddFormSubmit} mt={2}>
        <TextField
          label='Product'
          name='product'
          value={addFormData.product}
          onChange={handleAddFormChange}
          required
        />
        <TextField
          label='Quantity'
          name='quantity'
          type='number'
          value={addFormData.quantity}
          onChange={handleAddFormChange}
          required
          sx={{ mx: 2 }}
        />
        <TextField
          label='Total'
          name='total'
          value={addFormData.total}
          onChange={handleAddFormChange}
          required
        />
        <Button
          type='submit'
          variant='contained'
          sx={{ marginLeft: '1rem', marginTop: '.5rem' }}
        >
          Add Item
        </Button>
      </Box>
    </Container>
  );
}

export default Sales;
