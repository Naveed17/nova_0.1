import { AppLayout } from '@components/base'
import { Breadcrumb } from '@components/breadcrumb'
import { LoadingCard, ProductCard } from '@components/cards';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { getAllProducts } from 'src/server';
const breadcrumbData = [

    {
        text: 'Products',
        href: null
    }
]
function Products() {
    const { data, isLoading } = useQuery({ queryKey: ['products'], queryFn: () => getAllProducts() });
    return (
        <div className='my-12'>
            <div className="container">
                <Breadcrumb data={breadcrumbData} />
                <div className="mt-8">
                    <div className="grid grid-cols-1 gap-y-8 md:gap-y-12 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {(isLoading ? Array.from(new Array(8)) : data)?.map((item: any, idx: number) =>
                            item ? <ProductCard key={item.id} {...{ item, isLoading }} /> :
                                <LoadingCard key={idx} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
Products.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <AppLayout>
            {page}
        </AppLayout>
    )
}

export default Products