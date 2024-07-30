import Slider from 'react-slick';
import { useState, useRef } from 'react';
import { ReactSvg } from '@lib/reactSvg';
import { CategoryCard } from '@components/cards'



export default function CategoryCarousel({ ...props }) {
    const { categories, categoriesLoading } = props as { categories: any[], categoriesLoading: boolean }
    const carouselRef = useRef<any>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selected, setSelected] = useState(0);
    const handleSelect = (props: any) => {
        setSelected(props)
    }

    const settings = {
        speed: 500,
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        beforeChange: (current: number, next: number) => setCurrentIndex(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='relative'>
            <Slider ref={carouselRef} {...settings}>
                {categories?.concat([...categories])?.map((item: any, index: number) => (
                    <div key={index} className='px-2'>
                        <CategoryCard {...{ handleSelect, item, selected }} />
                    </div>
                ))}
            </Slider>
            <div className='absolute top-[-70px] md:flex hidden items-center gap-2  right-0'>
                <button className='p-2 rounded-full bg-gray-100' onClick={() => carouselRef.current.slickPrev()}><ReactSvg path='ic-left' /></button>
                <button className='p-2 rounded-full bg-gray-100' onClick={() => carouselRef.current.slickNext()}><ReactSvg path='ic-right' /></button>
            </div>

        </div>


    );
}
