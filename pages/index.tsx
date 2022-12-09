import dynamic from "next/dynamic";
import Head from "next/head";

const Editor = dynamic(import("components/Editor"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>NoteNote</title>
        <meta name="description" content="NoteNote Project by TinyKitten" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Editor />
    </>
  );
}
