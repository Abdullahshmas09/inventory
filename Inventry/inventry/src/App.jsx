import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import Order from './components/Order';
import ScrollToTop from './ScrollToTopp';
import Products from './components/Products';
import Stock from './components/Stock';
import Sales from './components/Sales';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/order" element={<Order />} />
          <Route path="/product" element={<Products />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
