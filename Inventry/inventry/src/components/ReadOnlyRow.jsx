import React from "react";
import { TableCell, TableRow, Button } from "@mui/material";

function ReadOnlyRow({ sale, handleEditClick, handleDelete }) {
  return (
    <TableRow>
      <TableCell>{sale.product}</TableCell>
      <TableCell align="center">{sale.quantity}</TableCell>
      <TableCell align="center">{sale.total}</TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          color="primary"
          onClick={(event) => handleEditClick(event, sale)}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleDelete(sale.id)}
          sx={{ ml: 1 }}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default ReadOnlyRow;
