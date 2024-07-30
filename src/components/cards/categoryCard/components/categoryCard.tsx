import { Typography } from '@components/typography'
import { ReactSvg } from '@lib/reactSvg'
import Image from 'next/image';
import React from 'react'

function CategoryCard({ ...props }) {
    const { item, handleSelect, selected } = props;
    console.log(item, "item")
    return (
        <div className={`flex items-center flex-col gap-4`} onClick={() => handleSelect(item)}>
            <div className="flex w-[100px] overflow-hidden h-[100px] relative p-4 border rounded-tl-2xl rounded-br-2xl flex-col gap-2 items-center">
                <Image
                    src={`/static/images/${item.image}`}
                    style={{ objectFit: 'contain' }}
                    alt={item.title}
                    width={100}
                    height={100}
                    className='mix-blend-multiply'

                />
            </div>
            <Typography className={`text-xs text-center 'text-black'}`}>
                {item.title}
            </Typography>
        </div>
    )
}

export default CategoryCard