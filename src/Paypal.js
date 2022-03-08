import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Paypal = ({ price }) => {
const client = process.env.CLIENT_ID
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            description: "play station 5",
            value: price,
          },
        },
      ],
    });
  };
  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      alert(`Transaction completed by ${name}`);
    });
  };
  return (
    <div>
      <PayPalScriptProvider options={{ "client-id": client }}>
        <PayPalButtons
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
          forceReRender={[price]}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default Paypal;
