import { Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import LayoutDefault from "./layouts/LayoutDefault";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutDefault />} >
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
