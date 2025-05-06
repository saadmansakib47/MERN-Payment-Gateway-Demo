const SSLCommerzPayment = require('sslcommerz-lts');
const { v4: uuidv4 } = require('uuid');

const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASSWORD;
const is_live = process.env.IS_LIVE === 'true'; // 'true' in .env means live mode

const initiatePayment = (req, res) => {
  const transactionId = uuidv4();
  const data = {
    total_amount: 10,
    currency: 'BDT',
    tran_id: transactionId,
    success_url: 'http://localhost:5000/api/payment/success',
    fail_url: 'http://localhost:5000/api/payment/fail',
    cancel_url: 'http://localhost:3000',
    ipn_url: '',
    shipping_method: 'No',
    product_name: 'World Peace',
    product_category: 'Donation',
    product_profile: 'general',
    cus_name: 'Hello World',
    cus_email: 'hello@example.com',
    cus_add1: 'Dhaka',
    cus_phone: '01711111111'
  };

  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  sslcz.init(data).then(apiResponse => {
    let GatewayPageURL = apiResponse.GatewayPageURL;
    res.status(200).json({ url: GatewayPageURL });
  }).catch(error => {
    console.error("SSLCommerz Init Error:", error);
    res.status(500).json({ error: 'Payment initiation failed' });
  });
};

const successHandler = (req, res) => {
  res.redirect('http://localhost:3000/success');
};

const failHandler = (req, res) => {
  res.redirect('http://localhost:3000/fail');
};

module.exports = {
  initiatePayment,
  successHandler,
  failHandler
};
