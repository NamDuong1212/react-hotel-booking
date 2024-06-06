import Navbar from "./components/Navbar/index"
import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./components/Login"
import Register from "./components/Register"
import ListHotelComponent from "./admin/ListHotelComponent"
import CreateHotelComponent from "./admin/CreateHotelComponent"
import ViewHotelComponent from "./admin/ViewHotelComponent"
import PaymentComponent from "./admin/PaymentComponent"
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
          <Route path="/hotel" element={<ListHotelComponent />} />
          <Route path="/hotels" element={<ListHotelComponent />} />
          <Route path="/add-hotel/:id" element={<CreateHotelComponent />} />
          <Route path="/view-hotel/:id" element={<ViewHotelComponent />} />
          <Route path="/payment" element={<PaymentComponent />} />
        </Routes>
      </div>
    </>
  )
}

export default App