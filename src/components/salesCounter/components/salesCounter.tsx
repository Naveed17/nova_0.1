'use client'
import { Typography } from '@components/typography'
import { useCountdown } from '@hooks/useCountdown';
import React from 'react'

function SalesCounter() {
    const { days, hours, minutes, seconds } = useCountdown(new Date('2024-10-30T00:00:00Z'));
    return (
        <div className="flex items-center gap-6 md:self-end text-4xl text-red-400">
            <div className="flex flex-col gap-1">
                <Typography className='text-xs font-medium text-slate-800'>
                    Days
                </Typography>
                <Typography component='h5' className='text-3xl font-black text-slate-800 font-mulish'>
                    {days < 10 ? `0${days}` : days}
                </Typography>

            </div> :
            <div className="flex flex-col gap-1">
                <Typography className='text-xs font-medium text-slate-800'>
                    Hours
                </Typography>
                <Typography component='h5' className='text-3xl font-black text-slate-800 font-mulish'>
                    {hours < 10 ? `0${hours}` : hours}
                </Typography>

            </div> :
            <div className="flex flex-col gap-1">
                <Typography className='text-xs font-medium text-slate-800'>
                    Minutes
                </Typography>
                <Typography component='h5' className='text-3xl font-black text-slate-800 font-mulish'>
                    {minutes < 10 ? `0${minutes}` : minutes}
                </Typography>

            </div> :
            <div className="flex flex-col gap-1">
                <Typography className='text-xs font-medium text-slate-800 '>
                    Seconds
                </Typography>
                <div className='text-3xl font-black text-slate-800 font-mulish'>
                    {seconds < 10 ? `0${seconds}` : seconds}
                </div>
            </div>
        </div>
    )
}

export default SalesCounter