import "./App.css";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Greeting Message");
  const [textInput, setInput] = useState("");
  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(event) => setInput(event.target.value)}
        />
      </div>

      <div className="buttons">
        <button onClick={() => setMessage(textInput)}>Update text</button>
      </div>
    </div>
  );
}

export default App;
