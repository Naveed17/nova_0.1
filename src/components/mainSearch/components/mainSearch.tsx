import { ReactSvg } from '@lib/reactSvg'
import React from 'react'

function MainSearch() {
    return (
        <div className='bg-gray-100 px-4 py-2 rounded flex gap-4'>
            <input type="text" className='bg-transparent outline-none text-xs' placeholder='What are you looking for?' />
            <button className='bg-transparent'>
                <ReactSvg path="ic-search" />
            </button>
        </div>
    )
}

export default MainSearch