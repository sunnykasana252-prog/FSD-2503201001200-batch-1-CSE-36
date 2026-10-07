import { useState } from "react";

function App() {
  const [name, setName] = useState("Yash");
  const [age, setAge] = useState(19);

  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>

      <button onClick={() => setName("Virat")}>
        Change Name
      </button>

      <button onClick={() => setAge(age + 1)}>
        Increase Age
      </button>
    </div>
  );
}

export default App;