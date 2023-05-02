// import AnimetedRoutes from "AnimatedRoutes";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes }from "react-router-dom"

import TemplateCard from "Pages/Template/components/TemplateCarousel/components/TemplateCard";
import { dataCardTemplates } from "Data/dataCardTemplates";

import Homepage from "Pages/Homepage/Homepage";
import Layout from "Pages/Layout/Layout";
import AboutMe from "Pages/AboutMe/AboutMe";
import Antique from "Pages/AboutMeSidePage/Antique/Antique";
import Analogic from "Pages/AboutMeSidePage/Analogic/Analogic";
import Cooking from "Pages/AboutMeSidePage/Cooking/Cooking";
import Nature from "Pages/AboutMeSidePage/Nature/Nature";
import ProfessionalmenteMe from "Pages/ProfessionalmenteMe/ProfessionalmenteMe";
import Portfolio from "Pages/Portfolio/Portfolio";
import Template from "Pages/Template/Template";
import TemplateLayout from "Pages/TemplateLayout/TemplateLayout";
import EscapeRoom from "Pages/TemplateSidePage/EscapeRoom/EscapeRoom";
import SoapStorefrontSite from "Pages/TemplateSidePage/SoapStorefrontSite/SoapStorefrontSite";


function App() {

  const cardTemplateElement = dataCardTemplates.map(data => {
      return <TemplateCard key={data.id} {...data}/>
  })

  const [templateIndex, setTemplateIndex] = useState(0)

  function indexPlus() {
      if (templateIndex === cardTemplateElement.length - 1) {
          setTemplateIndex(0)
      } else {
          setTemplateIndex(oldValue => oldValue + 1)
      }
  }

  function indexMinus() {
      if (templateIndex > 0) {
          setTemplateIndex(oldValue => oldValue - 1)
      }
  }

  return (

    <Router>
        {/* <AnimetedRoutes />         */}
        <Routes>
                <Route path='/' element={<Homepage />} />
                <Route element={<Layout />}>
                    <Route path='/about_me' element={<AboutMe />} />
                    <Route path="/about_me/antique" element={<Antique />} />
                    <Route path="/about_me/analogic_photography" element={<Analogic />} />
                    <Route path="/about_me/cooking" element={<Cooking />} />
                    <Route path="/about_me/nature" element={<Nature />} />
                    <Route path='/professionalmente_me' element={<ProfessionalmenteMe />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/template' element={<Template
                        index={templateIndex}
                        cardTemplateElement={cardTemplateElement}
                        functionPlus={indexPlus}
                        functionMinus={indexMinus}
                    />} />
                    <Route element={<TemplateLayout
                        index={templateIndex}
                        functionPlus={indexPlus}
                        functionMinus={indexMinus}
                    />}>
                        <Route path='/template/escape_room' element={<EscapeRoom />} />
                        <Route path='/template/soap_storefront_site' element={<SoapStorefrontSite />} />
                    </Route>
                </Route>
            </Routes>
    </Router>
  )
}

export default App;
