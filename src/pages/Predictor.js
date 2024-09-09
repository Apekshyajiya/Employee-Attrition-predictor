import React, { useState } from "react";
import "../styles/Predictor.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import AnimatedLogo from "../components/AnimatedLogo";
import Button from 'react-bootstrap/Button';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

const Predictor = () => {
  const [predictedVal, setPredictedVal] = useState("");
  const [dailyrate, setDailyrate] = useState("");
  const [Gender, setgender] = useState("");
  const [HourlyRate, setHourlyRate] = useState("");
  const [Job_Involvement, setJob_Involvement] = useState("");
  const [Joblevel, setJoblevel] = useState("");
  const [JobSatisfaction, setJobSatisfaction] = useState("");
  const [MaritalStatus, setMaritalStatus] = useState("");
  const [MonthlyIncome, setMonthlyIncome] = useState("");
  const [Monthlyrate, setMonthlyrate] = useState("");
  const [NumCompaniesWorked, setNumCompaniesWorked] = useState("");
  const [OverTime, setOverTime] = useState("");
  const [PercentSalaryHike, setpercentSalaryHike] = useState("");
  const [Performancerating, setPerformancerating] = useState("");
  const [TotalWorkingYears, setTotalWorkingYears] = useState("");
  const [WorkLifeBalance, setWorkLifeBalance] = useState("");
  const [YearsAtCompany, setYearsAtCompany] = useState("");
  const [YearsInCurrentRole, setYearsInCurrentRole] = useState("");
  const [YearsSinceLastPromotion, setYearsSinceLastPromotion] = useState("");
  const [YearswithCurrManager, setYearswithCurrManager] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [showTooltipIndex, setShowTooltipIndex] = useState(null);

  // Function to get CSRF token from cookies
  const getCSRFToken = () => {
    const csrfToken = document.cookie
      .split('; ')
      .find(row => row.startsWith('csrftoken='))
      ?.split('=')[1];
    return csrfToken;
  };

  // Define handleSendFeedback function
  const handleSendFeedback = () => {
    const recipientEmail = document.getElementById('email-id-of-employee').value;
    const subject = 'Feedback for Employee';
    const body = 'Please enter your feedback here.';
    
    // Alert to notify that feedback was submitted
    alert('Feedback submitted');
  
    // Correctly format the mailto URL with backticks for string interpolation
    const mailtoURL = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the user's default email client with the pre-filled email
    window.location.href = mailtoURL;
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    client.post("http://127.0.0.1:8000/predictor/modelpredicrtor", { 
      dailyrate,
      Gender,
      HourlyRate,
      Joblevel,
      JobSatisfaction,
      Job_Involvement,
      MaritalStatus,
      MonthlyIncome,
      Monthlyrate,
      NumCompaniesWorked,
      OverTime,
      PercentSalaryHike,
      Performancerating,
      TotalWorkingYears,
      WorkLifeBalance,
      YearsAtCompany,
      YearsInCurrentRole,
      YearsSinceLastPromotion,
      YearswithCurrManager,
    }, {
      headers: {
        'X-CSRFToken': getCSRFToken(), // Include CSRF token
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      console.log('showing response:', res);
      console.log('Prediction result:', res.data.prediction);
      if (res.data.prediction[0] === 0) {
        setPredictedVal("No");
      } else {
        setPredictedVal("Yes");
      }
    })
    .catch(err => {
      console.error('Error:', err);
    });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setDailyrate('');
    setgender('');
    setHourlyRate('');
    setJoblevel('');
    setJobSatisfaction('');
    setJob_Involvement('');
    setMaritalStatus('');
    setMonthlyIncome('');
    setMonthlyrate('');
    setNumCompaniesWorked('');
    setOverTime('');
    setpercentSalaryHike('');
    setPerformancerating('');
    setTotalWorkingYears('');
    setWorkLifeBalance('');
    setYearsAtCompany('');
    setYearsInCurrentRole('');
    setYearsSinceLastPromotion('');
    setYearswithCurrManager('');
  };

  return (
    <div>
      <nav className="predictor-nav">
        <AnimatedLogo />
        <div className="predictor-links-container">
          <a href="/" className="btn home-btn">
            Home
          </a>
          <a href="/logout" className="btn login-btn">
            Logout
          </a>
        </div>
      </nav>
      <div className="predictor-container">
        <div className="predictor-header">
          <h1>Hello!</h1>
        </div>
        <div className="predictor-details">
          <div className="predictor-check">
            <h2>Check your results here!</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="detail-item">
              <label className="detail-label">Daily Rate:</label>
              <input
                type="number"
                name="DR"
                className="detail-value no-border"
                value={dailyrate}
                onChange={(e) => setDailyrate(e.target.value)}
              />
              <button
                onMouseEnter={() => setShowTooltipIndex('dailyrate')}
                onMouseLeave={() => setShowTooltipIndex(null)}
                className="info-button"
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  marginLeft: '10px',
                  color: 'blue',
                }}
              >
                ℹ
              </button>
              {showTooltipIndex === 'dailyrate' && (
                <div className="tooltip" style={{ position: 'absolute', backgroundColor: '#555', color: '#fff', padding: '5px', borderRadius: '4px', marginTop: '5px' }}>
                  Daily Rate is the daily income
                </div>
              )}
            </div>

            <div className="detail-item">
              <label className="detail-label">Gender:</label>
              <select
                className="detail-value no-border"
                name="Ge"
                value={Gender}
                onChange={(e) => setgender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="detail-item">
              <label className="detail-label">Hourly Rate:</label>
              <input
                type="number"
                className="detail-value no-border"
                name="HR"
                value={HourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
              />
              <button
                onMouseEnter={() => setShowTooltipIndex('hourlyrate')}
                onMouseLeave={() => setShowTooltipIndex(null)}
                className="info-button"
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  marginLeft: '10px',
                  color: 'blue',
                }}
              >
                ℹ
              </button>
              {showTooltipIndex === 'hourlyrate' && (
                <div className="tooltip" style={{ position: 'absolute', backgroundColor: '#555', color: '#fff', padding: '5px', borderRadius: '4px', marginTop: '5px' }}>
                  Compensation based on the number of hours worked.
                </div>
              )}
            </div>

            <div className="detail-item">
              <label className="detail-label">Job Involvement:</label>
              <input
                type="number"
                className="detail-value no-border"
                name="JI"
                value={Job_Involvement}
                onChange={(e) => setJob_Involvement(e.target.value)}
              />
              <p className="description-of-query">1 being the lowest, 4 the heighest</p>
            </div>

            <div className="detail-item">
              <label className="detail-label">Job Level:</label>
              <input
                type="number"
                className="detail-value no-border"
                name="JL"
                value={Joblevel}
                onChange={(e) => setJoblevel(e.target.value)}
              />
              <p className="description-of-query">1 being the lowest, 4 the heighest</p>
            </div>

            <div className="detail-item">
              <label className="detail-label">Job Satisfaction:</label>
              <input
                type="number"
                className="detail-value no-border"
                name="JS"
                value={JobSatisfaction}
                onChange={(e) => setJobSatisfaction(e.target.value)}
              />
              <p className="description-of-query">1 being the lowest, 4 the heighest</p>
            </div>

            <div className="detail-item">
              <label className="detail-label">Marital Status:</label>
              <select
                className="detail-value no-border"
                name="MS"
                value={MaritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
              >
                <option value="">Select </option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
              </select>
            </div>

            <div className="detail-item">
              <label className="detail-label">Monthly Income:</label>
              <input
                type="number"
                className="detail-value no-border"
                name="MI"
                value={MonthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
              />
            </div>

            <div className="detail-item">
              <label className="detail-label">Monthly Rate:</label>
              <input
                type="number"
                className="detail-value no-border"
                value={Monthlyrate}
                onChange={(e) => setMonthlyrate(e.target.value)}
              />
              <button
                onMouseEnter={() => setShowTooltipIndex('monthlyrate')}
                onMouseLeave={() => setShowTooltipIndex(null)}
                className="info-button"
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  marginLeft: '10px',
                  color: 'blue',
                }}
              >
                ℹ
              </button>
              {showTooltipIndex === 'monthlyrate' && (
                <div className="tooltip" style={{ position: 'absolute', backgroundColor: '#555', color: '#fff', padding: '5px', borderRadius: '4px', marginTop: '5px' }}>
                  A set amount paid each month, regardless of the number of hours worked.
                </div>
              )}
            </div>

            <div className="detail-item">
              <label className="detail-label">Number of Companies Worked:</label>
              <input
                type="number"
                className="detail-value no-border"
                value={NumCompaniesWorked}
                onChange={(e) => setNumCompaniesWorked(e.target.value)}
              />
            </div>

            
            <div className="detail-item">
              <label className="detail-label">Over Time:</label>
              <select
                className="detail-value no-border"
                value={OverTime}
                onChange={(e) => setOverTime(e.target.value)}
              >
                <option value="">Select </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="detail-item">
              <label className="detail-label">Percent Salary Hike:</label>
              <input
                type="number"
                className="detail-value no-border"
                value={PercentSalaryHike}
                onChange={(e) => setpercentSalaryHike(e.target.value)}
              />
            </div>

            <div className="detail-item">
              <label className="detail-label">Performance Rating:</label>
              <input
                type="number"
                className="detail-value no-border"
                value={Performancerating}
                onChange={(e) => setPerformancerating(e.target.value)}
              />
              <p className="description-of-query">1 being the lowest, 4 the heighest</p>
            </div>

            <div className="detail-item">
              <label className="detail-label">Total Working Years:</label>
              <input
                type="number"
                className="detail-value no-border"
                value={TotalWorkingYears}
                onChange={(e) => setTotalWorkingYears(e.target.value)}
              />
            </div>

            <div className="detail-item">
              <label className="detail-label">Work Life Balance:</label>
              <input
                type="number"
                className="detail-value no-border"
                value={WorkLifeBalance}
                onChange={(e) => setWorkLifeBalance(e.target.value)}
              />
              <p className="description-of-query">1 being the lowest, 4 the heighest</p>
            </div>

            <div className="detail-item">
              <label className="detail-label">Years At Company:</label>
              <input
                type="number"
                className="detail-value no-border"
                value={YearsAtCompany}
                onChange={(e) => setYearsAtCompany(e.target.value)}
              />
            </div>

            <div className="detail-item">
              <label className="detail-label">Years In Cuurent Role:</label>
              <input
                type="number"
                className="detail-value no-border"
                value={YearsInCurrentRole}
                onChange={(e) => setYearsInCurrentRole(e.target.value)}
              />
            </div>

            <div className="detail-item">
              <label className="detail-label">Years Since Last Promotion:</label>
              <input
                type="number"
                className="detail-value no-border"
                value={YearsSinceLastPromotion}
                onChange={(e) => setYearsSinceLastPromotion(e.target.value)}
              />
            </div>

            <div className="detail-item">
              <label className="detail-label">Years With Currmanager:</label>
              <input
                type="number"
                className="detail-value no-border"
                value={YearswithCurrManager}
                onChange={(e) => setYearswithCurrManager(e.target.value)}
              />
            </div>
            
            <Button type="submit">Check Now!</Button>
            <Button variant="secondary" type="button" onClick={handleReset}>Reset</Button>
          </form>
        </div>
      </div>
      <div className="results-container">
        <div className="profile-details-results">
          <h4 className="profile-name-extraline">Your results will be visible here once you submit the form</h4>
          <div className="display-results">
            <div className="display-results">Results :</div>
            <div className="final-result-val">
              {predictedVal === 'No' && (
                <p style={{ color: 'green' }}>{predictedVal}</p>
              )}
              {predictedVal === 'Yes' && (
                <>
                  <p style={{ color: 'red' }}>{predictedVal}</p>
                  <div className="contact-page-wrapper">
                    <div className="contact-form-container">
                      <input type="text" placeholder="Email ID of the employee" id="email-id-of-employee" required />
                    </div>
                    <Button variant="primary" type="submit" onClick={handleSendFeedback}>Send Feedback</Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predictor;
