import ContainerJSX from "../layouts/Container"
import HeaderItemJSX from "./HeaderItem"

// IMPORT FRAMER MOTION LIBRARY
import { motion, useScroll, useAnimation, useMotionValueEvent } from "framer-motion"

// IMPORT USESTATE AND USEFFECT
import { useState, useEffect } from "react"

const Header = () => {

    const [ isScrolled, setIsScrolled ] = useState( false )

    useEffect(() => {

        const handleScroll = () => {

          setIsScrolled( window.scrollY > 100 )

        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

	const { scrollY } = useScroll()
    const squareVariants = {

        display: { y: 0, transition: { duration: .2 } },
        hide: { y: "-100%", transition: { duration: .4 } },

    }
    const controls = useAnimation( scrollY )
    useMotionValueEvent(scrollY, "change", (latest) => {

        let isScrollingDown = scrollY.getPrevious() - latest < 0;
        if( isScrollingDown && latest > 0 ){

            controls.start("hide")

        } else {

            controls.start("display")

        }


    })

    return(
        <header className="hidden md:block">
            <motion.header className={` ${ isScrolled ? "bg-black" : "bg-transparent" } h-32 w-full fixed top-4 z-50`}
                variants={ squareVariants }
                initial="display"
                animate={ controls }
            >
                <ContainerJSX>
                    <nav className="flex items-center justify-between">
                        <div className={` ${ isScrolled ? "hidden" : "block" } w-64 aspect-video`}>
                            <a href="/">
                                <img
                                    src="/logos/ui_light_logo.svg"
                                    alt=""
                                    className="w-64 aspect-video"
                                />
                            </a>
                        </div>
                        <div className={` ${ isScrolled ? "block" : "hidden" } w-64 aspect-video`}>
                            <a href="/">
                                <img
                                    src="/logos/ui_logo.svg"
                                    alt=""
                                    className="w-full aspect-video"
                                />
                            </a>
                        </div>
                        <div className="flex gap-10 items-center">
                            <ul className={` ${ isScrolled ? "text-black" : "text-white" } flex`}>
                                <HeaderItemJSX>What we do</HeaderItemJSX>
                                <HeaderItemJSX>Work</HeaderItemJSX>
                                <HeaderItemJSX>About Us</HeaderItemJSX>
                                <HeaderItemJSX>Articles</HeaderItemJSX>
                            </ul>
                            <button className={` ${ isScrolled ? "text-black border-black" : "text-white border-white" } text-sm hover:text-urbaninsight_light_gray font-bold uppercase border py-7 px-6 rounded`}>
                                Contact Us
                            </button>
                        </div>
                    </nav>
                </ContainerJSX>
            </motion.header>
        </header>
    )

}

export default Header
