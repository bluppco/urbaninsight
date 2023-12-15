const HeaderItemJSX = ( props ) => {

    const { dark } = props

    return(
        <li className={` ${ dark ? "text-black" : "text-white" } text-sm hover:text-urbaninsight_light_gray font-bold uppercase px-4 py-4 transition-all duration-200 hover:cursor-pointer`}>
            { props.children }
        </li>
    )

}

export default HeaderItemJSX
