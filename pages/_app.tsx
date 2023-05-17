import React from 'react'
import { MantineProvider } from '@mantine/core'

import { Inter } from 'next/font/google'
import { AppProps } from 'next/app'

import { DevSidebar } from 'components/DevSidebar/DevSidebar'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      /** Put your mantine theme override here */
      fontFamily: 'var(--font-inter)',
      colorScheme: 'light',
      colors: {
        secondaryGrey: ['#8A8A8A'],
      },
    }}
  >
    <main className={inter.className}>
      <DevSidebar>
        <Component {...pageProps} />
      </DevSidebar>
    </main>
  </MantineProvider>
)

export default MyApp
