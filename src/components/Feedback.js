import React from 'react'
import Button from 'react-bootstrap/Button';

const Feedback = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Feedback submitted');
  }  
  
  return (
    <div className='feedback-conatiner'>
        <div className="contact-page-wrapper">
            <h1 className="feedback-primary-heading">Have Question In Mind?</h1>
            <h1 className="feedback-primary-heading">Let Us Help You</h1>
            <div className="contact-form-container">
                <input type="text" placeholder="Your feedback" />
            </div>
            <Button variant="primary" type="submit" onClick={handleSubmit}>Send Feedback</Button>
        </div>
    </div>
  )
}

export default Feedback