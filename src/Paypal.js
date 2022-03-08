import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Paypal = ({ price }) => {
    console.log('5', price)

    const createOrder = (data, actions) => {

        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        description: "play station 5",
                        value: price
                    },
                },
            ],
        });
    }
    const onApprove = (data, actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
        });
    }
  return (
      <div>
          <PayPalScriptProvider options={{ "client-id": "AWxWnm1db6lNbAV1rcKlhgbwzxBrc4ceeQaAPw7y-5Ij7S1FFnVLPpGJjqsUp-R4Ik0TLn-7tnBa6gFI" }}>
              <PayPalButtons
                  createOrder={(data, actions) => createOrder(data, actions)}
                  onApprove={(data, actions) => onApprove(data, actions)}
                   forceReRender={[price]}
              />
          </PayPalScriptProvider>
    </div>
  )
}

export default Paypal
