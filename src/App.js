import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = () => {
    if (name.trim() === "") {
      setMessage("Please enter your name!");
    } else {
      setMessage(`Hello ${name}`);
    }
  };

  return (
    <div className="container">
      <h2>Hello User App</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Say Hello</button>
      <h3>{message}</h3>
    </div>
  );
}

export default App;
