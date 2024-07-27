import { NextPage } from 'next';
import { AppProps } from 'next/app';
import React, { ReactElement, ReactNode } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@styles/globals.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
interface MyAppProps extends AppProps {
    Component: AppProps["Component"] & NextPageWithLayout;
}

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

function App({ Component, pageProps: { ...pageProps } }: MyAppProps) {
    const getLayout = Component.getLayout || ((page) => page);
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            {getLayout(<Component {...pageProps} />)}
        </QueryClientProvider>
    )
}

export default App