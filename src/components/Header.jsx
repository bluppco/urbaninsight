import ContainerJSX from "../layouts/Container"
import HeaderItemJSX from "./HeaderItem"

const Header = () => {

    return(
        <header className="h-28 bg-white flex items-center shadow-xl fixed top-0 w-full z-50">
            <ContainerJSX>
                <nav className="flex items-center justify-between">
                    <div className="w-64 aspect-video">
                        <img
                            src="/logos/ui_logo.svg"
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                    <div className="flex gap-10 items-center">
                        <ul className="flex">
                            <HeaderItemJSX>What we do</HeaderItemJSX>
                            <HeaderItemJSX>Work</HeaderItemJSX>
                            <HeaderItemJSX>About Us</HeaderItemJSX>
                            <HeaderItemJSX>Articles</HeaderItemJSX>
                        </ul>
                        <button className="text-sm text-urbaninsight_black hover:text-urbaninsight_light_gray font-bold uppercase border border-urbaninsight_black py-7 px-6 rounded">
                            Contact Us
                        </button>
                    </div>
                </nav>
            </ContainerJSX>
        </header>
    )

}

export default Header
