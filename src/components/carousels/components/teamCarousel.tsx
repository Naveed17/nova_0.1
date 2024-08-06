import Slider from 'react-slick';
import { useState, useRef } from 'react';
import { TeamCard, teamData } from '@components/cards';


export default function TeamCarousel() {
    const carouselRef = useRef<any>(null);
    const [currentIndex, setCurrentIndex] = useState(0);


    const settings = {
        speed: 300,
        dots: false,
        fade: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 4,
        swipeToSlide: true,
        beforeChange: (current: number, next: number) => setCurrentIndex(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className='relative'>
            <Slider ref={carouselRef} {...settings}>
                {[...teamData].map((item, index) => (
                    <div className="px-4" key={item.id}>
                        <TeamCard item={item} />
                    </div>
                ))}
            </Slider>
            <div className="flex justify-center gap-4 absolute -bottom-14 left-[50%] translate-x-[-50%]">
                {[...teamData].map((item, index) => (
                    <div
                        onClick={() => carouselRef.current.slickGoTo(index)}
                        key={item.id} className={`w-3 h-3 rounded-full border-[1.5px] border-transparent ${index === currentIndex ? 'bg-red-600 !border-white ring-2 ring-zinc-300' : 'bg-zinc-300'}`} />
                ))}
            </div>
        </div>


    );
}
