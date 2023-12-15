import { CDN_LINK, IMAGE_QUALITY } from "../../constants/cdn"

const SliderJSX = ( props ) => {

    const { data } = props

    return (
        <section className="w-full relative mt-[600px] mb-60 flex gap-40 overflow-x-scroll">
            <div className="w-[600px] aspect-[3/2] rounded-xl overflow-hidden mx-auto shadow-2xl shadow-urbaninsight_black hover:">
                <img
                    src="/images/Broad.jpg"
                    alt=""
                    className="w-full h-full"
                />
            </div>
            {/*<div className="w-[600px] aspect-[3/2] rounded-xl overflow-hidden mx-auto shadow-2xl shadow-urbaninsight_black">
                <img
                    src="/images/Broad.jpg"
                    alt=""
                    className="w-full h-full"
                />
            </div>
            <div className="w-[600px] aspect-[3/2] rounded-xl overflow-hidden shadow-2xl shadow-urbaninsight_black">
                <img
                    src="/images/Broad.jpg"
                    alt=""
                    className="w-full h-full"
                />
            </div>*/}

            {/*{

                data.map( ( value, index ) => {

                    return (
                        <div key={ "slider-index-" + index } className="rounded-2xl shadow-2xl overflow-hidden w-full flex justify-center">
                            <div className="w-full aspect-square md:aspect-auto md:w-[40%] bg-zinc-300 overflow-hidden">
                                <img
                                    src={ "/images/" +  value }
                                    className="object-cover w-full aspect-square md:aspect-auto md:w-[80%] object-bottom scale-100 group-hover:scale-110 duration-300"
                                />
                            </div>
                        </div>
                    )
                })

            }*/}
        </section>
    )

}

export default SliderJSX
