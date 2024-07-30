import { AppLayout } from '@components/base';
import dynamic from 'next/dynamic';
import React from 'react'
import { BannerCarousel } from '@components/carousels'

function About() {

    return (
        <div><BannerCarousel /></div>
    )
}
About.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <AppLayout>
            {page}
        </AppLayout>
    )
}

export default About