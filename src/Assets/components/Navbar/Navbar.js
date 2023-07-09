import { useState, useEffect } from "react"
import Icon from "./components/Icon/Icon"
import { NavbarContainer } from "./styledComponents/styledNavbar"
import Menu from "./components/Menu/Menu"
import ToTheTop from "./components/ToTheTop/ToTheTop"
import Social from "./components/Social/Social"



function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [scrollPosition, setScrollPosition] = useState(0);
    const [pageHeight, setPageHeight] = useState({
        firstPanel: 900,
        profesMe: {
            min: 900,
            max: 1800
        },
        portfolio: {
            min: 1800,
            max: 2800
        },
        template: {
            min: 2800,
            max: 3800
        },
        curiosita: {
            min: 3800,
            max: 4800
        },
        contattiMin: 4800
    })

    // SHOW THE ENTIRE MENU
    const handleShow = () => {
        setShowMenu(oldValue => !oldValue)
    }


    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //WINDOW SIZE
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

    useEffect(() => {
        if (windowSize.innerWidth > 1400) {
            setPageHeight({
                firstPanel: 900,
                profesMe: {
                    min: 900,
                    max: 1800
                },
                portfolio: {
                    min: 1800,
                    max: 2800
                },
                template: {
                    min: 2800,
                    max: 3800
                },
                curiosita: {
                    min: 3800,
                    max: 4800
                },
                contattiMin: 4800
            })
        } else if (windowSize.innerWidth > 1000 && windowSize.innerWidth < 1400) {
            setPageHeight({
                firstPanel: 850,
                profesMe: {
                    min: 850,
                    max: 1720
                },
                portfolio: {
                    min: 1720,
                    max: 2590
                },
                template: {
                    min: 2590,
                    max: 3450
                },
                curiosita: {
                    min: 3450,
                    max: 4350
                },
                contattiMin: 4350
            })
        } else if (windowSize.innerWidth > 800 && windowSize.innerWidth <= 1000) {
            setPageHeight({
                firstPanel: 780,
                profesMe: {
                    min: 780,
                    max: 1400
                },
                portfolio: {
                    min: 1400,
                    max: 2600
                },
                template: {
                    min: 1800,
                    max: 2800
                },
                curiosita: {
                    min: 1800,
                    max: 2800
                },
                contattiMin: 2600
            })
        } else if (windowSize.innerWidth > 500 && windowSize.innerWidth <= 800) {
            setPageHeight({
                firstPanel: 200,
                profesMe: {
                    min: 200,
                    max: 1200
                },
                portfolio: {
                    min: 1200,
                    max: 2200
                },
                template: {
                    min: 1800,
                    max: 2800
                },
                curiosita: {
                    min: 1800,
                    max: 2800
                },
                contattiMin: 2200
            })
        } else if (windowSize.innerWidth < 500) {
            setPageHeight({
                firstPanel: 150,
                profesMe: {
                    min: 150,
                    max: 800
                },
                portfolio: {
                    min: 800,
                    max: 1400
                },
                template: {
                    min: 1800,
                    max: 2800
                },
                curiosita: {
                    min: 1800,
                    max: 2800
                },
                contattiMin: 1400
            })
        }
    }, [windowSize.innerWidth])

    return (
        <NavbarContainer>
            <Icon
                handleShow={handleShow}
                showMenu={showMenu}
            />
            {showMenu &&
                <Menu
                    scrollPosition={scrollPosition}
                    pageHeight={pageHeight}
                />
            }
            {showMenu &&
                <Social />
            }
            {(showMenu && scrollPosition > pageHeight.firstPanel) && <ToTheTop />}
        </NavbarContainer>
    )
}

export default Navbar