import "./App.css";
import { useState } from "react"


function App() {
  const [message, setMessage] = useState("GreetingMessage")
  const [inputValue, setInputValue] = useState("")
  const updateMessage = () => {
    setMessage(inputValue)
  }

  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input 
        id="greeting-message" 
        type="text" 
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        />
      </div>

      <div className="buttons">
        <button onClick={updateMessage}>Update Greeting</button>
      </div>
    </div>
  );
}

export default App;
