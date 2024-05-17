import Navbar from "./components/Navbar/index"
import Pricing from "./pages/Pricing"
import Home from "./pages/Home.js"
import About from "./pages/About"
import Login from "./components/Login"
import Register from "./components/Register"

import { Route, Routes } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App