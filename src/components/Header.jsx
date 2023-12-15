import ContainerJSX from "../layouts/Container"
import HeaderItemJSX from "./HeaderItem"

const Header = ( props ) => {

    const { dark } = props

    return(
        <header className="h-[136px] flex items-center top-0 w-full z-50">
            <ContainerJSX>
                <nav className="flex items-center justify-between">
                    <div className={` ${ dark ? "hidden" : "block" } w-64 aspect-video`}>
                        <img
                            src="/logos/ui_light_logo.svg"
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                    <div className={` ${ dark ? "block" : "hidden" } w-64 aspect-video`}>
                        <img
                            src="/logos/ui_logo.svg"
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                    <div className="flex gap-10 items-center">
                        <ul className="flex">
                            <HeaderItemJSX dark={ true }>What we do</HeaderItemJSX>
                            <HeaderItemJSX dark={ true }>Work</HeaderItemJSX>
                            <HeaderItemJSX dark={ true }>About Us</HeaderItemJSX>
                            <HeaderItemJSX dark={ true }>Articles</HeaderItemJSX>
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
