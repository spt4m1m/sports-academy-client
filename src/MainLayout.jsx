import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import { Toaster } from "react-hot-toast"


function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Toaster />
      <Footer />
    </>
  )
}

export default App
