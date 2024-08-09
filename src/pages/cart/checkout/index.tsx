import { AppLayout } from '@components/base'
import { Breadcrumb } from '@components/breadcrumb';
import { Typography } from '@components/typography';
import Head from 'next/head'
import Image from 'next/image';
import React from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
import { Checkbox, Input, PaymentForm, Radio } from '@components/form';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactSvg } from '@lib/reactSvg';
const breadcrumbData = [
    {
        text: 'Cart',
        href: '/cart'
    },
    {
        text: 'Checkout',
        href: null
    },

]
function Checkout() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            save_next: '',
            paymentMethod: '',
            cardNumber: '',
            expiryDate: '',
            cvv: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const { values, handleSubmit, getFieldProps } = formik;
    return (
        <div className='mt-12 mb-20'>
            <Head>
                <title>Checkout</title>

            </Head>
            <div className="container">
                <Breadcrumb data={breadcrumbData} />
                <Typography className='font-medium text-3xl my-12'>Billing Details</Typography>
                <div className="grid gird-cols-1 md:grid-cols-10 gap-8">
                    <div className="md:col-span-5">
                        <FormikProvider value={formik}>
                            <Form onSubmit={handleSubmit} autoComplete='off' className='flex flex-col gap-6'>
                                <div className='flex flex-col'>
                                    <Typography className='text-sm mb-1'>First Name <span className='text-red-500'>*</span></Typography>
                                    <Input {...getFieldProps("firstName")} inputClasses='bg-gray-200 border-gray-200 focus:ring-0' />
                                </div>
                                <div className='flex flex-col'>
                                    <Typography className='text-sm mb-1'>Last Name <span className='text-red-500'>*</span></Typography>
                                    <Input {...getFieldProps("lastName")} inputClasses='bg-gray-200 border-gray-200 focus:ring-0' />
                                </div>
                                <div className='flex flex-col'>
                                    <Typography className='text-sm mb-1'>Address <span className='text-red-500'>*</span></Typography>
                                    <Input {...getFieldProps("address")} inputClasses='bg-gray-200 border-gray-200 focus:ring-0' />
                                </div>
                                <div className='flex flex-col'>
                                    <Typography className='text-sm mb-1'>City <span className='text-red-500'>*</span></Typography>
                                    <Input {...getFieldProps("city")} inputClasses='bg-gray-200 border-gray-200 focus:ring-0' />
                                </div>
                                <div className='flex flex-col'>
                                    <Typography className='text-sm mb-1'>Phone <span className='text-red-500'>*</span></Typography>
                                    <Input {...getFieldProps("phone")} inputClasses='bg-gray-200 border-gray-200 focus:ring-0' />
                                </div>
                                <div className='flex flex-col'>
                                    <Typography className='text-sm mb-1'>Email <span className='text-red-500'>*</span></Typography>
                                    <Input {...getFieldProps("email")} inputClasses='bg-gray-200 border-gray-200 focus:ring-0' />
                                </div>
                                <div className="">
                                    <Checkbox {...getFieldProps('save_next')} label='Save this information for faster check-out next time' labelClasses="text-sm" />
                                </div>
                            </Form>
                        </FormikProvider>
                    </div>
                    <div className="md:col-span-4 md:col-start-7">
                        <ul>
                            {Array.from({ length: 3 }).map((_, i) => (
                                <li className="flex items-center gap-4 mb-6" key={i}>
                                    <Image src="/static/images/GP11_PRD3 1.png" alt="product" width={30} height={30} />
                                    <Typography className='text-sm'>
                                        H1 Gamepad
                                    </Typography>
                                    <Typography className='text-sm ml-auto'>
                                        $650
                                    </Typography>
                                </li>
                            ))}

                        </ul>
                        <div className="flex flex-col gap-4 border-t border-b py-6">
                            <div className="flex justify-between">
                                <Typography className='text-sm'>Subtotal</Typography>
                                <Typography className='text-sm'>$650</Typography>
                            </div>
                            <div className="flex justify-between">
                                <Typography className='text-sm'>Shipping</Typography>
                                <Typography className='text-sm'>$650</Typography>
                            </div>
                            <div className="flex justify-between">
                                <Typography className='text-sm'>Tax</Typography>
                                <Typography className='text-sm'>$650</Typography>
                            </div>
                        </div>
                        <div className="flex justify-between py-6">
                            <Typography className='text-sm font-medium'>Total</Typography>
                            <Typography className='text-sm'>$650</Typography>
                        </div>
                        <div className="flex flex-col gap-4 border-b py-6">
                            <Typography className='text-xl font-medium'>Payment Method</Typography>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4 justify-between">
                                    <Radio {...getFieldProps('paymentMethod')} label='Bank' defaultChecked={values.paymentMethod === "bank"} className='self-start' labelClasses="text-sm" value='bank' />
                                    <div className="flex items-center gap-2">
                                        <ReactSvg path="ic-visa" />
                                        <ReactSvg path="ic-master" />
                                    </div>
                                </div>
                                <AnimatePresence mode='wait'>
                                    {
                                        values.paymentMethod === 'bank' &&
                                        <motion.div

                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="border rounded p-4"

                                        >
                                            <PaymentForm {...{ formik }} />

                                        </motion.div>
                                    }
                                </AnimatePresence>
                                <Radio {...getFieldProps('paymentMethod')} label='Cash on Delivery' defaultChecked={values.paymentMethod === "cod"} labelClasses="text-sm" value='cod' className='self-start' />

                            </div>

                        </div>
                        <button className="bg-black text-white py-3 px-6 w-full mt-6">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
Checkout.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <AppLayout>
            {page}
        </AppLayout>
    )
}

export default Checkout
