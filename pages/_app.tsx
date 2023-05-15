import React from 'react'
import { MantineProvider } from '@mantine/core'

const MyApp = ({ Component, pageProps }) => (
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      /** Put your mantine theme override here */
      colorScheme: 'light',
    }}
  >
    <Component {...pageProps} />
  </MantineProvider>
)

export default MyApp
