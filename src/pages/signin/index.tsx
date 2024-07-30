import { AppLayout } from '@components/base'
import { Button } from '@components/button'
import { Input } from '@components/form'
import { Typography } from '@components/typography'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SignIn() {
    return (
        <div className='flex gap-16 items-center'>
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
                        Log in to Exclusive
                    </Typography>
                    <Typography>
                        Enter your details below
                    </Typography>
                </div>
                <div className="flex flex-col gap-4 mt-8">
                    <Input type='email' placeholder='Email or Phone Number' />
                    <Input type='password' placeholder='Password' />
                    <Button>Log In</Button>
                    <Link href='/' className='text-red-500'>
                        Forget Password?
                    </Link>
                </div>
            </div>
        </div>
    )
}
SignIn.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <AppLayout>
            {page}
        </AppLayout>
    )
}

export default SignIn