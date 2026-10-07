import React, { useState } from "react";

function App() {
    const [status, setStatus] = useState(0);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Multiple Conditional Rendering</h1>

            <button onClick={() => setStatus(1)}>
                Show Student
            </button>

            <button onClick={() => setStatus(2)}>
                Show Teacher
            </button>

            <button onClick={() => setStatus(3)}>
                Show Admin
            </button>

            <hr />
   {/* Conditional Rendering using if-else statements */}
            {status === 1 ? ( 
              <h2>Welcome student</h2>
            ) : status === 2 ? (
              <h2>Welcome teacher</h2>
            ) : status === 3 ? (
              <h2>Welcome admin</h2>
            ) : (
              <h2>Please select a role</h2>
            )}
        </div>
    );
}

export default App;