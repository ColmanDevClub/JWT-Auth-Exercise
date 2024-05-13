import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //TODO: Handle login
  const handleLogin = async () => {};

  return (
    <section>
      <h1>Login</h1>
      {isLoading && <p className="toast">Loading...</p>}
      {error && (
        <p className="toast">
          Error {error.status}: {error.data || error.statusText || error}
        </p>
      )}
      <div className="form">
        <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    </section>
  );
};

export default Login;
