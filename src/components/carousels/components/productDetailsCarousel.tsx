import Slider from 'react-slick';
import { useState, useRef } from 'react';
import Image from 'next/image';



export default function ProductDetailsCarousel({ ...props }) {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const sliderData = [...Array.from({ length: 4 }, (v, k) => (k + 1).toString())]

    return (
        <div className='clear-left'>
            <Slider asNavFor={nav2} ref={(slider1: any) => setNav1(slider1)}
                {...{
                    slidesToShow: 1,
                    swipeToSlide: true,
                    arrows: false,
                    fade: true,
                }}
                className='lg:float-right lg:w-[80%] bg-gray-100 rounded'

            >
                {sliderData.map((item, index) => {
                    return <div key={index} className="p-4 relative w-[446px] h-[370px] grid content-center">
                        <Image src={`/static/images/gr-${item}.png`} alt="product" width={300} height={200} className='m-auto' />
                    </div>
                })}

            </Slider>
            <Slider

                ref={(slider2: any) => setNav2(slider2)}

                {...{
                    asNavFor: nav1,
                    vertical: true,
                    verticalSwiping: true,
                    slidesToShow: 4,
                    focusOnSelect: true,
                    centerMode: true,
                    arrows: false,
                    dots: false,
                    infinite: true,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                vertical: false,
                                slidesToShow: 5,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                vertical: false,
                                slidesToShow: 4,
                            }
                        },

                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 3,
                                vertical: false,
                                verticalSwiping: false,
                                slidesToScroll: 1,

                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 4,
                                vertical: false,
                                verticalSwiping: false,
                                slidesToScroll: 10,
                                centerMode: false
                            }
                        }
                    ],
                } as any}
                className='lg:float-left lg:w-[20%] lg:h-[380px] lg:overflow-hidden mt-4 lg:mt-0'
            >
                {sliderData.map((item, index) => {
                    return (
                        <div className='px-4 py-2'>
                            <div key={index} className="relative p-2 py-4 bg-gray-100 min-h-[75px]  min-w-[75px] lg:min-w-[85px] rounded grid content-center">
                                <Image src={`/static/images/gr-${item}.png`} alt={`product-${index}`} width={50} className='m-auto' height={50} />
                            </div>
                        </div>
                    )
                })}

            </Slider>
        </div >
    )



}
