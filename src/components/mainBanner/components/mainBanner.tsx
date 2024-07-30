import { BannerCarousel } from '@components/carousels'
import { ReactSvg } from '@lib/reactSvg'
import React from 'react'

function MainBanner({ ...props }) {
    const { data } = props
    return (
        <div className='grid grid-cols-1 md:col-span-1 md:grid-cols-5'>
            <div className="category-menu border-r -1 border-slate-200 hidden md:block">
                <ul className='pt-8 pr-4'>
                    {data.map((item: { name: string, value: string, subcategory: [] }) =>
                        <li className='cursor-pointer py-1 my-2 flex justify-between items-center' key={item.value}>{item.name}
                            {item.subcategory.length > 0 && <ReactSvg path="ic-right-arrow" width={12} height={12} />}

                        </li>
                    )}

                </ul>
            </div>
            <div className="md:col-span-4 slider pt-4 md:pt-8 md:pl-8">
                <BannerCarousel />
            </div>
        </div>
    )
}

export default MainBanner