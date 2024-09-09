import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnimatedLogo from "../components/AnimatedLogo";
import "../styles/Edit_profile.css";

const EditProfile = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    department: "",
    dateOfJoin: new Date(), // Default to today's date
    yearsOfExperience: "",
    profilePicture: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user details from API
    axios
      .get("http://127.0.0.1:8000/api/user")
      .then((res) => {
        const dateOfJoin = new Date(res.data.user.dateOfJoin);
        setUserDetails({
          username: res.data.user.username,
          email: res.data.user.email,
          department: "IT", // Assume IT is the default or fetched from API
          dateOfJoin: isNaN(dateOfJoin.getTime()) ? new Date() : dateOfJoin, // Check if the date is valid
          yearsOfExperience: "10", // Use real data if available
          profilePicture: res.data.user.profilePicture, // Fetch profile picture URL if available
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setUserDetails({
      ...userDetails,
      dateOfJoin: date,
    });
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserDetails({
        ...userDetails,
        profilePicture: URL.createObjectURL(file), // For preview purposes
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", userDetails.username);
    formData.append("email", userDetails.email);
    formData.append("department", userDetails.department);
    formData.append("dateOfJoin", userDetails.dateOfJoin.toISOString()); // Convert Date object to string
    formData.append("yearsOfExperience", userDetails.yearsOfExperience);
    if (userDetails.profilePicture) {
      formData.append("profilePicture", userDetails.profilePicture);
    }

    axios
      .put("http://127.0.0.1:8000/api/update-profile", formData, {
        withCredentials: true,
      })
      .then(() => {
        toast.success("Profile updated successfully!");
        navigate("/user-profile");
      })
      .catch((error) => {
        console.error("Update error:", error);
        toast.error("Failed to update profile. Please try again.");
      });
  };

  return (
    <div>
      <nav className="user-profile-nav">
        <AnimatedLogo />
        <a href="/" className="btn-home-btn">
          Home
        </a>
      </nav>

      <div className="edit-profile-container">
        <ToastContainer />
        <h1>Edit Profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="profilePicture">Profile Picture:</label>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              accept="image/*"
              onChange={handleProfilePictureChange}
            />
            {userDetails.profilePicture && (
              <img
                src={userDetails.profilePicture}
                alt="Profile Preview"
                className="profile-picture-preview"
              />
            )}
          </div>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={userDetails.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userDetails.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department:</label>
            <select
              id="department"
              name="department"
              value={userDetails.department}
              onChange={handleChange}
              required
            >
              <option value="">Select a department</option>
              <option value="IT">IT</option>
              <option value="Managing">Managing</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="dateOfJoin">Date of Join:</label>
            <DatePicker
              selected={userDetails.dateOfJoin}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="yearsOfExperience">Years of Experience:</label>
            <input
              type="number"
              id="yearsOfExperience"
              name="yearsOfExperience"
              value={userDetails.yearsOfExperience}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;