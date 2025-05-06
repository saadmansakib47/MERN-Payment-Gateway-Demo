import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SuccessPage from './pages/SuccessPage';
import FailedPage from './pages/FailedPage';

const Home = () => {
  const [paid, setPaid] = useState(false);

  const handlePayment = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/payment/initiate');
      if (res.data?.url) {
        window.location.href = res.data.url;
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Hello World</h1>
      {!paid ? (
        <button onClick={handlePayment}>Pay the World</button>
      ) : (
        <p>Paid</p>
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/fail" element={<FailedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
