import { AnimatePresence } from "framer-motion"
import { useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom"
import AboutMe from "Refactoring/AboutMe/AboutMe";
import Contacts from "Refactoring/Contacts/Contacts";
import Hobby from "Refactoring/Hobby/Hobby";
// import Home from "Computer_vs/Home";
import Home from "Refactoring/Home";
import Layout from "Refactoring/Layout/Layout";
import Portfolio from "Refactoring/Portfolio/Portfolio";
import ProjectPage from "Refactoring/Projects/ProjectPage";
import { dataCardProjects } from "Data/dataCardProjects";
// import Analogic from "Assets/components/Curiosita/components/Analogic/Analogic";
// import HomeSmartphone from "Smartpone_vs/Home_smartphone";


function AnimetedRoutes() {
    const location = useLocation()
    // const [windowSize, setWindowSize] = useState(getWindowSize());

    // function getWindowSize() {
    //     const {innerWidth, innerHeight} = window;
    //     return {innerWidth, innerHeight};
    // }

    // useEffect(() => {
    //     function handleWindowResize() {
    //         setWindowSize(getWindowSize());
    //     }
        

    //     window.addEventListener('resize', handleWindowResize);

    //     return () => {
    //         window.removeEventListener('resize', handleWindowResize);
    //     };
    // }, []);


    const inputRef = useRef(); //ref of contact section that activate when you click gmail btn in contact section
    const editItem = () => {  //onclick ref for footer section that goes on gmail btn
        inputRef.current.select();
    };

    const ProjectRoutes = dataCardProjects.map(data => {
        return <Route key={data.idx} path={data.destination} element={<ProjectPage {...data} />} />
    })


    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route element={ <Layout editItem={editItem} /> }>
                    <Route path='/' element={<Home />} />
                    <Route path='/aboutme' element={<AboutMe />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/hobby' element={<Hobby />} />
                    <Route path='/contacts' element={<Contacts inputRef={inputRef} />} />

                    {ProjectRoutes}
                </Route>
            </Routes>

            {/* {windowSize.innerWidth > 500 &&
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={
                        <Home
                            innerWidth={windowSize.innerWidth}
                        />
                    } />
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
            } */}
        </AnimatePresence>
    )
}

export default AnimetedRoutes