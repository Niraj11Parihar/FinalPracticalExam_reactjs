import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../features/reservationSlice'; // Redux action
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

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Dispatch the action to add a reservation
    dispatch(addReservation(formData));

  };

  return (
    <div className="container mt-5">
        <Navbar ></Navbar>
      <h2 className="text-center text-light fw-bolder">Reservation Form</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
        {/* Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="form-control" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="form-control" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        {/* Check-In Date */}
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
        
        {/* Check-Out Date */}
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
        
        {/* Number of Guests */}
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
          />
        </div>
        
        {/* Room Type Selection */}
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
        
        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Submit Reservation</button>
      </form>
    </div>
  );
}

export default ReservationForm;
