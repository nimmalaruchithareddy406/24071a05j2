function Register() {
  return (
    <div className="page">
      <h1>Candidate Registration</h1>

      <div className="card">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="tel" placeholder="Mobile Number" />
        <input type="text" placeholder="Qualification" />
        <input type="text" placeholder="Skills" />
        <input type="text" placeholder="Experience" />
        <input type="text" placeholder="Preferred Job Role" />
        <input type="password" placeholder="Password" />

        <button>Register</button>
      </div>
    </div>
  );
}

export default Register;