import { AppLayout } from '@components/base';
import dynamic from 'next/dynamic';
import React from 'react'
import { Breadcrumb } from '@components/breadcrumb';
import { Typography } from '@components/typography';
import Image from 'next/image';
import { ReactSvg } from '@lib/reactSvg';
import { TeamCarousel } from '@components/carousels';
const breadcrumbData = [

    {
        text: 'About',
        href: null
    }
]
function About() {

    return (
        <div className='mt-12'>
            <div className="container">
                <Breadcrumb data={breadcrumbData} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div className="flex flex-col order-1 md:-order-1">
                        <Typography component='h1' variant='h1'>
                            Our Story
                        </Typography>
                        <Typography component='p' variant='body1' className='mt-4'>
                            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                        </Typography>
                    </div>
                    <div className="relative -order-1 md:order-2 mt-12 md:mt-0">
                        <Image
                            priority
                            src="/static/images/about.svg"
                            width={600}
                            height={600}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            alt='about' />
                    </div>
                </div>
                <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="border border-gray-200 flex flex-col items-center justify-center gap-4 p-8">
                        <div className="w-16 rounded-full flex items-center justify-center h-16 ring-8 ring-neutral-300 bg-black">
                            <ReactSvg path="ic-shop" />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Typography variant='h1' component='h1' className='text-center'>
                                10.5k
                            </Typography>
                            <Typography className='text-sm text-center'>
                                Sallers active our site
                            </Typography>
                        </div>
                    </div>
                    <div className="border border-gray-200 flex flex-col items-center justify-center gap-4 p-8">
                        <div className="w-16 rounded-full flex items-center justify-center h-16 ring-8 ring-neutral-300 bg-black">
                            <ReactSvg path="Icon-Sale" color="white" />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Typography variant='h1' component='h1' className='text-center'>
                                33k
                            </Typography>
                            <Typography className='text-sm text-center'>
                                Mopnthly Produduct Sale
                            </Typography>
                        </div>
                    </div>
                    <div className="border border-gray-200 flex flex-col items-center justify-center gap-4 p-8">
                        <div className="w-16 rounded-full flex items-center justify-center h-16 ring-8 ring-neutral-300 bg-black">
                            <ReactSvg path="Icon-Shopping-bag" />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Typography variant='h1' component='h1' className='text-center'>
                                45.5k
                            </Typography>
                            <Typography className='text-sm text-center'>
                                Customer active in our site
                            </Typography>
                        </div>
                    </div>
                    <div className="border border-gray-200 flex flex-col items-center justify-center gap-4 p-8">
                        <div className="w-16 rounded-full flex items-center justify-center h-16 ring-8 ring-neutral-300 bg-black">
                            <ReactSvg path="Icon-Moneybag" />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Typography variant='h1' component='h1' className='text-center'>
                                25k
                            </Typography>
                            <Typography className='text-sm text-center'>
                                Anual gross sale in our site
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="mt-32 pb-12">
                    <TeamCarousel />
                </div>
                <div className="my-32">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <div className="flex flex-col items-center">
                            <div className="w-20 rounded-full flex items-center justify-center h-20 ring-8 ring-neutral-300 bg-black">
                                <ReactSvg path="icon-delivery" />
                            </div>
                            <div className="flex flex-col items-center gap-2 mt-8">
                                <Typography variant='h3'>
                                    FREE AND FAST DELIVERY
                                </Typography>
                                <Typography className='text-sm'>
                                    Free delivery for all orders over $140
                                </Typography>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-20 rounded-full flex items-center justify-center h-20 ring-8 ring-neutral-300 bg-black">
                                <ReactSvg path="ic-customer-serv" />
                            </div>
                            <div className="flex flex-col items-center gap-2 mt-8">
                                <Typography variant='h3'>
                                    24/7 CUSTOMER SERVICE
                                </Typography>
                                <Typography className='text-sm'>
                                    Friendly 24/7 customer support
                                </Typography>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-20 rounded-full flex items-center justify-center h-20 ring-8 ring-neutral-300 bg-black">
                                <ReactSvg path="ic-shield-tick" />
                            </div>
                            <div className="flex flex-col items-center gap-2 mt-8">
                                <Typography variant='h3'>
                                    MONEY BACK GUARANTEE
                                </Typography>
                                <Typography className='text-sm'>
                                    We reurn money within 30 days
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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