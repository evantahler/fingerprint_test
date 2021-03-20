export default function Page({ fingerprint }) {
  return (
    <>
      <pre>{fingerprint}</pre>
      <br />
      <a href="/">home page</a>
    </>
  );
}

export { getServerSideProps } from "./index";
