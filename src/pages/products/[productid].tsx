import { AppHeading } from '@components/appHeading';
import { AppLayout } from '@components/base'
import { Breadcrumb } from '@components/breadcrumb';
import { Button } from '@components/button';
import { LoadingCard, ProductCard } from '@components/cards';
import { ProductDetailsCarousel } from '@components/carousels';
import { Typography } from '@components/typography';
import { ReactSvg } from '@lib/reactSvg';
import { useQuery } from '@tanstack/react-query';
import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { Rating } from 'react-simple-star-rating';
import { getAllProducts, getSingleProduct } from 'src/server';

function ProductDetails() {
    const router = useRouter();
    const { productid } = router.query;
    const { data, isLoading } = useQuery({ queryKey: ['product'], queryFn: () => getSingleProduct(productid as string) });
    const { data: productData, isLoading: pLoading } = useQuery({ queryKey: ['products'], queryFn: () => getAllProducts() });
    const breadcrumbData = [

        {
            text: 'Products',
            href: '/products'
        },
        {
            text: data?.title,
            href: null
        },
    ]
    return (
        <div className='mt-12 mb-20'>
            <Head>
                <title>{data?.title}</title>
            </Head>
            <div className="container">
                <Breadcrumb data={breadcrumbData} />
                <div className="grid grid-cols-1 md:grid-cols-10 gap-8 mt-16">
                    <div className="md:col-span-6">
                        <ProductDetailsCarousel />
                    </div>
                    <div className="md:col-span-4">
                        <div className="flex flex-col gap-2">
                            <Typography className='text-2xl font-semibold'>{data?.title}</Typography>
                            <div className="flex items-center gap-4">
                                <Rating fillColor='#FFAD33' readonly size={20} initialValue={data?.rating?.rate} allowFraction={true} />
                                <Typography className='text-gray-400 text-sm'>
                                    ({data?.rating?.count} Reviews) <span className='mx-2'>|</span>
                                    <span className='text-green-400'>In Stock</span>
                                </Typography>
                            </div>
                            <Typography className='text-2xl'>
                                $ {data?.price}
                            </Typography>
                            <Typography className='text-sm'>
                                {data?.description}
                            </Typography>
                            <hr className='my-4' />
                            <div className="flex items-center gap-4">
                                <Typography className='text-xl'>Colors:</Typography>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-red-500 ring-2 border-2 border-white ring-black rounded-full"></div>
                                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mt-4">
                                <Typography className='text-xl'>Size:</Typography>
                                <div className="flex items-center gap-2">
                                    <div className="p-1 grid justify-items-center items-center text-sm font-medium w-8 h-8 rounded border">S</div>
                                    <div className="p-1 grid justify-items-center items-center text-sm font-medium bg-red-400 text-white border-red-400 w-8 h-8 rounded border">M</div>
                                    <div className="p-1 grid justify-items-center items-center text-sm font-medium w-8 h-8 rounded border">L</div>
                                    <div className="p-1 grid justify-items-center items-center text-sm font-medium w-8 h-8 rounded border">XL</div>
                                </div>

                            </div>
                            <div className="flex items-center gap-4 mt-4">
                                <div className="border rounded flex items-center">
                                    <button className=' text-black px-4 py-2 rounded'>-</button>
                                    <input type="number" className='w-12 text-center border-x focus:outline-none' readOnly value={1} />
                                    <button className=' text-black px-4 py-2 rounded'>+</button>
                                </div>
                                <Button onClick={() => router.push("/cart")}>Buy Now</Button>
                                <button className='border rounded p-2'>
                                    <ReactSvg path="ic-fav" />
                                </button>
                            </div>
                            <div className="mt-4">
                                <ul className='border rounded'>
                                    <li className='flex items-center gap-4 p-2 pb-4'>
                                        <ReactSvg path="icon-delivery-black" />
                                        <div className="flex flex-col gap-1">
                                            <Typography className='font-medium'>Free Delivery</Typography>
                                            <Link href='/' className='underline text-xs'>
                                                Enter your postal code for Delivery Availability
                                            </Link>
                                        </div>
                                    </li>
                                    <li className='flex items-center gap-4 p-2 pb-4 border-t'>
                                        <ReactSvg path="Icon-return" />
                                        <div className="flex flex-col gap-1">
                                            <Typography className='font-medium'>Return Delivery</Typography>
                                            <Typography className='text-xs'>
                                                Free 30 Days Delivery Returns.
                                                <Link href='/' className='underline text-xs ml-1'>
                                                    Details
                                                </Link>
                                            </Typography>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16">
                    <AppHeading title="Related Item" />
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 mt-12">
                        {(pLoading ? Array.from(new Array(4)) : productData?.slice(0, 4))?.map((item: any, idx: number) =>
                            item ? <ProductCard key={item.id} {...{ item, isLoading }} /> :
                                <LoadingCard key={idx} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductDetails.getLayout = function getLayout(page: any) {
    return (
        <AppLayout>
            {page}
        </AppLayout>
    )
}

export default ProductDetails