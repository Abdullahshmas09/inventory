import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import Order from './components/Order';
import ScrollToTop from './ScrollToTopp';

function App() {
  return (
    <Router>
      {/* ScrollToTop ensures scrolling to the top on every route change */}
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
