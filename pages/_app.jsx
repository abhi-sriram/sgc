import '../styles/globals.css'
import { RecoilRoot } from 'recoil'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [resultApi, setResultApi] = useState()
  useEffect(() => {
    window.OneSignal = window.OneSignal || []
    OneSignal.push(function () {
      OneSignal.init({
        appId: 'c186fbd4-a156-49fc-ac65-201fcce63f7b',
        notifyButton: {
          enable: true,
        },

        allowLocalhostAsSecureOrigin: true,
      })
    })
    return () => {
      window.OneSignal = undefined
    }
  }, [])
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
