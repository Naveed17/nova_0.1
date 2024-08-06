'use client'
import { Typography } from '@components/typography'
import { ReactSvg } from '@lib/reactSvg'
import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo, useState } from 'react'
function TeamCard({ ...props }) {
    const { item } = props
    return (
        <div className='flex flex-col relative'>
            <div className="bg-gray-200 p-6 min-h-[250px] rounded relative overflow-hidden">
                <div className='w-[200px] h-[200px] relative m-auto'>
                    <Image
                        src={`/static/images/${item?.image}`}
                        alt={item.name}
                        style={{ objectFit: "contain" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        width={294}
                        height={397}
                        quality={75}
                        blurDataURL={item?.image}
                        placeholder="blur"
                        className='mix-blend-multiply'
                    />
                </div>
            </div>
            <div className="mt-2 flex flex-col gap-2">
                <Typography className='font-medium'>
                    {item.name}
                </Typography>
                <div className="flex items-center gap-4">
                    <Typography>
                        {item.designation}
                    </Typography>
                </div>

            </div>
            <ul className='flex items-center gap-3 mt-4'>
                <li>
                    <Link href='/'>
                        <ReactSvg color='black' path="ic-fb" width={18} height={18} />
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <ReactSvg color="black" path="ic-insta" width={18} height={18} />
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <ReactSvg color="black" path="ic-link" width={18} height={18} />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default TeamCard