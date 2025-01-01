import React from "react";
import { TableRow, TableCell, Button } from "@mui/material";

function ReadOnlyRow({ sale, handleEditClick, handleDelete }) {
  return (
    <TableRow>
      <TableCell align="left">{sale.product}</TableCell>
      <TableCell align="center">{sale.quantity}</TableCell>
      <TableCell align="center">{sale.total}</TableCell>
      <TableCell align="center">
        <Button
          onClick={(event) => handleEditClick(event, sale)}
          variant="contained"
        >
          Edit
        </Button>
        <Button
          sx={{ marginLeft: ".5rem" }}
          onClick={() => handleDelete(sale.id)}
          variant="contained"
          color="warning"
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default ReadOnlyRow;
