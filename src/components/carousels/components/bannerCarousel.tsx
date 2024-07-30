import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { varFadeInLeft, varFadeInDown, varFadeInUp } from './config'
import MotionContainer from './motionContainer';
import { ReactSvg } from '@lib/reactSvg';
import { Typography } from '@components/typography';

function CarouselItem({ isActive }: any) {
    return (
        <MotionContainer
            open={isActive}
            className="flex gap-4 bg-black px-16 py-4 min-h-[400px]"
        >
            <div className="flex-1 flex flex-col gap-4">
                <motion.div variants={varFadeInLeft} className='flex gap-4 items-center mt-12'>
                    <ReactSvg path="ic-apple" />
                    <Typography className='text-white'>
                        iPhone 14 Series
                    </Typography>
                </motion.div>
                <motion.div variants={varFadeInDown} >
                    <Typography component='h1' variant='h1' className='text-white leading-[1.5] tracking-wider text-[48px] font-semibold'>
                        Up to 10% <br /> off Voucher
                    </Typography>
                </motion.div>
                <motion.div variants={varFadeInDown}>
                    <Typography component='a' className='text-white flex gap-3 items-center'>
                        <span className='border-b border-white'>Shop Now </span>
                        <ReactSvg path="ic-arrow-right-white" />
                    </Typography>
                </motion.div>
            </div>
            <div className="flex-1 h-[300px]">
                <motion.div variants={varFadeInUp} className="bg-[url('/static/images/banner.svg')] w-full h-full bg-[-70px_0]" />
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
                        key={item} className={`w-3 h-3 rounded-full border-2 border-transparent ${index === currentIndex ? 'bg-red-600 !border-white' : 'bg-zinc-500'}`} />
                ))}
            </div>
        </div>


    );
}
