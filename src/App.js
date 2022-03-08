import React, { useRef, useEffect, useState } from "react";
import Paypal from "./Paypal";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleChange1 = (e) => {
    setEmail(e.target.value);
  };
  const handleChange2 = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className="App">
      <div className="name">
        <h1>make a paypal payment</h1>
        <label htmlFor="name">name</label>
        <input type="text" onChange={handleChange} />
        <label htmlFor="email">name</label>
        <input type="email" onChange={handleChange1} />
        <input
          type="text"
          value={price}
          onChange={handleChange2}
        />
      </div>

      <Paypal price={price} />
      {console.log("55", price)}
    </div>
  );
}

export default App;
