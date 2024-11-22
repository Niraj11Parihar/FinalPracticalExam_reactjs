import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/user`, formData);
      setMessage("Registration successful!");
      navigate(`/login`);
    } catch (error) {
      setMessage("Error registering user.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <div className="card shadow-lg rounded-lg p-4 bg-light">
            <h2 className="text-center text-dark mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-control rounded-pill" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="Enter your full name"
                />
              </div>
              
              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-control rounded-pill" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="Enter your email"
                />
              </div>
              
              {/* Password */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  className="form-control rounded-pill" 
                  value={formData.password} 
                  onChange={handleChange} 
                  required 
                  placeholder="Enter your password"
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100 py-2 rounded-pill">
                Register
              </button>
            </form>
            {/* Success/Error Message */}
            {message && (
              <div className="mt-3 text-center">
                {message.includes("successful") ? (
                  <p className="text-success">{message}</p>
                ) : (
                  <p className="text-danger">{message}</p>
                )}
              </div>
            )}
            <div className="mt-3 text-center">
              <p className="text-muted">
                Already have an account?{" "}
                <a href="/login" className="text-decoration-none text-primary">
                  Login here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
