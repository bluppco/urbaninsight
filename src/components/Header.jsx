import ContainerJSX from "../layouts/Container"
import HeaderItemJSX from "./HeaderItem"

const Header = () => {

    return(
        <header className="h-[136px] flex items-center top-0 w-full z-50">
            <ContainerJSX>
                <nav className="flex items-center justify-between">
                    <div className="w-64 aspect-video">
                        <img
                            src="/logos/ui_light_logo.svg"
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
                        <button className="text-sm text-white hover:text-urbaninsight_light_gray font-bold uppercase border border-white py-7 px-6 rounded">
                            Contact Us
                        </button>
                    </div>
                </nav>
            </ContainerJSX>
        </header>
    )

}

export default Header
