import React from 'react'
import { BrowserFingerprint } from 'browser_fingerprint'

const fingerPrinter = new BrowserFingerprint({
  cookieKey: '__browser_fingerprint',
  toSetCookie: true,
  onlyStaticElements: true,
  settings: {
    path: '/',
    expires: 3600000,
    httpOnly: null
  }
})

export const getServerSideProps = async ({ req }) => {
  const { fingerprint } = fingerPrinter.fingerprint(req)
  return { props: { fingerprint } }
}

export default ({ fingerprint }) => (
  <pre>{fingerprint}</pre>
)
