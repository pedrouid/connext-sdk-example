import React from "react";
// @ts-ignore
import ConnextSDK from "connext-browser-sdk";

// @ts-ignore
import logo from "./logo.svg";
import "./App.css";

function App() {
  const connext = new ConnextSDK();
  const [publicIdentifier, setAddress] = React.useState<string>("");

  // function reset() {
  //   console.log("reset");
  //   setAddress("");
  // }

  async function connect() {
    await connext.login();
    setAddress(connext.publicIdentifier);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{publicIdentifier ? "Connected!" : "Not connected"}</div>
        {publicIdentifier ? (
          <>
            <div>{`publicIdentifier: ${publicIdentifier}`}</div>
          </>
        ) : (
          <button onClick={connect}>Connect</button>
        )}
      </header>
    </div>
  );
}

export default App;
