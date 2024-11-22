import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home";
import ReservationForm from "./components/ReservationForm";
import ReservationList from "./components/ReservationList";
import EditReservation from "./components/EditReservationForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Registration />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/registrationForm" element={<ReservationForm/>} />
          <Route path="/reservationList" element={<ReservationList/>} />
          <Route path="/editReservation" element={<EditReservation/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
