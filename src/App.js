import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import OneProduct from "./pages/OneProduct/OneProduct";
import SeeMore from "./pages/SeeMore/SeeMore";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/SeeMore' element={<SeeMore />} />
        <Route path='/OneProduct' element={<OneProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
