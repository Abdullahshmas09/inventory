import { useState } from 'react';
import {
  Container,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  Typography,
  TextField,
} from '@mui/material';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: var(--heading-size);
`;

function Products() {
  const initialFormState = {
    brandName: '',
    brandCategory: '',
    brandImage: null,
    productName: '',
    productDescription: '',
    productPrice: '',
  };

  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);

  const handleOpen = (product = null, index = null) => {
    if (product) {
      setFormData(product);
      setIsEditMode(true);
      setSelectedProductIndex(index);
    } else {
      setFormData(initialFormState);
      setIsEditMode(false);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setFormData(initialFormState);
    setOpen(false);
    setIsEditMode(false);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.brandCategory ||
      !formData.brandImage ||
      !formData.brandName ||
      !formData.productDescription ||
      !formData.productName ||
      !formData.productPrice
    ) {
      alert('Please fill in all the fields.');
      return;
    }

    if (isEditMode) {
      setProducts((prev) =>
        prev.map((product, index) =>
          index === selectedProductIndex ? formData : product,
        ),
      );
    } else {
      setProducts((data) => [...data, formData]);
    }

    setFormData(initialFormState);
    handleClose();
  };

  const handleDelete = (index) => {
    setProducts((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Container maxWidth='lg'>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        sx={{ my: 2 }}
      >
        <H1>Products</H1>
        <Button
          variant='contained'
          color='primary'
          onClick={() => handleOpen()}
        >
          Add Product
        </Button>
      </Box>

      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Brand Name</b>
              </TableCell>
              <TableCell>
                <b>Category</b>
              </TableCell>
              <TableCell>
                <b>Image</b>
              </TableCell>
              <TableCell>
                <b>Product Name</b>
              </TableCell>
              <TableCell>
                <b>Description</b>
              </TableCell>
              <TableCell>
                <b>Price</b>
              </TableCell>
              <TableCell>
                <b>Actions</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={index}>
                <TableCell>{product.brandName}</TableCell>
                <TableCell>{product.brandCategory}</TableCell>
                <TableCell>
                  {product.brandImage ? (
                    <img
                      src={URL.createObjectURL(product.brandImage)}
                      alt={product.brandName}
                      width={50}
                      height={50}
                    />
                  ) : (
                    'No Image'
                  )}
                </TableCell>
                <TableCell>{product.productName}</TableCell>
                <TableCell>{product.productDescription}</TableCell>
                <TableCell>{product.productPrice}</TableCell>
                <TableCell>
                  <Button
                    variant='outlined'
                    size='small'
                    sx={{
                      background: '#1976d2',
                      color: 'white',
                      '&:hover': {
                        background: '#1565c0',
                      },
                    }}
                    onClick={() => handleOpen(product, index)}
                  >
                    Edit
                  </Button>

                  <Button
                    variant='outlined'
                    color='secondary'
                    size='small'
                    sx={{
                      background: '#d32f2f',
                      color: 'white',
                      '&:hover': {
                        background: '#c62828',
                      },
                      ml: 1,
                    }}
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='add-product-modal-title'
        aria-describedby='add-product-modal-description'
        sx={{ marginTop: '2rem' }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 1,
            textAlign: 'center',
          }}
        >
          <Typography id='add-product-modal-title' variant='h6' component='h2'>
            {isEditMode ? 'Edit Product' : 'Add Product'}
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label='Brand Name'
              placeholder='Enter Brand Name'
              name='brandName'
              fullWidth
              value={formData.brandName}
              onChange={handleChange}
              inputProps={{
                pattern: "^[A-Za-z0-9s-']+$",
              }}
              sx={{
                '@media(max-width:576px)': {
                  width: '90%',
                },
              }}
            />

            <br />
            <br />
            <TextField
              label='Category'
              placeholder='Enter Brand Category'
              name='brandCategory'
              fullWidth
              value={formData.brandCategory}
              onChange={handleChange}
              inputProps={{
                pattern: "^[A-Za-z0-9s-']+$",
              }}
              sx={{
                '@media(max-width:576px)': {
                  width: '90%',
                },
              }}
            />

            <br />
            <br />
            <TextField
              name='brandImage'
              type='file'
              fullWidth
              onChange={handleChange}
              sx={{
                '@media(max-width:576px)': {
                  width: '90%',
                },
              }}
            />
            <br />
            <br />
            <TextField
              label='Product Name'
              placeholder='Enter Product Name'
              name='productName'
              fullWidth
              value={formData.productName}
              onChange={handleChange}
              inputProps={{
                pattern: "^[A-Za-z0-9s-.']+$",
              }}
              sx={{
                '@media(max-width:576px)': {
                  width: '90%',
                },
              }}
            />

            <br />
            <br />
            <TextField
              label='Description'
              placeholder='Enter Product Description'
              name='productDescription'
              fullWidth
              value={formData.productDescription}
              onChange={handleChange}
              inputProps={{
                pattern: '^[A-Za-z0-9s-.,!?\'"]+$',
              }}
              sx={{
                '@media(max-width:576px)': {
                  width: '90%',
                },
              }}
            />

            <br />
            <br />
            <TextField
              label='Product Price'
              placeholder='Enter Product Price'
              name='productPrice'
              type='text'
              fullWidth
              value={formData.productPrice}
              onChange={handleChange}
              inputProps={{
                pattern: '^\\$[0-9]+(\\.[0-9]{1,2})?$',
                inputMode: 'numeric',
              }}
              sx={{
                '@media(max-width:576px)': {
                  width: '90%',
                },
              }}
              helperText='Enter a price with the $ symbol (e.g., $123 or $123.45)'
            />
            <br />
            <br />
            <Button
              variant='contained'
              type='submit'
              fullWidth
              color='primary'
              sx={{
                '@media(max-width:576px)': {
                  width: '90%',
                },
              }}
            >
              {isEditMode ? 'Update Product' : 'Add Product'}
            </Button>
          </form>
        </Box>
      </Modal>
    </Container>
  );
}

export default Products;
