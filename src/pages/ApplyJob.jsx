function ApplyJob() {
  return (
    <div className="page">
      <h1>Apply for Job</h1>

      <div className="card">
        <input type="text" placeholder="Candidate Name" />
        <input type="email" placeholder="Email" />
        <select>
          <option>Select Job Role</option>
          <option>Software Developer</option>
          <option>Data Analyst</option>
          <option>HR Executive</option>
          <option>Web Designer</option>
        </select>
        <input type="text" placeholder="Qualification" />
        <input type="file" />
        <textarea placeholder="Why should we hire you?"></textarea>
        <button>Submit Application</button>
      </div>
    </div>
  );
}

export default ApplyJob;