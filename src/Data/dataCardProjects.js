// IMPORTAZIONE CLIP CARD PROGETTI
import counter_img from "Assets/images/project_img/count_your_number.png"
import library_img from "Assets/images/project_img/what_am_I_reading.png"
import christmas_img from "Assets/images/project_img/adventure_quest.png"
import vegan_img from "Assets/images/project_img/cooking_site.png"
// import web_site_1_clip from "Assets/clip/thomas-web-site.mp4"
// import web_site_2_clip from "Assets/clip/thomas-web-site-2.mp4"
// import arti_venture_clip from "Assets/clip/arti-venture.mp4"
import emission_calculator_img from "Assets/images/project_img/emission_calculator.png"

import emission_calculator_clip from "Assets/clip/emission-calculator.mp4"
import christmas_quest_clip from "Assets/clip/christmas-project.mp4"
import counter_clip from "Assets/clip/counter-project.mp4"
import reading_clip from "Assets/clip/library-project.mp4"
import cooking_site_clip from "Assets/clip/vegan-site.mp4"


export const dataCardProjects = [
    {
        idx: 0,
        img: emission_calculator_img,
        clip: emission_calculator_clip,
        title: "Emission Calculator",
        destination: "/portfolio/emission_calcultor",
        description: [
            {
                key: 0,
                value: `Progetto finale per il corso fatto con start2impact. Questa web app permette di
                        visualizzare le emissioni prodotte in un intervallo di tempo definito per Stato.`
            }
        ],
        link_github: "https://github.com/Anec95",
        site_link_wording: "Calcola le emissioni",
        link_web_site: "https://emission-calculator.netlify.app"
    },
    // {
    //     idx: 1,
    //     clip: arti_venture_clip,
    //     title: "Arti Venture",
    //     description: "Sito di natura divulgativa, realizzato per un progetto volto alla collaborazione e al creare rete nel territorio Trentino.",
    //     link_github: "https://github.com/Anec95/associazione-arti-venture",
    //     site_link_wording: "",
    //     link_web_site: ""
    // },
    // {
    //     idx: 2,
    //     clip: web_site_2_clip,
    //     title: "Thomas Miori - Web Developer",
    //     description: "Ecco il mio nuovo sito personale. Fatto su misura e d'eleganza per me.",
    //     link_github: "https://github.com/Anec95/anec95.github.io",
    //     site_link_wording: "",
    //     link_web_site: ""
    // },
    {
        idx: 3,
        img: vegan_img,
        clip: cooking_site_clip,
        title: "Vegan Cooking Site",
        destination: "/portfolio/vaaov_cooking_site",
        description: [
            {
                key: 0,
                value: `Vaaov è un sito di ricette vegetariane e vegane realizzato per l'esame finale di
                        React durante il corso con start2impact`
            }
        ],
        link_github: "https://github.com/Anec95",
        site_link_wording: "In Cucina!",
        link_web_site: "https://vaaov-vegan-site.netlify.app"
    },
    {
        idx: 4,
        img: christmas_img,
        clip: christmas_quest_clip,
        title: "Christmas Quest",
        destination: "/portfolio/christmas_quest",
        // description: "Christmas Quest è un lavoro di story telling interattivo dove le scelte dell'utente hanno delle ripercussioni sulla storia. Si tratta di un progetto personale sviluppato per svago e studio.",
        description:[
            {
                key: 0,
                value: `Christmas Quest è un progetto nato dalla passione per la narrativa e il gioco di ruolo.
                        Pensato e rilasciato per il periodo natalizio, si tratta di una storia interattiva,
                        dove l'utente ha la possibilità di scegliere il suo destino; proprio come accadeva con
                        i Libri Game.`
            },
            {
                key: 1,
                value: `Il progetto è stato sviluppato in HTML, CSS e JavaScript.`
            }
        ],
        link_github: "https://github.com/Anec95/christmas-slaughter",
        site_link_wording: "Start your adventure!",
        link_web_site: "https://christmas-quest.netlify.app"
    },
    {
        idx: 5,
        img: library_img,
        clip: reading_clip,
        title: "What am I reading?",
        destination: "/portfolio/what_am_i_reading",
        description: [
            {
                key: 0,
                value: `Questa è un'applicazione che permette, tramite i servizi API di openlibrary, di
                    ricercare libri e informazioni su di essi. Progetto sviluppato per il corso di Javascript
                    Advanced.`
            }
        ],
        link_github: "https://github.com/Anec95/what-am-i-reading",
        site_link_wording: "Find a book",
        link_web_site: "https://what-am-i-reading.netlify.app/"
    },
    {
        idx: 6,
        img: counter_img,
        clip: counter_clip,
        title: "Count your Number",
        destination: "/portfolio/count_your_number",
        description: [
            {
                key: 0,
                value: `Questa applicazione permette di contare i numeri attraverso dei pulsanti che
                    aggiungono o sottraggono 1, 10 o 100. Questo è il mio primo progetto sviluppato
                    per il corso di Javascript Base.`
            }
        ],
        link_github: "https://github.com/Anec95/count-your-number",
        site_link_wording: "Go to count the number",
        link_web_site: "https://count-your-number.netlify.app/"
    },
    // {
    //     idx: 7,
    //     clip: web_site_1_clip,
    //     title: "Thomas Miori - Web Developer",
    //     description: "In assoluto il primo sito che io abbia programmato. Ormai non più disponibile online, rimane fruibile su GIthub",
    //     link_github: "",
    //     site_link_wording: "",
    //     link_web_site: ""
    // }
]