import { Typography } from '@components/typography'
import { ReactSvg } from '@lib/reactSvg'
import Image from 'next/image';
import React from 'react'

function CategoryCard({ ...props }) {
    const { item, handleSelect, selected } = props;
    const [isHovered, setIsHovered] = React.useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    const handleMouseLeave = () => {
        setIsHovered(false)
    }
    return (
        <div className={`flex items-center flex-col gap-4 cat-card`} onClick={() => handleSelect(item)}>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="flex relative p-4 rounded-md  flex-col items-center cat-img bg-gray-100 cursor-pointer">
                <Image
                    src={`/static/images/${item.url}.png`}
                    style={{ objectFit: 'contain' }}
                    alt={item.title}
                    width={300}
                    height={300}
                    className='mix-blend-multiply'

                />
                {isHovered && <ReactSvg path="ic-href" className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]" width={24} height={24} />}
            </div>
            <Typography className={`text-center font-bold font-mulish text-lg`}>
                {item.title}
            </Typography>
        </div>
    )
}

export default CategoryCard