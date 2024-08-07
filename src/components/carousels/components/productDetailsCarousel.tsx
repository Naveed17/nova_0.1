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
                className='md:float-right md:w-[80%] bg-gray-100 rounded'

            >
                {sliderData.map((item, index) => {
                    return <div key={index} className="p-4 relative w-[446px] h-[315px] grid content-center">
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
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 3,
                                vertical: false,
                                verticalSwiping: false,
                                slidesToScroll: 1,
                                centerPadding: 10
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 3,
                                vertical: false,
                                verticalSwiping: false,
                                slidesToScroll: 10,
                                centerMode: false
                            }
                        }
                    ],
                } as any}
                className='md:float-left md:w-[18%] md:h-[320px] md:overflow-hidden mt-4 md:mt-0'
            >
                {sliderData.map((item, index) => {
                    return (
                        <div className='px-4'>
                            <div key={index} className="relative w-[140px] h-[80px] bg-gray-100 rounded grid content-center">
                                <Image src={`/static/images/gr-${item}.png`} alt={`product-${index}`} width={70} className='m-auto' height={50} style={{ objectFit: 'contain' }} />
                            </div>
                        </div>
                    )
                })}

            </Slider>
        </div >
    )



}
