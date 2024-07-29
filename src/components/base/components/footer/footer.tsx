import { Typography } from '@components/typography'
import { ReactSvg } from '@lib/reactSvg'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className='bg-black text-white pt-8'>
      <div className="container">
        <div className="grid grid-cols-5 gap-6">
          <div className="flex flex-col gap-3">
            <Typography variant='h2' component='h2' className='text-white'>
              Nova
            </Typography>
            <Typography variant='h3' className='text-white font-medium'>
              Subscribe
            </Typography>
            <div className="flex flex-col gap-2">
              <Typography className='text-white text-sm'>Get 10% off your first order</Typography>
              <div className='border border-white px-3 py-2 rounded flex gap-1'>
                <input type="email" className='bg-transparent outline-none text-sm w-full' placeholder='Enter your email' />
                <button className='bg-transparent'>
                  <ReactSvg path="ic-send" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Typography variant='h3' className='text-white font-medium'>
              Support
            </Typography>
            <Typography className='text-sm text-white'>
              xyz, city, street # Country.
            </Typography>
            <Typography className='text-sm text-white' component='a' href="mailto:nova@gmail.com">
              nova@gmail.com
            </Typography>
            <Typography className='text-sm text-white' component='a' href="tel:+123456789">
              +123 456 789
            </Typography>
          </div>
          <div className="flex flex-col gap-3">
            <Typography variant='h3' className='text-white font-medium'>
              Account
            </Typography>
            <ul className='flex flex-col gap-2'>
              <li>
                <Link href='/' className='text-white text-sm'>
                  My Account
                </Link>
              </li>
              <li>
                <Link href='/' className='text-white text-sm'>
                  Login / Register
                </Link>
              </li>
              <li>
                <Link href='/' className='text-white text-sm'>
                  Cart
                </Link>
              </li>
              <li>
                <Link href='/' className='text-white text-sm'>
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href='/' className='text-white text-sm'>
                  Shop
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <Typography variant='h3' className='text-white font-medium'>
              Quick Link
            </Typography>
            <ul className='flex flex-col gap-2'>
              <li>
                <Link href='/' className='text-white text-sm'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href='/' className='text-white text-sm'>
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link href='/' className='text-white text-sm'>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href='/' className='text-white text-sm'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <Typography variant='h3' className='text-white font-medium'>
              Download App
            </Typography>
            <div className="flex flex-col gap-1">
              <Typography className='text-xs text-white font-medium'>
                Save $3 with App New User Only
              </Typography>
              <div className="flex items-center gap-1">
                <div className="relative">
                  <Image src="/static/images/qrcode.svg" alt="qrcode" width={100} height={100} className='w-16 h-16' />
                </div>
                <div className="flex flex-col gap-1">
                  <Link href='/'>
                    <ReactSvg path="playstore" />
                  </Link>
                  <Link href='/'>
                    <ReactSvg path="appstore" />
                  </Link>
                </div>
              </div>
            </div>
            <ul className='flex items-center gap-6'>
              <li>
                <Link href='/'>
                  <ReactSvg path="ic-fb" width={16} height={16} />
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <ReactSvg path="ic-insta" width={16} height={16} />
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <ReactSvg path="ic-link" width={16} height={16} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4 mt-16">
        <div className="container text-center text-gray-800">&copy; Copyright Nova {year}. All right reserved</div>
      </div>
    </footer>
  )
}

export default Footer