import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action for adding reservation
export const addReservation = createAsyncThunk(
  'reservation/addReservation',
  async (reservationData) => {
    const response = await axios.post('http://localhost:5000/reservations', reservationData);
    return response.data;
  }
);

// Async action for fetching all reservations
export const fetchReservations = createAsyncThunk(
  'reservation/fetchReservations',
  async () => {
    const response = await axios.get('http://localhost:5000/reservations');
    return response.data;
  }
);

// Async action for deleting a reservation
export const deleteReservation = createAsyncThunk(
  'reservation/deleteReservation',
  async (id) => {
    await axios.delete(`http://localhost:5000/reservations/${id}`);
    return id; // Return the id of the deleted reservation
  }
);

// Async action for updating a reservation
export const updateReservation = createAsyncThunk(
  'reservation/updateReservation',
  async (reservationData) => {
    const { id, ...updatedData } = reservationData;
    const response = await axios.put(`http://localhost:5000/reservations/${id}`, updatedData);
    return response.data;
  }
);

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    reservations: [],
    status: 'idle',  // Track loading state
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle adding a reservation
      .addCase(addReservation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addReservation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reservations.push(action.payload); // Add new reservation to the list
      })
      .addCase(addReservation.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      
      // Handle fetching all reservations
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.reservations = action.payload;
      })
      
      // Handle deleting a reservation
      .addCase(deleteReservation.fulfilled, (state, action) => {
        state.reservations = state.reservations.filter(
          (reservation) => reservation.id !== action.payload
        );
      })
      
      // Handle updating a reservation
      .addCase(updateReservation.fulfilled, (state, action) => {
        const index = state.reservations.findIndex(
          (reservation) => reservation.id === action.payload.id
        );
        if (index !== -1) {
          state.reservations[index] = action.payload; // Update the reservation in the list
        }
      });
  },
});

export default reservationSlice.reducer;
