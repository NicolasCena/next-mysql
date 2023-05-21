import '@/styles/globals.css'

import React from 'react'
import { JsxElement } from 'typescript'

export const App = ({ Component, pageProps}: {Component: () => JsxElement, pageProps: any}) => {
  return (
    <Component {...pageProps} />
  )
}
