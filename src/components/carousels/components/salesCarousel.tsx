import Slider from 'react-slick';
import { useState, useRef } from 'react';
import { ReactSvg } from '@lib/reactSvg';
import { ProductCard } from '@components/cards'



export default function SalesCarousel({ ...props }) {
    const { data, isLoading } = props as { data: any[]; isLoading: boolean }
    const carouselRef = useRef<any>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const settings = {
        speed: 500,
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        beforeChange: (current: number, next: number) => setCurrentIndex(next)
    };

    return (
        <div className='relative'>
            <Slider ref={carouselRef} {...settings}>
                {data?.slice(0, 10).map((item: any, index: number) => (
                    <div key={item.id} className='px-2'>
                        <ProductCard  {...{ item, isLoading }} />
                    </div>
                ))}
            </Slider>
            <div className='absolute top-[-70px] flex items-center gap-2  right-0'>
                <button className='p-2 rounded-full bg-gray-100' onClick={() => carouselRef.current.slickPrev()}><ReactSvg path='ic-left' /></button>
                <button className='p-2 rounded-full bg-gray-100' onClick={() => carouselRef.current.slickNext()}><ReactSvg path='ic-right' /></button>
            </div>

        </div>


    );
}
