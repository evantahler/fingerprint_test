import React from "react";
import { BrowserFingerprint } from "browser_fingerprint";
import Cookies from "cookies";

const cookieKey = "__browser_fingerprint";

const fingerPrinter = new BrowserFingerprint({
  cookieKey,
  toSetCookie: false, // we can't modify req ourselves
  onlyStaticElements: true,
  settings: {
    path: "/",
    expires: 3600000,
    httpOnly: null,
  },
});

export const getServerSideProps = async ({ req, res }) => {
  const { fingerprint } = fingerPrinter.fingerprint(req);
  console.log({ fingerprint });

  const cookies = new Cookies(req, res);
  cookies.set(cookieKey, fingerprint);

  return { props: { fingerprint } };
};

export default function Page({ fingerprint }) {
  return (
    <>
      <pre>{fingerprint}</pre>
      <br />
      <a href="/other-page">other page</a>
    </>
  );
}
