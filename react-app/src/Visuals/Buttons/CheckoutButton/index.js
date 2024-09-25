import React from 'react';
import ClockLoader from "react-spinners/FadeLoader";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";

function Button() {
  /**
   * usePayPalScriptReducer use within PayPalScriptProvider
   * isPending: not finished loading(default state)
   * isResolved: successfully loaded
   * isRejected: failed to load
   */
  const [{ isPending }] = usePayPalScriptReducer();
  const paypalbuttonTransactionProps = {
    style: { layout: "vertical" },
    createOrder(data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: "0.2"
            }
          }
        ]
      });
    },
    onApprove(data, actions) {
      /**
       * data: {
       *   orderID: string;
       *   payerID: string;
       *   paymentID: string | null;
       *   billingToken: string | null;
       *   facilitatorAccesstoken: string;
       * }
       */
      return actions.order.capture({}).then((details) => {
        alert(
          "Transaction completed by" +
          (details?.payer.name.given_name ?? "No details")
        );

        alert("Data details: " + JSON.stringify(data, null, 2));
      });
    }
  };
  return (
    <>
      {
        !!isPending ?
          (
            <ClockLoader color={'black'} />
          )
          :
          (
            <PayPalButtons {...paypalbuttonTransactionProps} />
          )
      }
    </>
  );
}

const PaypalPayment = () => {
  const paypalScriptOptions = {
    "client-id": "",
    currency: "GBP",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider
      options={paypalScriptOptions}
    >
      <Button />
    </PayPalScriptProvider>
  );
};

export default PaypalPayment;