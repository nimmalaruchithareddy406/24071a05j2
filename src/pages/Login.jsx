function Login() {
  return (
    <div className="page">
      <h1>Login Page</h1>

      <div className="card">
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;