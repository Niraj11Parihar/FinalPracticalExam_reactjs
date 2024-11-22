import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../home.css'; 
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/rooms')
      .then(response => {
        setRooms(response.data); 
      })
      .catch(error => {
        console.error("There was an error fetching the room data!", error);
      });
  }, []);

  return (
    <>
      <div>
        <Navbar />  {/* Navbar component */}
        <div className='home-text'>
          <h1>Escape to Elegance</h1>
        </div>

        <div className="container mt-5">
          <h2 className="text-center mb-4 text-light fw-bolder fs-1 shadow-lg">Our Rooms</h2>
          <div className="row">
            {rooms.map((room) => (
              <div className="col-md-4 mb-4 shadow-lg" key={room.id}>
                <div className="card">
                  <img src={room.image} className="card-img-top" alt={room.name} />
                  <div className="card-body">
                    <h5 className="card-title">{room.name}</h5>
                    <p className="card-text">{room.description}</p>
                    <Link to="/registrationForm" className="btn btn-primary">Book Now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
