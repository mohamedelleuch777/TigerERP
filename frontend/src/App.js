
import { useState, useMemo } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LeftMenu from "./Components/LeftMenu";
import Dashboard from "./Pages/Building";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Room from "./Pages/Room";
import { useAuthContext } from "./Hooks/useAuthContext";



export default function App() {
  const { user } = useAuthContext();

  const innerPageStart = {
    position: "fixed",
    width: user ? "calc(100vw - 300px)" : "100vw",
    height: "calc(100vh - 60px)",
    left: user ? "300px" : "0",
    top: "60px",
    backgroundColor: "#f4f4f4",
    display: "flex",
    justifyContent: "center"
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        { user && <LeftMenu />}
        <div style={innerPageStart} className="pages">
          <Routes>
            <Route path="/" exact element={user ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path="/login" exact element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
            <Route path="/room" element={ <Room />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>

  );
}


function NoPage() {
  return <>Nothing To Show</>
}