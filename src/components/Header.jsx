import ContainerJSX from "../layouts/Container"
import HeaderItemJSX from "./HeaderItem"

const Header = ( props ) => {

    const { dark } = props

    return(
        <header className="h-[136px] flex items-center top-0 w-full z-50">
            <ContainerJSX>
                <nav className="flex items-center justify-between">
                    <div className={` ${ dark ? "hidden" : "block" } w-64 aspect-video`}>
<<<<<<< HEAD
                        <a href="/">
                            <img
                                src="/logos/ui_light_logo.svg"
                                alt=""
                                className="w-64 aspect-video"
                            />
                        </a>
                    </div>
                    <div className={` ${ dark ? "block" : "hidden" } w-64 aspect-video`}>
                        <a href="/">
                            <img
                                src="/logos/ui_logo.svg"
                                alt=""
                                className="w-full aspect-video"
                            />
                        </a>
=======
                        <img
                            src="/logos/ui_light_logo.svg"
                            alt=""
                            className="w-full h-full"
                        />
>>>>>>> 9f1336e (feat: added dark variant of header)
                    </div>
                    <div className={` ${ dark ? "block" : "hidden" } w-64 aspect-video`}>
                        <img
                            src="/logos/ui_logo.svg"
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                    <div className="flex gap-10 items-center">
<<<<<<< HEAD
                        <ul className={` ${ dark ? "text-black" : "text-white" } flex`}>
                            <HeaderItemJSX>What we do</HeaderItemJSX>
                            <HeaderItemJSX>Work</HeaderItemJSX>
                            <HeaderItemJSX>About Us</HeaderItemJSX>
                            <HeaderItemJSX>Articles</HeaderItemJSX>
=======
                        <ul className="flex">
                            <HeaderItemJSX dark={ true }>What we do</HeaderItemJSX>
                            <HeaderItemJSX dark={ true }>Work</HeaderItemJSX>
                            <HeaderItemJSX dark={ true }>About Us</HeaderItemJSX>
                            <HeaderItemJSX dark={ true }>Articles</HeaderItemJSX>
>>>>>>> 9f1336e (feat: added dark variant of header)
                        </ul>
                        <button className={` ${ dark ? "text-black border-black" : "text-white border-white" } text-sm hover:text-urbaninsight_light_gray font-bold uppercase border py-7 px-6 rounded`}>
                            Contact Us
                        </button>
                    </div>
                </nav>
            </ContainerJSX>
        </header>
    )

}

export default Header
