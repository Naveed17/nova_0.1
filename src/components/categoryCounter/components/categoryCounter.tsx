'use client'
import { Typography } from '@components/typography'
import { useCountdown } from '@hooks/useCountdown';
import React from 'react'
import { UseMobile } from '@hooks/useMobile';
function SalesCounter() {
    const { days, hours, minutes, seconds } = useCountdown(new Date('2024-10-30T00:00:00Z'));
    const { isMobile } = UseMobile();
    return (
        <div className="flex items-center justify-around md:justify-start gap-4 md:gap-6">
            <div className="flex p-2 w-[52px] h-[52px] md:w-[62px] md:h-[62px] flex-col items-center justify-center bg-white rounded-full">
                <Typography component='h5' className='font-semibold leading-tight text-slate-800'>
                    {days < 10 ? `0${days}` : days}
                </Typography>
                <Typography className='text-[11px]  font-medium text-slate-800'>
                    Days
                </Typography>
            </div>
            <div className="flex p-2 w-[52px] h-[52px] md:w-[62px] md:h-[62px] flex-col items-center justify-center bg-white rounded-full">

                <Typography component='h5' className='font-semibold leading-tight text-slate-800'>
                    {hours < 10 ? `0${hours}` : hours}
                </Typography>
                <Typography className='text-[11px] font-medium text-slate-800'>
                    Hours
                </Typography>
            </div>
            <div className="flex p-2 w-[52px] h-[52px] md:w-[62px] md:h-[62px] flex-col items-center justify-center bg-white rounded-full">
                <Typography component='h5' className='font-semibold leading-tight text-slate-800'>
                    {minutes < 10 ? `0${minutes}` : minutes}
                </Typography>
                <Typography className='text-[11px] font-medium text-slate-800'>
                    {isMobile ? 'Min' : "Minutes"}
                </Typography>
            </div>
            <div className="flex p-2 w-[52px] h-[52px] md:w-[62px] md:h-[62px] items-center justify-center flex-col bg-white rounded-full">
                <Typography className='font-semibold leading-tight text-slate-800'>
                    {seconds < 10 ? `0${seconds}` : seconds}
                </Typography>
                <Typography className='text-[11px] font-medium text-slate-800'>

                    {isMobile ? 'Sec' : "Seconds"}
                </Typography>

            </div>
        </div>
    )
}

export default SalesCounter