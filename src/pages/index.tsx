import { AppHeading } from '@components/appHeading'
import { AppLayout } from '@components/base/components'
import { MainBanner, categoryData } from '@components/mainBanner'
import { CategoryCarousel, SalesCarousel } from '@components/carousels'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { getAllProducts, getAllCategories } from 'src/server'
import { useQuery } from '@tanstack/react-query'
// daynamic import for no ssr
const SalesCounter = dynamic(() => import("@components/salesCounter/components/salesCounter"), {
    ssr: false
});

function Home() {
    const { data, isLoading } = useQuery({ queryKey: ['products'], queryFn: () => getAllProducts() });
    const { data: categories, isLoading: categoriesLoading } = useQuery({ queryKey: ['categories'], queryFn: () => getAllCategories() });
    return (
        <section className='container'>
            <MainBanner data={categoryData} />
            <div className="flex gap-16 mt-20 items-center">
                <AppHeading title="Today's" heading="Flash Sales" />
                <SalesCounter />

            </div>
            <div className="mt-12 border-b border-gray-200">
                <SalesCarousel {...{ data, isLoading }} />
                <div className="flex justify-center py-16">
                    <button className="bg-red-500 text-white px-8 py-2 rounded">View All Products</button>
                </div>
            </div>
            <div className="mt-16 pb-16 border-b border-gray-200">
                <AppHeading title="Categories" heading="Browse By Category" />
                <div className="mt-12">
                    <CategoryCarousel {...{ categories, categoriesLoading }} />
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