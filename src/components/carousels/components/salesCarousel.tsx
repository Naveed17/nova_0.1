import Slider from 'react-slick';
import { useState, useRef, lazy } from 'react';
import { ReactSvg } from '@lib/reactSvg';
import { LoadingCard, ProductCard } from '@components/cards'



export default function SalesCarousel({ ...props }) {
    const { data, isLoading } = props as { data: any[]; isLoading: boolean }
    const carouselRef = useRef<any>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    if (isLoading) return (
        <div className="grid grid-cols-4 gap-4"> {
            Array.from({ length: 4 }).map((_, index) =>
                <LoadingCard key={index} />
            )
        }</div>
    )


    const settings = {
        className: "sales-slider",
        speed: 1000,
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: true,
        beforeChange: (current: number, next: number) => setCurrentIndex(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    } as any;

    return (
        <div className='relative'>
            <Slider ref={carouselRef} {...settings}>
                {data?.map((item: any, index: number) => (
                    <div key={item.id} className='px-2'>
                        <ProductCard  {...{ item, isLoading }} />
                    </div>
                ))}
            </Slider>
            <div className='absolute top-[-70px] md:flex items-center gap-2  right-0 hidden'>
                <button className='p-2 rounded-full bg-gray-100' onClick={() => carouselRef.current.slickPrev()}><ReactSvg path='ic-left' /></button>
                <button className='p-2 rounded-full bg-gray-100' onClick={() => carouselRef.current.slickNext()}><ReactSvg path='ic-right' /></button>
            </div>

        </div>


    );
}
