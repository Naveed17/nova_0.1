'use client'
import { Typography } from '@components/typography'
import { useCountdown } from '@hooks/useCountdown';
import React from 'react'

function SalesCounter() {
    const { days, hours, minutes, seconds } = useCountdown(new Date('2024-07-30T00:00:00Z'));
    return (
        <div className="flex items-center gap-6">
            <div className="flex p-2 w-[62px] h-[62px] flex-col items-center justify-center bg-white rounded-full">
                <Typography component='h5' className='font-semibold leading-tight text-slate-800'>
                    {days < 10 ? `0${days}` : days}
                </Typography>
                <Typography className='text-[11px]  font-medium text-slate-800'>
                    Days
                </Typography>
            </div>
            <div className="flex p-2 w-[62px] h-[62px] flex-col items-center justify-center bg-white rounded-full">

                <Typography component='h5' className='font-semibold leading-tight text-slate-800'>
                    {hours < 10 ? `0${hours}` : hours}
                </Typography>
                <Typography className='text-[11px] font-medium text-slate-800'>
                    Hours
                </Typography>
            </div>
            <div className="flex p-2 w-[62px] h-[62px] flex-col items-center justify-center bg-white rounded-full">
                <Typography component='h5' className='font-semibold leading-tight text-slate-800'>
                    {minutes < 10 ? `0${minutes}` : minutes}
                </Typography>
                <Typography className='text-[11px] font-medium text-slate-800'>
                    Minutes
                </Typography>
            </div>
            <div className="flex p-2 w-[62px] h-[62px] items-center justify-center flex-col bg-white rounded-full">
                <Typography className='font-semibold leading-tight text-slate-800'>
                    {seconds < 10 ? `0${seconds}` : seconds}
                </Typography>
                <Typography className='text-[11px] font-medium text-slate-800'>
                    Seconds
                </Typography>

            </div>
        </div>
    )
}

export default SalesCounter