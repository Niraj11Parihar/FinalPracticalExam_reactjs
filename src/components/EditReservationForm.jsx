import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchReservations, updateReservation } from '../features/reservationSlice';
import { Navbar } from './Navbar';

function EditReservation() {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reservations = useSelector((state) => state.reservation.reservations);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: 'Normal',
    id: null,
  });

  useEffect(() => {
    dispatch(fetchReservations()); // Fetch all reservations
  }, [dispatch]);

  useEffect(() => {
    const reservationToEdit = reservations.find((reservation) => reservation.id === parseInt(id));
    if (reservationToEdit) {
      setFormData(reservationToEdit);
    }
  }, [reservations, id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateReservation(formData)); // Update the reservation
    navigate('/reservationList'); // Redirect to the reservation list
  };

  return (
    <div className="container mt-5">
        <Navbar></Navbar>
      <h2 className="text-center">Edit Reservation</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input type="date" id="date" name="date" className="form-control" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="checkIn" className="form-label">Check-In Date</label>
          <input type="date" id="checkIn" name="checkIn" className="form-control" value={formData.checkIn} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="checkOut" className="form-label">Check-Out Date</label>
          <input type="date" id="checkOut" name="checkOut" className="form-control" value={formData.checkOut} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="guests" className="form-label">Number of Guests</label>
          <input type="number" id="guests" name="guests" className="form-control" value={formData.guests} onChange={handleChange} required min="1" />
        </div>
        <div className="mb-3">
          <label htmlFor="roomType" className="form-label">Room Type</label>
          <select id="roomType" name="roomType" className="form-select" value={formData.roomType} onChange={handleChange} required>
            <option value="Normal">Normal</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Luxury">Luxury</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Update Reservation</button>
      </form>
    </div>
  );
}

export default EditReservation;
