import { Typography } from '@components/typography'
import React from 'react'

function AppHeading({ ...props }) {
    const { title, heading } = props
    return (
        <div className='flex flex-col gap-3 md:gap-6'>
            <div className="flex gap-4 items-center">
                <div className='w-5 h-10 bg-red-500 rounded' />
                <Typography className='text-red-500 font-medium'>
                    {title}
                </Typography>
            </div>
            {heading && (
                <Typography component='h3' variant='h1' className='font-semibold'>
                    {heading}
                </Typography>
            )
            }


        </div>
    )
}

export default AppHeading