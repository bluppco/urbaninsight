const HeaderItemJSX = ( props ) => {

    return(
        <li className="text-sm text-white hover:text-urbaninsight_light_gray font-bold uppercase px-4 py-4 transition-all duration-200 hover:cursor-pointer">
            { props.children }
        </li>
    )

}

export default HeaderItemJSX
