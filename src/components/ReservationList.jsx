import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations, deleteReservation } from '../features/reservationSlice';
import { Link } from 'react-router-dom';
import  Navbar  from './Navbar';

function ReservationList() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservation.reservations);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteReservation(id));
  };

  return (
    <div className="container mt-5">
        <Navbar></Navbar>
      <h2 className="text-center text-light fw-bolder">Reservation List</h2>

      {/* Link to navigate back to the reservation form */}
      <Link to="/registrationForm" className="btn btn-primary mb-3">Back to Reservation Form</Link>

      <ul className="list-group">
        {reservations.length === 0 ? (
          <li className="list-group-item">No reservations found.</li>
        ) : (
          reservations.map((reservation) => (
            <li key={reservation.id} className="list-group-item">
              <strong>{reservation.name}</strong> ({reservation.roomType}) - {reservation.guests} guests<br />
              {reservation.email} - Check-in: {reservation.checkIn} | Check-out: {reservation.checkOut}
              <button onClick={() => handleDelete(reservation.id)} className="btn btn-danger btn-sm float-end ml-2">Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ReservationList;
