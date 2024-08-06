import { AppLayout } from '@components/base'
import { Breadcrumb } from '@components/breadcrumb'
import { Button } from '@components/button'
import { Input } from '@components/form'
import { Typography } from '@components/typography'
import { ReactSvg } from '@lib/reactSvg'
import Link from 'next/link'
import React from 'react'
const breadcrumbData = [

    {
        text: 'Contact',
        href: null
    }
]
function Contact() {
    return (
        <div className='container mt-12 mb-12'>
            <Breadcrumb data={breadcrumbData} />
            <div className="grid gap-8 grid-cols-1 md:grid-cols-10 mt-12">
                <div className="md:col-span-3">
                    <div className="shadow-lg px-6 py-8 rounded">
                        <div className="flex items-center gap-8">
                            <div className="bg-red-500 rounded-full p-2 min-h-10 min-w-10 flex items-center justify-center">
                                <ReactSvg path="ic-phone" />
                            </div>
                            <Typography className='font-medium'>
                                Call To Us
                            </Typography>
                        </div>
                        <div className="mt-8 flex flex-col gap-4">
                            <Typography className='text-sm'>
                                We are available 24/7, 7 days a week.
                            </Typography>
                            <Typography className='text-sm'>
                                Phone: +880 123 456 789
                            </Typography>
                        </div>
                        <hr className='my-12' />
                        <div className="flex items-center gap-8">
                            <div className="bg-red-500 rounded-full p-2 min-h-10 min-w-10 flex items-center justify-center">
                                <ReactSvg path="ic-mail" />
                            </div>
                            <Typography className='font-medium'>
                                Write To US
                            </Typography>
                        </div>
                        <div className="mt-8 flex flex-col gap-4">
                            <Typography className='text-sm'>
                                Fill out our form and we will contact you within 24 hours.
                            </Typography>
                            <div className="flex items-center gap-1">
                                <Typography className='text-sm'>
                                    Emails:
                                </Typography>
                                <a href='mailto:customer@nova.com' className='text-sm'>
                                    customer@nova.com
                                </a>
                            </div>
                            <div className="flex items-center gap-1">
                                <Typography className='text-sm'>
                                    Emails:
                                </Typography>
                                <a href='mailto:support@nova.com' className='text-sm'>
                                    support@nova.com
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="md:col-span-7">
                    <div className="shadow-lg px-6 py-8 rounded">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col md:flex-row gap-8 md:items-center">
                                <div className="flex flex-col gap-2 flex-1">
                                    <Typography className='font-medium text-sm'>
                                        Your Name <span className='text-red-500'>*</span>
                                    </Typography>
                                    <Input placeholder='Name' className='text-sm' />
                                </div>
                                <div className="flex flex-col gap-2 flex-1">
                                    <Typography className='font-medium text-sm'>
                                        Your Email <span className='text-red-500'>*</span>
                                    </Typography>
                                    <Input placeholder='Email' type='email' className='text-sm' />
                                </div>
                                <div className="flex flex-col gap-2 flex-1">
                                    <Typography className='font-medium text-sm'>
                                        Your Phone <span className='text-red-500'>*</span>
                                    </Typography>
                                    <Input placeholder='Phone' className='text-sm' />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                <Typography className='font-medium text-sm'>
                                    Your Massage
                                </Typography>
                                <textarea rows={6} placeholder='Message' className='text-sm p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500' />
                                <Button className='md:self-end mt-3'>
                                    Send Massage
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Contact.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <AppLayout>
            {page}
        </AppLayout>
    )
}

export default Contact