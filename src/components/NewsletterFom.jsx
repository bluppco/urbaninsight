const NewsletterForm = () => {

    return(
        <>
            <input type="text" placeholder="Newsletter Signup" value="" className="p-2 rounded w-72 bg-urbaninsight_black text-urbaninsight_dark_gray text-center" name="name" />
            <div className="flex items-center h-full absolute right-2 top-0">
                <div className="w-5 aspect-square p-1 rounded-full bg-urbaninsight_red">
                    <img
                        src="/icons/right_arrow_white.svg"
                        alt=""
                        className="w-full h-full"
                    />
                </div>
            </div>
        </>
    )

}

export default NewsletterForm
