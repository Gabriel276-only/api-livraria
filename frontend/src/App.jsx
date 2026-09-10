import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar";
import Home from "./pages/HomePage";
import Catalogo from "./pages/Catalogo";

function App() {
    return (
        <>
            <NavBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo" element={<Catalogo />} />
            </Routes>
        </>
    );
}

export default App;