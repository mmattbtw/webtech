import { useState } from "react";

function App() {
  const [name, setName] = useState(""); // Stores name input
  const [email, setEmail] = useState(""); // Stores email input

  function handleSubmit(event) {
    event.preventDefault(); // Prevents page reload
    alert(`Name: ${name}\nEmail: ${email}`);
    // Clear the inputs after submitting
    setName("");
    setEmail("");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
          style={{ display: "block", margin: "10px auto", padding: "8px" }}
        />
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          style={{ display: "block", margin: "10px auto", padding: "8px" }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
