import React, { useEffect } from 'react';

const SuccessPage = () => {
  useEffect(() => {
    localStorage.setItem('paid', 'true');
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Payment Successful!</h1>
    </div>
  );
};

export default SuccessPage;
