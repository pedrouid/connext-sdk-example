import React from "react";
import ConnextSDK from "connext-browser-sdk";

// @ts-ignore
import logo from "./logo.svg";
import "./App.css";

function App() {
  const connext = new ConnextSDK();
  const [publicIdentifier, setPublicIdentifier] = React.useState<string>("");

  async function connect() {
    await connext.login();
    setPublicIdentifier(connext.publicIdentifier);
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
