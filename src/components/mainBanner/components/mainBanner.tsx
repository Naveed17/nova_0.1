import { BannerCarousel } from '@components/carousels'
import { ReactSvg } from '@lib/reactSvg'
import React from 'react'

function MainBanner({ ...props }) {
    const { data } = props
    return (

        <div className="bg-gray-100">
            <BannerCarousel />
        </div>


    )
}

export default MainBanner