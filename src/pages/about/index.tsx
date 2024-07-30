import { AppLayout } from '@components/base';
import dynamic from 'next/dynamic';
import React from 'react'


function About() {

    return (
        <div>About</div>
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