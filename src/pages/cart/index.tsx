import { AppLayout } from '@components/base';
import { Breadcrumb } from '@components/breadcrumb';
import Image from 'next/image';
import Head from 'next/head';
import React from 'react'
import { Typography } from '@components/typography';
import { ReactSvg } from '@lib/reactSvg';
import { Button } from '@components/button';
import { Input } from '@components/form';
import { useRouter } from 'next/router';
const breadcrumbData = [

    {
        text: 'Cart',
        href: null
    },

]

function Cart() {
    const router = useRouter()
    return (
        <div className='mt-12 mb-20'>
            <Head>
                <title>Cart</title>

            </Head>
            <div className="container">
                <Breadcrumb data={breadcrumbData} />
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 border-separate bg-transparent border-spacing-y-8">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-10">
                            <tr>
                                <th scope="col" className="px-6 py-3 rounded-s-lg">
                                    Product
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Subtotal
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 5 }).map((_, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 min-w-52" >
                                        <div className="flex items-center gap-4">
                                            <Image src="/static/images/GP11_PRD3 1.png" alt="product" width={40} height={30} className='rounded-lg' style={{ objectFit: 'contain' }} />
                                            <Typography className='text-sm'>
                                                H1 Gamepad
                                            </Typography>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        $650
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex border w-min p-1 px-2 rounded">
                                            <input type="number" name="" className='w-8 text-center' readOnly value={1} id="" />
                                            <div className="flex flex-col justify-center gap-1">
                                                <button className=' text-black rounded leading-[80%]'><ReactSvg path="ic-arrow-up" width={7} height={7} /></button>
                                                <button className=' text-black rounded leading-[80%]'><ReactSvg path="ic-arrow-down" width={7} height={7} /></button>

                                            </div>
                                        </div>

                                    </td>
                                    <td className="px-6 py-4">
                                        $650
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className='rounded-full leading-[80%]'>
                                            <ReactSvg path="icon-delete" width={18} height={18} />
                                        </button>

                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center mt-8">
                    <Button className='bg-transparent border-gray-700 border text-black hover:bg-transparent focus:ring-0'>
                        Return To Shop
                    </Button>
                    <Button className='bg-black text-white hover:bg-black focus:ring-0'>
                        Update Cart
                    </Button>

                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-10 mt-16">
                    <div className="md:col-span-4">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <Input placeholder='Coupon Code' className='w-full' />
                            <Button className='sm:min-w-fit'>
                                Apply Coupon
                            </Button>
                        </div>
                    </div>
                    <div className="md:col-span-4 md:col-start-7">
                        <div className="border rounded p-4">
                            <Typography className='text-xl font-medium'>
                                Cart Total
                            </Typography>
                            <ul className='mt-4'>
                                <li className='py-3 flex items-center justify-between border-b'>
                                    <Typography>
                                        Subtotal:
                                    </Typography>
                                    <Typography>
                                        $1750
                                    </Typography>
                                </li>
                                <li className='py-3 flex items-center justify-between border-b'>
                                    <Typography>
                                        Shipping:
                                    </Typography>
                                    <Typography>
                                        free
                                    </Typography>
                                </li>
                                <li className='py-3 flex items-center justify-between'>
                                    <Typography>
                                        Total:
                                    </Typography>
                                    <Typography>
                                        $1750
                                    </Typography>
                                </li>

                            </ul>
                            <Button className='w-full mt-4' onClick={() => router.push({ pathname: `${router.asPath}/checkout` })}>
                                Proceed To Checkout
                            </Button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
Cart.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <AppLayout>
            {page}
        </AppLayout>
    )
}

export default Cart