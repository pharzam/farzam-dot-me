import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import { useRouter } from 'next/router'

import '../styles/main.css'

export default function Nextra({ Component, pageProps }) {
  const router = useRouter()
  const isHome = router.pathname === '/'

  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      {!isHome && (
        <nav style={{ margin: '1rem 0 2rem' }}>
          <a
            href="/"
            style={{
              textDecoration: 'none',
              fontSize: '0.95rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
            aria-label="Back to landing page"
          >
            <span aria-hidden="true">←</span>
            Back
          </a>
        </nav>
      )}
      <div data-route={router.pathname}>
        <Component {...pageProps} />
      </div>
    </>
  )
}
