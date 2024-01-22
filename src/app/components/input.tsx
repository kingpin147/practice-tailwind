import React, { useState } from "react";

const Input = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button>Add</button>
      <br />
    </div>
  );
};

export default Input;
