import React from 'react'
import { MantineProvider } from '@mantine/core'

import { Inter } from 'next/font/google'
import { AppProps } from 'next/app'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      /** Put your mantine theme override here */
      fontFamily: undefined,
      colorScheme: 'light',
      colors: {
        secondaryGrey: ['#8A8A8A'],
      },
    }}
  >
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  </MantineProvider>
)

export default MyApp
