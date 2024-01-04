import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage";
import MyCart from "./Components/MyCart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mycart" element={<MyCart />} />
      </Routes>
    </div>
  );
}

export default App;