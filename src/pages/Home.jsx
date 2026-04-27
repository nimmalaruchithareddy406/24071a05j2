function Home() {
  return (
    <div className="page">
      <section className="hero">
        <h1>Welcome to Job Portal</h1>
        <p>
          Find suitable jobs, register your profile, login and apply for jobs
          easily through this portal.
        </p>
        <button>Explore Jobs</button>
      </section>

      <h2>Available Job Categories</h2>

      <div className="cards">
        <div className="card">
          <h3>Software Developer</h3>
          <p>Apply for frontend, backend and full-stack developer roles.</p>
        </div>

        <div className="card">
          <h3>Data Analyst</h3>
          <p>Explore jobs related to data analysis and reporting.</p>
        </div>

        <div className="card">
          <h3>HR Executive</h3>
          <p>Apply for human resource and recruitment jobs.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;