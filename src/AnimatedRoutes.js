import { AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "Computer_vs/Home";
import Analogic from "Assets/components/Curiosita/components/Analogic/Analogic";
import HomeSmartphone from "Smartpone_vs/Home_smartphone";


function AnimetedRoutes() {
    const location = useLocation()
    const [windowSize, setWindowSize] = useState(getWindowSize());

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    return (
        <AnimatePresence>
            {windowSize.innerWidth > 500 &&
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />} />
                    <Route path="/analogic_photography" element={< Analogic/>} />
                </Routes>
            }
            {windowSize.innerWidth <= 500 &&
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={
                        <HomeSmartphone
                            innerWidth={windowSize.innerWidth}
                        />
                    } />
                    <Route path="/analogic_photography" element={< Analogic/>} />
                </Routes>
            }
        </AnimatePresence>
    )
}

export default AnimetedRoutes