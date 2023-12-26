import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Schodisko from "./pages/Schodisko";
import Odpisy from "./pages/Odpisy";
import ThreeD from "./pages/ThreeD";
import Piskvorky from "./pages/Piskvorky";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/schodisko"} element={<Schodisko />} />
                    <Route path={"/odpisy"} element={<Odpisy />} />
                    <Route path={"/3D"} element={<ThreeD />} />
                    <Route path={"/piskvorky"} element={<Piskvorky />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
