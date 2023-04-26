// IMPORTAZIONE CLIP CARD PROGETTI
import counter_clip from "Assets/clip/counter-project.mp4"
import library_clip from "Assets/clip/library-project.mp4"
import christmas_clip from "Assets/clip/christmas-project.mp4"
import vegan_clip from "Assets/clip/vegan-site.mp4"
import web_site_1_clip from "Assets/clip/thomas-web-site.mp4"
import web_site_2_clip from "Assets/clip/thomas-web-site-2.mp4"
import arti_venture_clip from "Assets/clip/arti-venture.mp4"
import emission_calculator_clip from "Assets/clip/emission-calculator.mp4"


export const dataCardProjects = [
    {
        idx: 0,
        clip: web_site_1_clip,
        title: "Thomas Miori - Web Developer",
        description: "In assoluto il primo sito che io abbia programmato. Ormai non più disponibile online, rimane fruibile su GIthub",
        link_github: "",
        site_link_wording: "",
        link_web_site: ""
    },
    {
        idx: 1,
        clip: counter_clip,
        title: "Count your Number",
        description: "Questa applicazione permette di contare i numeri attraverso dei pulsanti che aggiungono o sottraggono 1, 10 o 100. Questo è il mio primo progetto sviluppato per il corso di Javascript Base.",
        link_github: "https://github.com/Anec95/count-your-number",
        site_link_wording: "Go to count the number",
        link_web_site: "https://count-your-number.netlify.app/"
    },
    {
        idx: 2,
        clip: library_clip,
        title: "What am I reading?",
        description: "Questa è un'applicazione che permette, tramite i servizi API di openlibrary, di ricercare libri e informazioni su di essi. Progetto sviluppato per il corso di Javascript Advanced.",
        link_github: "https://github.com/Anec95/what-am-i-reading",
        site_link_wording: "Find a book",
        link_web_site: "https://what-am-i-reading.netlify.app/"
    },
    {
        idx: 3,
        clip: christmas_clip,
        title: "Christmas Quest",
        description: "Christmas Quest è un lavoro di story telling interattivo dove le scelte dell'utente hanno delle ripercussioni sulla storia. Al momento il suo sviluppo è allo stato di Beta. Si tratta di un progetto personale sviluppato per svago e studio.",
        link_github: "https://github.com/Anec95/christmas-slaughter",
        site_link_wording: "Start your adventure!",
        link_web_site: "https://christmas-quest.netlify.app"
    },
    {
        idx: 4,
        clip: vegan_clip,
        title: "Vegan Cooking Site",
        description: "Vaaov è un sito di ricette vegetariane e vegane realizzato per l'esame finale di React durante il corso con start2impact",
        link_github: "https://github.com/Anec95",
        site_link_wording: "In Cucina!",
        link_web_site: "https://vaaov-vegan-site.netlify.app"
    },
    {
        idx: 5,
        clip: web_site_2_clip,
        title: "Thomas Miori - Web Developer",
        description: "Ecco il mio nuovo sito personale. Fatto su misura e d'eleganza per me.",
        link_github: "",
        site_link_wording: "",
        link_web_site: ""
    },
    {
        idx: 6,
        clip: arti_venture_clip,
        title: "Arti Venture",
        description: "Sito di natura divulgativa, realizzato per un collettivo.",
        link_github: "https://github.com/Anec95",
        site_link_wording: "Visita Sito",
        link_web_site: "https://arti-venture.netlify.app"
    },
    {
        idx: 7,
        clip: emission_calculator_clip,
        title: "Emission Calculator",
        description: "Sito di natura divulgativa, realizzato per un collettivo.",
        link_github: "https://github.com/Anec95",
        site_link_wording: "Calcola le emissioni",
        link_web_site: "https://emission-calculator.netlify.app"
    }
]