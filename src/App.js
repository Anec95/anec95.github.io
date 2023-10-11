import { useLocation } from "react-router";
import { useRef } from "react";
import { Routes, Route } from "react-router";
import Layout from "Refactoring/Layout/Layout";
import Home from "Refactoring/Home";
import AboutMe from "Refactoring/AboutMe/AboutMe";
import Portfolio from "Refactoring/Portfolio/Portfolio";
import Hobby from "Refactoring/Hobby/Hobby";
import Contacts from "Refactoring/Contacts/Contacts";
import ProjectPage from "Refactoring/Projects/ProjectPage";
import { dataCardProjects } from "Data/dataCardProjects";
import { AnimatePresence } from "framer-motion";
import Analogic from "Refactoring/Hobby/components/Analogic/Analogic";



function App() {
    const location = useLocation()
    const inputRef = useRef(); //ref of contact section that activate when you click gmail btn in contact section

    const editItem = () => {  
        inputRef.current.select() //onclick ref for footer section that goes on gmail btn
    };

    const ProjectRoutes = dataCardProjects.map(data => {
        return <Route key={data.idx} path={data.destination} element={<ProjectPage {...data} />} />
    })

    return (
        <AnimatePresence mode='wait'>
            <Routes key={location.pathname} location={location}>
                <Route element={ <Layout editItem={editItem} /> }>
                    <Route path='/' element={<Home />} />
                    <Route path='/aboutme' element={<AboutMe />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/hobby' element={<Hobby />} />
                    <Route path='/contacts' element={<Contacts inputRef={inputRef} />} />
                    <Route path='/hobby/analogic_photography' element={<Analogic />} />

                    {ProjectRoutes}
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default App;
