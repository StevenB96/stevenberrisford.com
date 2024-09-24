import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PaypalPayment = () => {
  const [amount, setAmount] = useState('');

  const createOrder = (data, actions) => {
    console.log({amount});
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: amount.toString(),
        },
      }],
    });
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleApprove = async (data, actions) => {
    const details = await actions.order.capture();
    console.log('Transaction completed by ' + details.payer.name.given_name);
    alert('Transaction completed!', details);
  };

  const handleError = (error) => {
    console.error('PayPal error:', error);
    alert('Error processing payment, please try again.');
  };

  return (
    <div>
      <h2>PayPal Payment</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Amount (in £):
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            min="0.01"
            step="0.01"
            required
          />
        </label>
        
        <PayPalScriptProvider options={{ 'client-id': 'AWaQIQqNlAYvF8s8rTXje6a2w-7YzQeZYA4bZRoLVtWVe41bgaHulkvXYeCZJx_r6jBWiuM3b9xH2mLi' }}>
          <PayPalButtons
            createOrder={createOrder}
            onApprove={handleApprove}
            onError={handleError}
          />
        </PayPalScriptProvider>
      </form>
    </div>
  );
};

export default PaypalPayment;