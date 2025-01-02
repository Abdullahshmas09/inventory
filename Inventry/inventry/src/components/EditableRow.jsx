import React, { useState } from "react";
import { TableCell, TableRow, TextField, Button } from "@mui/material";

function EditableRow({ sale, handleSaveClick, handleCancelClick }) {
  const [editFormData, setEditFormData] = useState({
    product: sale.product,
    quantity: sale.quantity,
    total: sale.total,
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <TableRow>
      <TableCell>
        <TextField
          name="product"
          value={editFormData.product}
          onChange={handleInputChange}
        />
      </TableCell>
      <TableCell>
        <TextField
          name="quantity"
          type="number"
          value={editFormData.quantity}
          onChange={handleInputChange}
        />
      </TableCell>
      <TableCell>
        <TextField
          name="total"
          value={editFormData.total}
          onChange={handleInputChange}
        />
      </TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          color="success"
          onClick={() => handleSaveClick(sale.id, editFormData)}
        >
          Save
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={handleCancelClick}
          sx={{ ml: 1 }}
        >
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default EditableRow;
