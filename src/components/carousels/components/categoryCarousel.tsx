import Slider from 'react-slick';
import { useState, useRef } from 'react';
import { ReactSvg } from '@lib/reactSvg';
import { CategoryCard, LoadingCard } from '@components/cards'
import { categoriesData } from './data'



export default function CategoryCarousel({ ...props }) {
    const { categoriesLoading } = props as { categoriesLoading: boolean }
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
        swipeToSlide: true,
        slidesToShow: 4,
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
                {categoriesData?.map((item: any, index: number) => (
                    <div key={index} className='px-2'>
                        <CategoryCard {...{ handleSelect, item, selected }} />
                    </div>
                ))}
            </Slider>

        </div>


    );
}
