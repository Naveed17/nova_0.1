import { useClickOutside } from "@hooks/useClickoutside";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useState } from "react";

interface ListProps extends React.HTMLAttributes<HTMLLIElement> {
    children: React.ReactNode;
}

export default function Dropdown({ children, trigger }: { children: React.ReactNode; trigger: any }) {
    const [show, setShow] = useState(false);
    const ref = React.useRef(null);
    useClickOutside(ref, () => {
        setShow(false);
    });
    return (
        <div className="w-fit relative" ref={ref} onClick={() => setShow(curr => !curr)}>
            <div>{trigger}</div>
            <AnimatePresence initial={false} mode='sync'>
                {show ? <motion.ul initial={{ height: 0 }}
                    key='dropdown'
                    animate={{ height: 'auto' || 0 }}
                    exit={{ height: 0 }} className="min-w-max absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow overflow-hidden">{children}</motion.ul> : null}
            </AnimatePresence>

        </div>
    )
}

const DropdownItem: React.FC<ListProps> = ({ children, ...props }: { children: React.ReactNode }) => {
    return (
        <li className="flex gap-3 items-center px-4 py-2 text-gray-800 hover:bg-gray-50 cursor-pointer" {...props}>{children}</li>
    )
}
export { DropdownItem }