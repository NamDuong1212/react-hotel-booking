import Navbar from "./components/Navbar/index"
import Pricing from "./pages/Pricing"
import Home from "./pages/Home.js"
import About from "./pages/About"
import Login from "./components/Login"
import Register from "./components/Register"
import DestinationDetail from "./admin/DestinationDetail.js"
import DestinationList from "./admin/DestinationList.js"
import DestinationForm from "./admin/DestinationForm.js"
import AdminPanel from "./admin/Admin.js"
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
          <Route path="/admin/destinations" element={<DestinationList />} />
          <Route path="/admin/destination/:id" element={<DestinationDetail />} />
          <Route path="/admin/add" element={<DestinationForm />} />
          <Route path="/admin/edit/:id" element={<DestinationForm />} />
          <Route path="/admin" element={<AdminPanel/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App