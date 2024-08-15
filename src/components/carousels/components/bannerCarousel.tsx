import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { varFadeInDown, varFadeInUp } from './config'
import MotionContainer from './motionContainer';
import { ReactSvg } from '@lib/reactSvg';
import { Typography } from '@components/typography';
import { Button } from '@components/button';

function CarouselItem({ isActive }: any) {
    return (
        <MotionContainer
            open={isActive}
            className="flex relative container z-10 flex-col md:flex-row gap-4 py-4 min-h-[500px] justify-center"
        >
            <motion.div variants={varFadeInDown} className="flex-1 flex flex-col gap-4 justify-center">
                <div className="bg-red-500 self-start rounded p-[2px] px-5">
                    <Typography className='text-sm text-white uppercase'>Big Sale</Typography>
                </div>
                <div className="flex flex-col">
                    <Typography component='h1' className='text-[42px] font-black font-mulish'>
                        Best Deal On
                    </Typography>
                    <Typography component='h1' className='text-[42px] -mt-2 font-bold font-black font-mulish'>
                        Laptops and Accessories
                    </Typography>
                    <Typography className='text-gray-500 text-base'>
                        Up to 50% off
                    </Typography>
                    <Typography className='text-[18px]'>From: {" "}
                        <motion.span
                            animate={{ rotate: [-1.5, 1.5, -1.5] }}
                            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                            className='text-red-500 text-[22px] font-bold inline-flex'
                        >
                            $499.99
                        </motion.span>
                    </Typography>

                </div>
                <Button className='self-start'>
                    Show Now
                </Button>
            </motion.div>
            <div className="flex-1 lg:absolute lg:h-full  w-full lg:z-[-1]">
                <motion.div variants={varFadeInUp} className="bg-[url('/static/images/banner.png')] h-[300px] sm:[h-500] md:h-full bg-right bg-no-repeat bg-contain" />
            </div>


        </MotionContainer>
    );
}

export default function BannerCarousel({ ...props }) {
    const carouselRef = useRef<any>(null);
    const [currentIndex, setCurrentIndex] = useState(0);


    const settings = {
        speed: 300,
        dots: false,
        fade: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current: number, next: number) => setCurrentIndex(next)
    };

    return (
        <div className='relative'>
            <Slider ref={carouselRef} {...settings}>
                {[1, 2, 3, 4].map((item, index) => (
                    <CarouselItem key={item} item={item} isActive={index === currentIndex} />
                ))}
            </Slider>
            <div className="flex justify-center gap-4 absolute bottom-10 left-[50%] translate-x-[-50%]">
                {[1, 2, 3, 4].map((item, index) => (
                    <div
                        onClick={() => carouselRef.current.slickGoTo(index)}
                        key={item} className={`w-3 h-3 rounded-full border-[1.5px] border-transparent ${index === currentIndex ? 'bg-red-600 !border-white ring-2 ring-zinc-600' : 'bg-zinc-300'}`} />
                ))}
            </div>
        </div>


    );
}
