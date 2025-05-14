import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
// import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Payment from "./pages/Payment";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesApp
