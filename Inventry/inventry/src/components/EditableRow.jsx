import React from "react";
import { TableRow, TableCell, Button, TextField } from "@mui/material";

function EditableRow({
  sale,
  handleEditFormChange,
  handleEditFormSubmit,
  handleCancelClick,
}) {
  return (
    <TableRow>
      <TableCell align="left">
        <TextField
          name="product"
          value={sale.product}
          onChange={handleEditFormChange}
        />
      </TableCell>
      <TableCell align="center">
        <TextField
          name="quantity"
          value={sale.quantity}
          onChange={handleEditFormChange}
        />
      </TableCell>
      <TableCell align="center">
        <TextField
          name="total"
          value={sale.total}
          onChange={handleEditFormChange}
        />
      </TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          color="primary"
          onClick={handleEditFormSubmit}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleCancelClick}
          sx={{ marginLeft: ".5rem" }}
        >
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default EditableRow;
