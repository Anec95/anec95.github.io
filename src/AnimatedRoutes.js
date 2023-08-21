import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "Home";
import Analogic from "Computer_vs/Curiosita/components/Analogic/Analogic";


function AnimetedRoutes() {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path="/analogic_photography" element={< Analogic/>} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimetedRoutes