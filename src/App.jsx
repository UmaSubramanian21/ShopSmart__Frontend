import { BrowserRouter, Routes, Route } from "react-router";
import CartPage from './components/CartPage';
import Home from "./home";
import LoginPage from "./components/Login";
import RegisterPage from "./components/RegisterPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}