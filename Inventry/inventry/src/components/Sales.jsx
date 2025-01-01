import React, { useState, Fragment } from "react";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { nanoid } from "nanoid"; // Generates unique IDs
import ReadOnlyRow from "./ReadOnlyRow"; // Component for read-only rows
import EditableRow from "./EditableRow"; // Component for editable rows

// Styled components for enhanced UI
const StyledTableCell = styled(TableCell)`
  font-weight: bold;
  color: #fff;
  background-color: #1976d2;
`;

const StyledContainer = styled(Container)`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormContainer = styled(Box)`
  margin-top: 20px;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const AddButton = styled(Button)`
  background-color: #4caf50;
  &:hover {
    background-color: #388e3c;
  }
`;

const Header = styled.h2`
  font-family: "Roboto", sans-serif;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

function Sales() {
  // State for tracking the ID of the row currently being edited
  const [editSalesId, setEditSalesId] = useState(null);

  // State for storing form data to add a new sales entry
  const [addFormData, setAddFormData] = useState({
    product: "",
    quantity: "",
    total: "",
  });

  // State to hold the list of sales data
  const [salesData, setSalesData] = useState([
    { id: nanoid(), product: "Product A", quantity: 3, total: "$30" },
    { id: nanoid(), product: "Product B", quantity: 1, total: "$15" },
  ]);

  // Handle changes in the "Add Item" form fields
  const handleAddFormChange = (event) => {
    event.preventDefault(); // Prevent default form behavior
    const fieldName = event.target.getAttribute("name"); // Field name (e.g., product, quantity, total)
    const fieldValue = event.target.value; // Value entered by the user
    setAddFormData((prevData) => ({
      ...prevData,
      [fieldName]: fieldValue, // Update the specific field in the form data
    }));
  };

  // Handle the submission of the "Add Item" form
  const handleAddFormSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    const newItem = {
      id: nanoid(), // Generate a unique ID for the new entry
      product: addFormData.product,
      quantity: addFormData.quantity,
      total: addFormData.total,
    };

    // Update the salesData state with the new item
    setSalesData((prevData) => [...prevData, newItem]);

    // Reset the form fields
    setAddFormData({
      product: "",
      quantity: "",
      total: "",
    });
  };

  // Delete a specific sale from the table
  const handleDelete = (id) => {
    setSalesData((prevData) => prevData.filter((sale) => sale.id !== id));
  };

  // Handle the "Edit" button click for a specific row
  const handleEditClick = (event, sale) => {
    event.preventDefault(); // Prevent default behavior
    setEditSalesId(sale.id); // Set the ID of the row being edited
  };

  return (
    <StyledContainer maxWidth="lg">
      <Header>Sales Overview</Header>

      {/* Table to display sales data */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Product</StyledTableCell>
              <StyledTableCell align="center">Quantity</StyledTableCell>
              <StyledTableCell align="center">Total</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {salesData.map((sale) => (
              <Fragment key={sale.id}>
                {/* Render editable or read-only rows based on the edit state */}
                {editSalesId === sale.id ? (
                  <EditableRow sale={sale} />
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

      {/* Form to add new sales items */}
      <FormContainer>
        <Header>Add Item</Header>
        <form onSubmit={handleAddFormSubmit}>
          <Box display="flex" gap="10px" textAlign="center">
            <TextField
              label="Product Name"
              variant="outlined"
              required
              name="product"
              value={addFormData.product}
              onChange={handleAddFormChange}
            />
            <TextField
              label="Quantity"
              variant="outlined"
              type="number"
              required
              name="quantity"
              value={addFormData.quantity}
              onChange={handleAddFormChange}
            />
            <TextField
              label="Total"
              variant="outlined"
              required
              name="total"
              value={addFormData.total}
              onChange={handleAddFormChange}
            />
            <AddButton variant="contained" type="submit">
              Add Item
            </AddButton>
          </Box>
        </form>
      </FormContainer>
    </StyledContainer>
  );
}

export default Sales;
