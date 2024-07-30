import { AppLayout } from '@components/base';
import dynamic from 'next/dynamic';
import React from 'react'


function Cart() {

    return (
        <>Cart</>
    )
}
Cart.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <AppLayout>
            {page}
        </AppLayout>
    )
}

export default Cart