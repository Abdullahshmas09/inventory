import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Hand from '../images/image 2 (1).png';
import rectangle from '../images/Rectangle 44 (1).png'
import ellipse from '../images/Ellipse 2 (1).png'



const P = styled.p`
font-size: var(--Full-size);

margin-top: -1rem;
`

const Card = styled.div`
background-color:#ffffff;
height: 120px;
margin-top: .5rem;
padding: 5px 10px;
border-radius: .5rem;

`
const Img = styled.img`
@media (max-width: 576px) {
  width: 100%;


} 

`
const Img1 = styled.img`
margin-left: 1rem;
@media (max-width: 576px) {
  width: 100%;
  height: auto;
  margin-top: .5rem;
  margin-left: 0;

} 

`

const Bo = styled(Box)`
@media (max-width: 576px) {
  display: flex;
  flex-direction: column;

}
table{
  border: 1px solid red;
}
`
const Table = styled.table`
margin-left: 1rem;
@media (max-width: 576px) {
  margin-top: 1rem;
  margin-left: 0;
}
`


function Dashboard() {
  const [formData] = useState([
    { id: 1, name: 'Revenue', image: Hand, money: '30,000' },
    { id: 2, name: 'Sales Return', image: Hand, money: '30,000' },
    { id: 3, name: 'Purchase', image: Hand, money: '30,000' },
    { id: 4, name: 'Income', image: Hand, money: '30,000' },
  ]);

  const [Table1] = useState([
    { id: 1, name: 'Orderid', date: "Date", quantity: 'Quantity', alert: 'Alert', status: "status" },
    { id: 1, name: 'Orderid', date: "Date", quantity: 'Quantity', alert: 'Alert', status: "status" },
    { id: 2, name: 'Orderid', date: "Date", quantity: 'Quantity', alert: 'Alert', status: "status" },
    { id: 3, name: 'Orderid', date: "Date", quantity: 'Quantity', alert: 'Alert', status: "status" },
    { id: 4, name: 'Orderid', date: "Date", quantity: 'Quantity', alert: 'Alert', status: "status" },
  ]);




  return (
    <Container maxWidth="lg" sx={{ background: "#edf0f2" , height:"900px" }}>
      <Box display="flex" sx={{ paddingTop: "3rem" }} justifyContent="space-around" flexWrap="wrap">
        {formData.map((product) => (
          <Card key={product.id}>

            <h3>{product.name}</h3>
            <div style={{ display: "flex" }}>
              <img src={product.image} width={32} height={32} alt={product.name} />
              <P> <span>+</span> {product.money}</P>
            </div>
          </Card>
        ))}
      </Box>
      {/* 2nd box */}

      <Box display="flex" mx="" my="" sx={{
        marginTop: "3rem",
        '@media(max-width:576px)': {
          display: "flex",
          flexDirection: "column"

        }
      }}>
        <Img src={rectangle} alt="" style={{
          background: "white", padding: "20px", borderRadius: ".5rem",

        }} />
        <Img1 className='img' src={ellipse} height={320} width={320} alt="" style={{ background: "white", padding: "20px", borderRadius: ".5rem", }} />
      </Box>
      {/* 3rd box */}
      <h3>Order Details</h3>
      <Bo display="flex" sx={{ marginTop: "3rem" }}>

        <table  width={750} style={{ background: "white", padding: "10px", borderRadius: "10px" , overflowX:"auto"}}>
          <thead>
            <tr>

              <th align='start'>Date</th>
              <th align='start'>Quantity</th>
              <th align='start'>Alert</th>
              <th align='start'>Status</th>
            </tr>
          </thead>
          <tbody>
            {Table1.map((row) => (
              <tr key={row.id}>

                <td>{row.date}</td>
                <td>{row.quantity}</td>
                <td>{row.alert}</td>
                <td>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Table width={380} style={{ background: "white", padding: "10px", borderRadius: "10px"  , overflowX:"auto"}}>
          <thead>
            <tr>

              <th align='start'>Date</th>
              <th align='start'>Quantity</th>
              <th align='start'>Alert</th>
              <th align='start'>Status</th>
            </tr>
          </thead>
          <tbody>
            {Table1.map((row) => (
              <tr key={row.id}>

                <td>{row.date}</td>
                <td>{row.quantity}</td>
                <td>{row.alert}</td>
                <td>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Bo>


    </Container>
  );
}

export default Dashboard;
