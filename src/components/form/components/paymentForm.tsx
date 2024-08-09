import { Typography } from '@components/typography';
import React from 'react'
import Input from './input';

function PaymentForm({ ...props }) {
    const { formik } = props;
    const { values } = formik;
    function formatCardNumber(value: string) {
        const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
        const matches = val.match(/\d{4,16}/g);
        const match = (matches && matches[0]) || "";
        const parts = [];
        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }

        if (parts.length) {
            return parts.join(" ");
        } else {
            return value;
        }
    }
    function formatExpires(value: string) {
        return value
            .replace(/[^0-9]/g, "")
            .replace(/^([2-9])$/g, "0$1")
            .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
            .replace(/^0{1,}/g, "0")
            .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
    }
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <Typography className='text-sm font-medium'>Card Details</Typography>
                <Input placeholder='0000 0000 0000 0000'
                    value={formatCardNumber(values.cardNumber)}
                    onChange={(e) => {
                        const val = e.target.value;
                        formik.setFieldValue("cardNumber", val);
                    }}
                />

            </div>
            <div className="flex items-center gap-4">
                <div className="flex flex-col gap-2 flex-1">
                    <Typography className='text-sm font-medium'>Expiry Date</Typography>
                    <Input placeholder='MM/YY'
                        className='w-full'
                        value={formatExpires(values.expiryDate)}
                        onChange={(e) => {
                            const val = e.target.value;
                            formik.setFieldValue("expiryDate", val);
                        }}
                    />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <Typography className='text-sm font-medium'>CVV</Typography>
                    <Input maxLength={4} placeholder='1234'
                        className='w-full'
                        value={values.cvv}
                        onChange={(e) => {
                            const val = e.target.value;
                            formik.setFieldValue("cvv", val);
                        }}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <Typography className='text-sm font-medium'>Name on Card</Typography>
                <Input placeholder='John Doe' />
            </div>
            <p className="antialiased font-sans text-sm leading-normal text-gray-700 mt-2 flex items-center justify-center gap-2 font-medium opacity-60">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="-mt-0.5 h-4 w-4">
                    <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd">
                    </path>
                </svg> Payments are secure and encrypted</p>
        </div>
    )
}

export default PaymentForm