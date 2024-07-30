import { Typography } from '@components/typography'
import { ReactSvg } from '@lib/reactSvg'
import React from 'react'

function CategoryCard({ ...props }) {
    const { item, handleSelect, selected } = props;
    return (
        <div className={`border p-4 flex items-center justify-center ${item === selected ? 'bg-red-500' : 'bg-transparent'}`} onClick={() => handleSelect(item)}>
            <div className="flex flex-col gap-2 items-center">
                <ReactSvg path="ic-computer" {...(item === selected && {
                    color: 'white',
                })} width={56} height={56} />
                <Typography className={`
                        ${(item === selected) ? 'text-white' : 'text-black'}
                        `}>
                    {item}
                </Typography>
            </div>

        </div>
    )
}

export default CategoryCard