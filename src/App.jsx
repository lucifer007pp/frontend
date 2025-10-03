import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import How from "./pages/How";
import Simulation from "./pages/Simulation"; // Uncomment this line

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how" element={<How />} />
            <Route path="/simulation" element={<Simulation />} /> {/* Uncomment this line */}
        </Routes>
    );
}

export default App;