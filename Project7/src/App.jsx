import React, { useState } from "react";

function App() {

  // Define state
  const [status, setStatus] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h1>Multiple Conditional Rendering</h1>

      {/* Buttons to change state */}
      <button onClick={() => setStatus(1)}>Show Student</button>
      <button onClick={() => setStatus(2)}>Show Teacher</button>
      <button onClick={() => setStatus(3)}>Show Admin</button>

      <hr />

      {/* Conditional content based on status */}
      {status === 0 && <p>Please select an option above.</p>}
      {status === 1 && <h2>Welcome, Student Dashboard</h2>}
      {status === 2 && <h2>Welcome, Teacher Dashboard</h2>}
      {status === 3 && <h2>Welcome, Admin Dashboard</h2>}

    </div>
  );
}

export default App;
