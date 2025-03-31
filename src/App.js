import React, { useState } from "react";
import "./App.css";

function App() {
  const validTokens = ["1233", "4221", "ax21", "22d1"];
  const [inputToken, setInputToken] = useState("");
  const [isValid, setIsValid] = useState(null); // Track validity
  const [showError, setShowError] = useState(false); // Control modal visibility

  const handleInputChange = (e) => {
    setInputToken(e.target.value);
  };

  const validateToken = () => {
    if (validTokens.includes(inputToken)) {
      setIsValid(true);
      alert("Token accepted! Redirecting to the next page."); // Success message
    } else {
      setIsValid(false);
      setShowError(true); // Show error modal
    }
  };

  const closeModal = () => {
    setShowError(false); // Close error modal
  };

  return (
    <div className="container">
      <h1>Wildlands Firefighter</h1>
      <img src={`${process.env.PUBLIC_URL}/wildlands.png`} alt="Wildlands Firefighter" className="image" />
      <div className="token-input">
        <input
          type="password"
          placeholder="Authentication Code"
          value={inputToken}
          onChange={handleInputChange}
        />
        <button onClick={validateToken}>Next</button>
      </div>
      {showError && (
        <div className="modal">
          <div className="modal-content">
            <p>Invalid token! Please try again.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
