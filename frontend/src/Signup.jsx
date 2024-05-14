import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //TODO: Handle signup
  const handleSignup = async () => {};

  return (
    <section>
      <h1>Sign Up</h1>
      {isLoading && <p className="toast">Loading...</p>}
      {error && <p className="toast">{error.data || error.statusText || error}</p>}
      <div className="form">
        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
        <select onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </section>
  );
};

export default Signup;
