import React from "react";

// @ts-ignore
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [address, setAddress] = React.useState<string>("");

  function reset() {
    console.log("reset");
    setAddress("");
  }

  async function connect() {
    setAddress("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{address ? "Connected!" : "Not connected"}</div>
        {address ? (
          <>
            <div>{address}</div>
          </>
        ) : (
          <button onClick={connect}>Connect</button>
        )}
      </header>
    </div>
  );
}

export default App;
