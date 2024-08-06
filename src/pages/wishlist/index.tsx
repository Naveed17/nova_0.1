import { AppHeading } from '@components/appHeading'
import { AppLayout } from '@components/base'
import { Breadcrumb } from '@components/breadcrumb'
import { Button } from '@components/button'
import { LoadingCard, ProductCard } from '@components/cards'
import { Typography } from '@components/typography'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getAllProducts } from 'src/server'
const breadcrumbData = [
    {
        text: 'Wishlist',
        href: null
    },
]

function Wishlist() {
    const { data, isLoading } = useQuery({ queryKey: ['products'], queryFn: () => getAllProducts() });

    return (
        <div className='container mt-12 mb-32'>
            <Breadcrumb data={breadcrumbData} />
            <div className="flex justify-between items-center mt-12">
                <Typography className='text-xl'>Wishlist (4)</Typography>
                <Button className='bg-transparent border-gray-700 border text-black hover:bg-transparent focus:ring-0'>Move All To Bag</Button>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 mt-12">
                {(isLoading ? Array.from(new Array(4)) : data?.slice(0, 4))?.map((item: any, idx: number) =>
                    item ? <ProductCard key={item.id} {...{ item, isLoading, isWishlist: true }} /> :
                        <LoadingCard key={idx} />
                )}
            </div>
            <div className="mt-32">
                <div className="flex justify-between items-center">
                    <AppHeading title="Just For You" />
                    <Button className='bg-transparent border-gray-700 border text-black hover:bg-transparent focus:ring-0'>See All</Button>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-4 mt-12">
                    {(isLoading ? Array.from(new Array(4)) : data?.slice(0, 4))?.map((item: any, idx: number) =>
                        item ? <ProductCard key={item.id} {...{ item, isLoading }} /> :
                            <LoadingCard key={idx} />
                    )}
                </div>
            </div>
        </div>
    )
}
Wishlist.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <AppLayout>
            {page}
        </AppLayout>
    )
}

export default Wishlist