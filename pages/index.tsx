import { Hello } from "components/Hello";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>NoteNote</title>
        <meta name="description" content="NoteNote Project by TinyKitten" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hello />
    </>
  );
}
