import { AboutMeInfo, AboutMeTitle, AboutMeDescription, Start2impactLink } from "Pages/AboutMe/styledComponents/styledComponents"
import { motion } from "framer-motion"



function AboutMeBody() {
    return (
        <AboutMeInfo>
            <AboutMeTitle
                as={motion.h1}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                About Me
            </AboutMeTitle>
            <AboutMeDescription
                as={motion.p}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                Vivo secondo natura e amo osservare; è così che dò vita ai miei progetti.
                Lasciandomi ispirare da ciò che mi circonda e lasciandomi guidare dal mio istinto.
            </AboutMeDescription>
            <AboutMeDescription
                as={motion.p}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                Da giugno 2021 fino a fine maggio 2022 ho svolto servizio civile, in ambito social, presso una delle
                associazioni culturali più rilevanti in territorio italiano in ambito di danza contemporanea.
                Spesso ricevevo complimenti dall'associazione e dai gruppi di danzatori, che frequentavano le nostre
                sale, per le grafiche che sviluppavo per la promozione social.
            </AboutMeDescription>

            <AboutMeDescription
                as={motion.p}
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
            >
                Così, il 19 luglio 2022 ho deciso di tornare sui
                banchi di scuola per dare una svolta alla mia vita iniziando, tramite&nbsp;
                <Start2impactLink to='https://www.start2impact.it/master/digital-marketing/?utm_source=google&utm_medium=cpc&utm_campaign=Search_DigitalMKT&gclid=EAIaIQobChMI9P_ayKiu_AIVW49oCR3FLw1kEAAYASAAEgJlJPD_BwE' target="_blank">
                    start2impact
                </Start2impactLink>,
                un corso professionalizzante per diventare web developer - front end.
            </AboutMeDescription>
            <AboutMeDescription
                as={motion.p}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Al termine di questo sono
                intenzionato a continuare lo studio approfondendo la componente di design per riuscire così a rendere
                i siti dinamici e invogliare il maggior numero di utenti a frequentarli.
            </AboutMeDescription>
        </AboutMeInfo>
    )
}

export default AboutMeBody