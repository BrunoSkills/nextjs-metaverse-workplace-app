import Script from 'next/script'

import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Script
                src='https://www.googletagmanager.com/gtag/js?id=UA-47208480-12'
                onLoad={() => {
                    window.dataLayer = window.dataLayer || []
                    function gtag() {
                        dataLayer.push(arguments)
                    }
                    gtag('js', new Date())
                    gtag('config', 'UA-47208480-12', {
                        page_path: window.location.pathname,
                    })
                }}
            />
        </>
    )
}
