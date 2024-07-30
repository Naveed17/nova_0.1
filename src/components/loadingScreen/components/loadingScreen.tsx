import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@components/typography';

const waveVariants = {
    hidden: { opacity: 1, y: 10 },
    visible: {
        opacity: [1, 1],
        y: [-25, -35, -25],
        transition: {
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
            times: [0, 0.5, 1] // Defines the timing of opacity and y changes
        }
    }
} as any;

const LoadingScreen = () => {
    return (
        <div className="fixed top-0 z-[9999999] w-full h-screen inset-0 bg-gray-800 flex justify-center items-center">
            <div className="relative w-[300px] md:w-[400px] h-[4px]">
                {/* Bottom Line */}
                <div className="absolute top-0 left-0 h-full w-full bg-gray-400"></div>

                {/* Animated Top Line */}
                <motion.div
                    className="absolute top-0 left-0 h-full bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }} // Adjust duration and easing as needed
                />
            </div>

            <motion.div
                className="absolute"
                variants={waveVariants}
                initial="hidden"
                animate="visible"
            >
                <Typography className='font-bold text-4xl bg-gradient-to-r from-red-600  to-indigo-400 inline-block text-transparent bg-clip-text'>
                    NOVA
                </Typography>
            </motion.div>

        </div>
    );
};

export default LoadingScreen;
