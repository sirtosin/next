import React, { useState } from "react";
import Paypal from "./Paypal";

function App() {
  const [price, setPrice] = useState('');

  const handleChange2 = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className="App">
      <div className="name">
        <h1>make a paypal payment</h1>
        input amount
        <br />
        <input type="text" value={price} onChange={handleChange2} />
      </div>
      <br />

      <Paypal price={price} />
    </div>
  );
}

export default App;
