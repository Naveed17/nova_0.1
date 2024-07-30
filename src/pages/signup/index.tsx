import { AppLayout } from '@components/base'
import { Button } from '@components/button'
import { Input } from '@components/form'
import { Typography } from '@components/typography'
import { ReactSvg } from '@lib/reactSvg'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SignUp() {
    return (
        <div className='flex flex-col md:flex-row gap-16 md:items-center'>
            <div className="relative">
                <Image
                    src="/static/images/signin.svg"
                    alt='product'
                    priority
                    style={{ objectFit: "contain" }}
                    height={500}
                    width={600}
                    quality={75}
                    blurDataURL={'/static/images/signin.svg'}
                    placeholder="blur"
                    className='mix-blend-multiply'
                />
            </div>
            <div className="flex flex-col flex-6">
                <div className="flex flex-col gap-2">
                    <Typography component='h1' variant='h1'>
                        Create an account
                    </Typography>
                    <Typography>
                        Enter your details below
                    </Typography>
                </div>
                <div className="flex flex-col gap-4 mt-8">
                    <Input type='text' placeholder='Name' />
                    <Input type='email' placeholder='Email or Phone Number' />
                    <Input type='password' placeholder='Password' />
                    <Button>Create Account</Button>
                    <Button className='flex items-center justify-center gap-2 bg-white hover:bg-gray-100 focus:ring-0 text-black border border-gray-300'>
                        <ReactSvg path="ic-google" />
                        Sign Up with Google
                    </Button>
                    <div className="flex items-center gap-2">
                        Already have account?
                        <Link href='/signin' className='border-b border-gray-300'>
                            Log in
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
SignUp.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <AppLayout>
            {page}
        </AppLayout>
    )
}

export default SignUp