import { Typography } from '@components/typography'
import Link from 'next/link'
import { navData } from './config'
import React from 'react'
import { MainSearch } from '@components/mainSearch'
import { ReactSvg } from '@lib/reactSvg';
import { usePathname } from 'next/navigation';
import { Dropdown, DropdownItem } from '@components/dropdown'
import { useRouter } from 'next/router'
function Header() {
    const pathname = usePathname();
    const router = useRouter()
    return (
        <header className='hidden md:flex flex-col pb-4 border-b border-gray-200 sticky top-0 bg-white z-[99999]'>
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
                                    <Link className={`pb-[2px] font-mulish hover:border-b hover:border-black font-bold transition duration-300 ${item.path === pathname ? 'border-b border-black' : ''}`} href={item.path}>{item.title}</Link>
                                </li>
                            ))

                        }
                    </ul>
                </nav>
                <div className="action-nav flex items-center gap-4">
                    <MainSearch />
                    <Link href='/wishlist'>
                        <ReactSvg path="ic-fav" width={20} height={18} />
                    </Link>
                    <Link href='/cart'>
                        <ReactSvg path="ic-cart" width={28} height={28} />
                    </Link>
                    <Dropdown trigger={

                        <button className='bg-red-500 text-white p-1 rounded-full'>
                            <ReactSvg path="ic-user" width={16} height={16} />
                        </button>
                    }>

                        <DropdownItem>
                            <div className="flex items-center gap-2">
                                <ReactSvg path="ic-user" width={24} height={24} />
                                <span className='font-medium text-sm'>Jhone Doe</span>
                            </div>
                        </DropdownItem>
                        <DropdownItem>
                            <div className="flex items-center gap-2" onClick={() => router.push("/account")}>
                                <ReactSvg path="ic-setting" width={16} height={16} />
                                <span className='font-medium text-sm'>My Profile</span>
                            </div>
                        </DropdownItem>
                        <DropdownItem>
                            <div className="flex items-center gap-2">
                                <ReactSvg path="ic-logout" width={18} height={18} />
                                <span className='font-medium text-sm'>Logout</span>
                            </div>
                        </DropdownItem>
                    </Dropdown>

                </div>

            </div>
        </header>
    )
}

export default Header