'use client'
import { Typography } from '@components/typography'
import { ReactSvg } from '@lib/reactSvg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useMemo, useState } from 'react'
import { Rating } from 'react-simple-star-rating'
function ProductCard({ ...props }) {
    const { item, isLoading, isWishlist } = props
    const offPercent = Math.ceil((((item?.price + 20) - item?.price) / (item?.price + 20)) * 100);
    const router = useRouter()
    return (
        <div className='flex flex-col relative'
            onClick={() => {
                router.push(`/products/${item?.id}`)
            }
            }
        >
            <div className="bg-gray-200 p-6 min-h-[250px] rounded relative z-10 product-card-media overflow-hidden">
                <div className='w-[200px] h-[200px] relative m-auto'>
                    <Image
                        src={item?.image}
                        alt='product'
                        fill
                        style={{ objectFit: "contain" }}
                        sizes="100vw"
                        quality={75}
                        blurDataURL={item?.image}
                        placeholder="blur"
                        className='mix-blend-multiply'
                        loading="lazy"
                    />
                </div>
                <div className="bg-black add-cart p-2 flex justify-center items-center gap-2 absolute bottom-[-20%] transition-all duration-300 w-full left-0 rounded-bl-lg rounded-br-lg cursor-pointer">
                    <ReactSvg path="ic-cart-white" />
                    <Typography className='text-white text-center'>
                        Add To Cart
                    </Typography>
                </div>
            </div>
            <div className="mt-2 flex flex-col gap-[0.15rem]">
                {isLoading ?
                    <div className="animate-pulse">
                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    </div>
                    :
                    <Typography className='font-medium'>
                        {item?.title.length > 23
                            ? item?.title.slice(0, 23) + '...'
                            : item?.title}
                    </Typography>
                }
                <div className="flex items-center gap-4">
                    <Typography className='font-medium text-red-500'>
                        $ {item?.price}
                    </Typography>
                    <Typography className='text-gray-500 line-through'>
                        $ {parseFloat((item?.price + 20).toFixed(2))}
                    </Typography>
                </div>
                {!isWishlist &&
                    <div className="flex items-center gap-4">
                        <Rating fillColor='#FFAD33' readonly size={16} initialValue={item?.rating?.rate} allowFraction={true} />
                        <Typography className='text-gray-500 text-sm font-medium'>
                            ({item?.rating?.count})
                        </Typography>
                    </div>}

            </div>
            <div className="flex w-full items-start justify-between absolute top-0 p-3 z-50">
                <div className='bg-red-500 text-white rounded text-xs p-1 px-2'>{offPercent} %</div>
                <div className="flex flex-col gap-2">
                    {!isWishlist ? (<>
                        {router.pathname !== '/wishlist' && (
                            <button className='bg-white p-[5px] rounded-full'>
                                <ReactSvg path="ic-fav" width={15} height={15} />
                            </button>
                        )}

                        <button className='bg-white p-[5px] rounded-full'>
                            <ReactSvg path="ic-view" width={15} height={15} />
                        </button></>) : (
                        <button className='bg-white p-[5px] rounded-full'>
                            <ReactSvg path="icon-delete" width={15} height={15} />
                        </button>
                    )}

                </div>
            </div>

        </div>
    )
}

export default ProductCard