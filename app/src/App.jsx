import React, { useState } from "react";
import "./App.css";
function App() {
  const [Number, setNumber] = useState("");
  const HandleDel = (e) => {
    try {
      setNumber(Number.slice(0, -1));
      
      
      
    } catch (error) {
      // alert("Check your operation");
      setNumber(Number+'');
      
    }
  };

  const HandleEqual = (e) => {
    try {
    setNumber(eval(Number))
      
    }
    catch (e) {
      alert("Check your input");
      setNumber(0);
    }
  }
  return (
    <div className="App">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input
              type="text"
              value={Number}
              readOnly
              // onChange={(e) => setNumber(Number + e.target.value)}
            />
          </div>
          <div className="row1">
            <input type="button" value="AC" onClick={(e) => setNumber("")} />
            <input type="button" value="DEL" onClick={(e) => HandleDel()} />
            <input
              type="button"
              value="."
              onClick={(e) => setNumber(Number + e.target.value)}
            />
            <input
              type="button"
              value="/"
              onClick={(e) => setNumber(Number + e.target.value)}
            />
          </div>
          <div className="row2">
            <input
              type="button"
              value="7"
              onClick={(e) => setNumber(Number + e.target.value)}
            />
            <input
              type="button"
              value="8"
              onClick={(e) => setNumber(Number + e.target.value)}
            />
            <input
              type="button"
              value="9"
              onClick={(e) => setNumber(Number + e.target.value)}
            />
            <input
              type="button"
              value="*"
              onClick={(e) => setNumber(Number + e.target.value)}
            />
          </div>
          <div className="row3">
            <input
              type="button"
              value="4"
              onClick={(e) => setNumber(Number + e.target.value)}
            />
            <input
              type="button"
              value="5"
              onClick={(e) => setNumber(Number + e.target.value)}
            />
            <input
              type="button"
              value="6"
              onClick={(e) => setNumber(Number + e.target.value)}
            />
            <input
              type="button"
              value="-"
              onClick={(e) => setNumber(Number + e.target.value)}
            />
          </div>
          <div className="row4">
            <input
              type="button"
              value="1"
              onClick={(e) => setNumber(Number + e.target.value)}
            />
            <input
              type="button"
              value="2"
              onClick={(e) => setNumber(Number + e.target.value)}
            />
            <input
              type="button"
              value="3"
              onClick={(e) => setNumber(Number + e.target.value)}
            />
            <input
              type="button"
              value="+"
              onClick={(e) => setNumber(Number + e.target.value)}
            />
          </div>
          <div className="row5">
            <input
              type="button"
              value="0"
              onClick={(e) => setNumber(Number + e.target.value)}
            />
            <input
              type="button"
              value="00"
              onClick={(e) => setNumber(Number + e.target.value)}
            />
            <input
              type="button"
              value="="
              className="equalSymbol"
              onClick={HandleEqual}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
