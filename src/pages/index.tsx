import { AppHeading } from '@components/appHeading'
import { AppLayout } from '@components/base/components'
import { MainBanner, categoryData } from '@components/mainBanner'
import { CategoryCarousel, SalesCarousel } from '@components/carousels'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { getAllProducts, getAllCategories } from 'src/server'
import { useQuery } from '@tanstack/react-query'
import { Button } from '@components/button'
import { LoadingCard, ProductCard } from '@components/cards'
import { Typography } from '@components/typography'
import Image from 'next/image'
import { ReactSvg } from '@lib/reactSvg'
import Link from 'next/link'
import { LoadingScreen } from '@components/loadingScreen'
// daynamic import for no ssr
const SalesCounter = dynamic(() => import("@components/salesCounter/components/salesCounter"), {
    ssr: false
});
const CategoryCounter = dynamic(() => import("@components/categoryCounter/components/categoryCounter"), {
    ssr: false
});

function Home() {
    const { data, isLoading } = useQuery({ queryKey: ['products'], queryFn: () => getAllProducts() });
    const { data: categories, isLoading: categoriesLoading } = useQuery({ queryKey: ['categories'], queryFn: () => getAllCategories() });
    if (isLoading || categoriesLoading) return (<LoadingScreen />);
    if (data?.code === "ERR_NETWORK") return <>No Network</>
    return (
        <section className='container'>
            <MainBanner data={categoryData} />
            <div className="flex md:flex-row flex-col items-start gap-8 md:gap-16 mt-20 md:items-center">
                <AppHeading title="Today's" heading="Flash Sales" />
                <SalesCounter />

            </div>
            <div className="mt-12 border-b border-gray-200">
                <SalesCarousel {...{ data, isLoading }} />
                <div className="flex justify-center py-16">
                    <Button>View All Products</Button>
                </div>
            </div>
            <div className="mt-16 pb-16 border-b border-gray-200">
                <AppHeading title="Categories" heading="Browse By Category" />
                <div className="mt-12">
                    <CategoryCarousel {...{ categories, categoriesLoading }} />
                </div>
            </div>
            <div className="mt-16">
                <div className="flex flex-col md:flex-row gap-2 md:items-end justify-between">
                    <AppHeading title="This Month" heading="Best Selling Products" />
                    <Button>
                        View All
                    </Button>
                </div>
            </div>
            <div className="mt-12">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    {data && (isLoading ? Array.from(new Array(4)) : data?.slice(0, 4))?.map((item: any, idx: number) =>
                        item ? <ProductCard key={item.id} {...{ item, isLoading }} /> :
                            <LoadingCard key={idx} />
                    )}
                </div>
            </div>
            <div className="mt-20">
                <div className="bg-black px-8 py-10">
                    <Typography className='text-red-500'>
                        Categories
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-8 mt-8">
                            <Typography variant='h1' component='h1' className='text-white font-semibold'>
                                Enhance Your Music Experience
                            </Typography>
                            <CategoryCounter />
                            <Button className='self-start'>
                                Buy Now!
                            </Button>

                        </div>
                        <div className="relative">
                            <Image
                                alt='product'
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="100vw"
                                quality={75}
                                blurDataURL="/static/images/img-speaker.svg"
                                placeholder="blur"
                                src="/static/images/img-speaker.svg" className='w-full' />

                        </div>
                    </div>

                </div>
            </div>
            <div className="mt-20">
                <AppHeading title="Our Products" heading="Explore Our Products" />
                <div className="grid grid-cols-1 gap-y-12 gap-4 md:grid-cols-4 mt-12">

                    {data && (isLoading ? Array.from(new Array(8)) : data?.slice(0, 8))?.map((item: any, idx: number) =>
                        item ? <ProductCard key={item.id} {...{ item, isLoading }} /> :
                            <LoadingCard key={idx} />
                    )}
                </div>
                <div className="flex justify-center mt-16">
                    <Button>View All Products</Button>
                </div>
            </div>
            <div className="mt-20">
                <AppHeading title="Featured" heading="New Arrival" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                    <div className="bg-black flex flex-col justify-end rounded p-8 bg-[url('/static/images/ps5-playstation_large.svg')] w-full bg-no-repeat md:h-[600px] bg-[25px_bottom]">
                        <div className="flex flex-col gap-2 md:max-w-[50%]">
                            <Typography variant='h2' component='h2' className='text-white'>
                                PlayStation 5
                            </Typography>
                            <Typography className='text-sm text-white'>
                                Black and White version of the PS5 coming out on sale.
                            </Typography>
                            <Link href='/' className='text-white'>
                                <span className='border-b border-gray-400'>Shop Now</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="bg-black flex flex-col justify-end rounded p-8 bg-[url('/static/images/attractive-woman-wearing.svg')] w-full bg-no-repeat h-full bg-[right_bottom] flex-1">
                            <div className="flex flex-col gap-2 md:max-w-[70%]">
                                <Typography variant='h2' component='h2' className='text-white'>
                                    Women’s Collections
                                </Typography>
                                <Typography className='text-sm text-white'>
                                    Featured woman collections that give you another vibe.
                                </Typography>
                                <Link href='/' className='text-white'>
                                    <span className='border-b border-gray-400'>Shop Now</span>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 flex-1">
                            <div className="bg-black flex flex-col justify-end rounded p-8 bg-[url('/static/images/amazon-echo.svg')] w-full bg-no-repeat h-full bg-[center_center]">
                                <div className="flex flex-col gap-2">
                                    <Typography variant='h2' component='h2' className='text-white'>
                                        Speakers
                                    </Typography>
                                    <Typography className='text-sm text-white'>
                                        Amazon wireless speakers
                                    </Typography>
                                    <Link href='/' className='text-white'>
                                        <span className='border-b border-gray-400'>Shop Now</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="bg-black flex flex-col justify-end rounded p-8 bg-[url('/static/images/perfuim.svg')] w-full bg-no-repeat h-full bg-[center_center]">
                                <div className="flex flex-col gap-2">
                                    <Typography variant='h2' component='h2' className='text-white'>
                                        Perfume
                                    </Typography>
                                    <Typography className='text-sm text-white'>
                                        GUCCI INTENSE OUD EDP
                                    </Typography>
                                    <Link href='/' className='text-white'>
                                        <span className='border-b border-gray-400'>Shop Now</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-24">
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
        </section>
    )
}
Home.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <AppLayout>
            {page}
        </AppLayout>
    )
}
export default Home