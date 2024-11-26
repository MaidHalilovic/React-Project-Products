import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import OneProduct from "./pages/OneProduct/OneProduct";
import SeeMore from "./pages/SeeMore/SeeMore";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/SeeMore' element={<SeeMore />} />
        <Route path='OneProduct' element={<OneProduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
