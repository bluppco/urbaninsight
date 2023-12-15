const HeaderItemJSX = ( props ) => {

    const { dark } = props

    return(
<<<<<<< HEAD
        <li className="text-sm hover:text-urbaninsight_light_gray font-bold uppercase px-4 py-4 transition-all duration-200 hover:cursor-pointer">
=======
        <li className={` ${ dark ? "text-black" : "text-white" } text-sm hover:text-urbaninsight_light_gray font-bold uppercase px-4 py-4 transition-all duration-200 hover:cursor-pointer`}>
>>>>>>> 9f1336e (feat: added dark variant of header)
            { props.children }
        </li>
    )

}

export default HeaderItemJSX
