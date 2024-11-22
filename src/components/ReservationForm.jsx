import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../features/reservationSlice'; 
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function ReservationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: 'Normal',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(addReservation(formData));

  };

  return (
    <div className="container mt-5">
      <Navbar />
      <h2 className="text-center text-white fw-bolder fw-bolder mb-4">Reservation Form</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        {/* Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="form-control" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            placeholder="Enter your full name"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="form-control" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            placeholder="Enter your email"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="checkIn" className="form-label">Check-In Date</label>
          <input 
            type="date" 
            id="checkIn" 
            name="checkIn" 
            className="form-control" 
            value={formData.checkIn} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="checkOut" className="form-label">Check-Out Date</label>
          <input 
            type="date" 
            id="checkOut" 
            name="checkOut" 
            className="form-control" 
            value={formData.checkOut} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="guests" className="form-label">Number of Guests</label>
          <input 
            type="number" 
            id="guests" 
            name="guests" 
            className="form-control" 
            value={formData.guests} 
            onChange={handleChange} 
            required 
            min="1" 
            placeholder="Number of guests"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="roomType" className="form-label">Room Type</label>
          <select 
            id="roomType" 
            name="roomType" 
            className="form-select" 
            value={formData.roomType} 
            onChange={handleChange} 
            required
          >
            <option value="Normal">Normal</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Luxury">Luxury</option>
          </select>
        </div>
        
        <button type="submit" className="btn btn-primary w-100 mt-3 py-2">
          Submit Reservation
        </button>
      </form>
    </div>
  );
}

export default ReservationForm;
