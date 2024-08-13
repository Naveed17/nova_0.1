import { AppLayout } from '@components/base'
import { Breadcrumb } from '@components/breadcrumb'
import { Button } from '@components/button'
import { Input } from '@components/form'
import { Typography } from '@components/typography'
import { Form, FormikProvider, useFormik } from 'formik'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
const breadcrumbData = [
    {
        text: 'Account',
        href: null
    },
]
const menu = [
    {
        title: 'Manage My Account',
        list: [
            {
                text: 'My Profile',
                value: 'my_profile'
            },
            {
                text: 'Address Book',
                value: 'address_book'
            },
            {
                text: 'My Payment Options',
                value: 'my_payment_opt'
            }
        ]
    },
    {
        title: 'My Orders',
        list: [
            {
                text: 'My Returns',
                value: 'my_returns'
            },
            {
                text: 'My Cancellations',
                value: 'my_cancellations'
            }
        ]
    }
]
function Account() {
    const router = useRouter();
    const query = router.query;
    const { panel } = query as { panel: string };
    const handlePanel = (value: string) => {
        router.push(`/account?panel=${value}`)
    }
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: "",
        password: '',
        confirmPassword: ''
    }
    const onSubmit = (values: any) => {
        console.log(values)
    }
    const formik = useFormik({
        enableReinitialize: true,
        initialValues,
        onSubmit
    })
    const { values, handleSubmit, getFieldProps } = formik
    return (
        <div className='container mt-12 mb-32'>
            <div className="flex items-center justify-between">
                <Breadcrumb data={breadcrumbData} />
                <Typography className='text-sm'>
                    Welcome! <span className='font-medium text-red-500'>John Doe</span>
                </Typography>

            </div>
            <div className="grid grid-cols-10 gap-8 mt-16">
                <div className="col-span-3">
                    <div className="flex flex-col gap-5">
                        {
                            menu.map((item, index) => (
                                <React.Fragment key={index}>
                                    <Typography className='font-medium text-base'>{item.title}</Typography>
                                    <ul className="flex flex-col gap-3 pl-8">
                                        {
                                            item.list.map((list, index) => (
                                                <li key={index} onClick={() => handlePanel(list.value)} className={`${panel === list.value ? 'text-red-500' : 'text-gray-400'} text-sm select-none cursor-pointer`}>{list.text}</li>
                                            ))
                                        }
                                    </ul>
                                </React.Fragment>
                            ))
                        }

                    </div>
                </div>
                <div className="col-span-7 shadow rounded-md py-8 px-12">
                    <FormikProvider value={formik}>
                        <Form
                            onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-6">
                                <Typography className='font-medium text-lg'>My Profile</Typography>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-gray-200 rounded-full font-bold flex items-center justify-center text-xl">JD</div>
                                        <div className="flex flex-col gap-1">
                                            <Typography className='text-sm'>John Doe</Typography>
                                            <Typography className='text-sm text-gray-400'>John@email.com</Typography>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex flex-col gap-2 w-full">
                                                <Typography className='text-sm font-medium'>First Name</Typography>
                                                <Input placeholder='Enter your first name' {...getFieldProps("firstName")} />
                                            </div>
                                            <div className="flex flex-col gap-2 w-full">
                                                <Typography className='text-sm font-medium'>Last Name</Typography>
                                                <Input placeholder='Enter your last name' {...getFieldProps("lastName")} />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex flex-col gap-2 w-full">
                                                <Typography className='text-sm font-medium'>Email</Typography>
                                                <Input placeholder='Enter your email' {...getFieldProps("email")} />
                                            </div>
                                            <div className="flex flex-col gap-2 w-full">
                                                <Typography className='text-sm font-medium'>Phone Number</Typography>
                                                <Input placeholder='Enter your phone number' />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2 w-full">
                                            <Typography className='text-sm font-medium'>Password</Typography>
                                            <Input type='password' placeholder='Enter your password' {...getFieldProps("password")} />
                                        </div>
                                        <div className="flex flex-col gap-2 w-full">
                                            <Typography className='text-sm font-medium'>Confirm Password</Typography>
                                            <Input type='password' placeholder='Enter your confirm password' {...getFieldProps("confirmPassword")} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end">
                                    <div className="flex">
                                        <button className='px-4 py-2 text-sm font-medium rounded-md'>Cancel</button>
                                        <Button type='submit' className='text-sm'>Save Changes</Button>
                                    </div>
                                </div>
                            </div>

                        </Form>
                    </FormikProvider>
                </div>
            </div>

        </div>
    )
}
Account.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <AppLayout>
            {page}
        </AppLayout>
    )
}

export default Account
