import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navData } from './config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function App() {
    const pathname = usePathname();
    const mobileNav = navData.reduce((acc: any, item, idx) => {
        // remove contact object
        if (item.path !== '/contact') {
            acc.push(item);
            if (idx === navData.length - 1) {
                acc.push({ id: 'cart', path: '/cart', title: 'Cart' });
            }
        }
        return acc;

    }, [])

    return (

        <footer className="p-2 py-3 block md:hidden fixed z-[99999] bottom-0 w-full bg-white border-t border-gray-400">
            <AnimatePresence mode="popLayout">
                <ul className="flex items-center justify-around">
                    {mobileNav.map((item: any, index: number) => (
                        <motion.li
                            animate
                            key={index}

                        >
                            <Link className={`pb-[2px]`} href={item.path}>{item.title}</Link>
                            {item.path === pathname && (
                                <motion.div className="border-b border-gray-900" layoutId="highlight" />
                            )}
                        </motion.li>
                    ))}
                </ul>
            </AnimatePresence>
        </footer>

    );
}
