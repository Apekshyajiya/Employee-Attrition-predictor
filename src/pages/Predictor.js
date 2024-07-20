import React, { useState } from "react";
import "../styles/Predictor.css";
import AnimatedLogo from "../components/AnimatedLogo";

const Predictor = () => {
  const [dataset, setDataset] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({
      dataset,
      employeeName,
      employeeId,
      age,
      department,
    });
  };

  return (
    <div>
      <nav className="predictor-nav">
        <AnimatedLogo />
        <div className="predictor-links-container">
          <a href="/" className="btn home-btn">Home</a>
          <a href="/logout" className="btn login-btn">Logout</a>
        </div>
      </nav>
      <div className="predictor-container">
        <div className="predictor-header">
          <h1>Hello!</h1>
        </div>
        <div className="predictor-details">
          <h2 className="predictor-name">Akashdeep Sharma</h2>
          <div className="predictor-check">
            <h4>Check your results here!</h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="detail-item">
              <label className="detail-label">Choose Dataset:</label>
              <input
                type="file"
                className="upload-data"
                accept=".csv, .xlsx"
                value={dataset}
                onChange={(e) => setDataset(e.target.value)}
              />
            </div>
            <div className="update-link">
              <p>Employee not found ?<span>  Update data!</span></p>
            </div>
            <div className="detail-item">
              <label className="detail-label">Name of Employee:</label>
              <input
                type="text"
                className="detail-value no-boder"
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
              />
            </div>
            <div className="detail-item">
              <label className="detail-label">Employee ID:</label>
              <input
                type="text"
                className="detail-value no-border"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
              />
            </div>
            <div className="detail-item">
              <label className="detail-label">Age:</label>
              <input
                type="number"
                className="detail-value no-border"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="detail-item">
              <label className="detail-label">Department:</label>
              <input
                type="text"
                className="detail-value no-border"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
            <button type="check">Check Now!</button>
          </form>
        </div>
       
      </div>
    </div>
  );
};

export default Predictor;