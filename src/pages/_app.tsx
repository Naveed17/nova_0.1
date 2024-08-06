import { NextPage } from 'next';
import { AppProps } from 'next/app';
import React, { ReactElement, ReactNode, useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@styles/globals.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { LoadingScreen } from '@components/loadingScreen';
const FireLoader = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (/complete|interactive|loaded/.test(document.readyState)) {
            setLoading(false)
        } else {
            document.addEventListener('DOMContentLoaded', () => setLoading(false), false);
        }
    }, [])

    return !loading ? children : <LoadingScreen />
}
interface MyAppProps extends AppProps {
    Component: AppProps["Component"] & NextPageWithLayout;
}

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

function App({ Component, pageProps: { ...pageProps } }: MyAppProps) {

    const router = useRouter();
    const getLayout = Component.getLayout || ((page) => page);
    const pageKey = router.asPath;
    const queryClient = new QueryClient();
    return (

        <QueryClientProvider client={queryClient}>
            <FireLoader>
                {getLayout(<Component key={pageKey} {...pageProps} />)}
            </FireLoader>
        </QueryClientProvider>
    )
}
App.displayName = "Nova";

export default App