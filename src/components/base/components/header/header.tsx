import { Typography } from '@components/typography'
import Link from 'next/link'
import { navData } from './config'
import React from 'react'
import { MainSearch } from '@components/mainSearch'
import { ReactSvg } from '@lib/reactSvg';
import { usePathname } from 'next/navigation';
function Header() {
    const pathname = usePathname();

    return (
        <header className='flex flex-col pb-4 border-b border-gray-200 sticky top-0 bg-white z-[99999]'>
            <div className='bg-black p-[14px]'>
                <div className="container">
                    <p className='text-white text-center text-sm'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                </div>
            </div>
            <div className="main-header container flex items-center justify-between pt-8">
                <Typography href="/" variant='h2' component='a'>
                    Nova
                </Typography>
                <nav className='main-nav'>
                    <ul className='flex items-center'>
                        {
                            navData.map((item) => (
                                <li key={item.id}>
                                    <Link className={`pb-[2px] hover:border-b hover:border-black transition duration-300 ${item.path === pathname ? 'border-b border-black' : ''}`} href={item.path}>{item.title}</Link>
                                </li>
                            ))

                        }
                    </ul>
                </nav>
                <div className="action-nav flex items-center gap-4">
                    <MainSearch />
                    <Link href='/'>
                        <ReactSvg path="ic-fav" width={20} height={18} />
                    </Link>
                    <Link href='/'>
                        <ReactSvg path="ic-cart" width={28} height={28} />
                    </Link>
                </div>

            </div>
        </header>
    )
}

export default Header