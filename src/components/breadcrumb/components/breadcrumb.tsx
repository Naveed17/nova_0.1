import Link from 'next/link';
import React from 'react'

function Breadcrumb({ ...props }) {
    const { data } = props
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                    <Link href="/" className="inline-flex font-medium items-center text-sm  text-gray-400 hover:text-gray-500">
                        <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        Home
                    </Link>
                </li>
                {data.map((item: { text: string; href: string | null }, idx: number, array: any[]) =>
                    (!item.href || array.length === 1) ? <li key={`breadcrumb-${idx}`} aria-current="page">
                        <div className="flex items-center text-xs">
                            /
                            <span className="ms-1 text-sm font-medium text-black md:ms-2">{item.text}</span>
                        </div>
                    </li> :
                        <li key={`breadcrumb-${idx}`}>
                            <div className="flex items-center text-xs text-gray-400">
                                / {" "}
                                <Link href={item?.href} className="ms-1 md:ms-2 inline-flex font-medium items-center text-sm  text-gray-400 hover:text-gray-500">{item.text}</Link>
                            </div>
                        </li>
                )}
            </ol>
        </nav>

    )
}

export default Breadcrumb