import dynamic from 'next/dynamic';
import React from 'react'
const SalesCarousel = dynamic(() => import("@components/carousels/components/salesCarousel"), {
    ssr: false
});

function About() {
    return (
        <SalesCarousel />
    )
}

export default About