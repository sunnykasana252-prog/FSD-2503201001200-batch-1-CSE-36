
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

 
  const [users, setUsers] = useState([]);

 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  
  const validateForm = () => {
    let newErrors = {};

    
    if (name.trim() === "") {
      newErrors.name = "Name is required";
    }

   
    if (email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    
    if (phone.trim() === "") {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    
    if (password.trim() === "") {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(password)) {
      newErrors.password = "Password must contain at least one lowercase letter";
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = "Password must contain at least one number";
    } else if (!/[!@#$%^&*]/.test(password)) {
      newErrors.password =
        "Password must contain at least one special character (!@#$%^&*)";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Registration Successful!");

      
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <div className="container">
      <h1>React Registration Form</h1>

      
      <form onSubmit={handleSubmit} className="form-box">

        
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}

       
        <input
          type="text"
          placeholder="Enter 10 Digit Phone Number"
          value={phone}
          maxLength="10"
          onChange={(e) => {
            const value = e.target.value;

            
            if (/^\d*$/.test(value)) {
              setPhone(value);
            }
          }}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        
        <input
          type="password"
          placeholder="Enter Strong Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Register</button>
      </form>

    
      {/* <div className="api-data">
        <h2>Fetched API Data</h2>

        {users.map((user) => (
          <div key={user.id} className="card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.website}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default App;

