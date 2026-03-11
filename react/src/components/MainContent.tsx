import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>up</button>
    </div>
  );
}
function MainContent() {
  return (
    <main style={{ padding: "20px", textAlign: "center", minHeight: "400px" }}>
      <h2>Welcome to My Website</h2>
      <p>This is a simple React app demonstrating component structure.</p>
      <Counter />
    </main>
  );
}

export default MainContent;
