import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import { Toaster } from "react-hot-toast"
import { motion, useScroll } from "framer-motion";
import './motion.css'


function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <Outlet />
      <Toaster />
      <Footer />
    </>
  )
}

export default App
