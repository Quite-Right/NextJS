import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function SecondPost() {
  return (
    <>
      <Head>
        <title>Second post</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Second Post</h1>
      <h2>
        Back to the <Link href="/">main page</Link>
      </h2>
      <Image height="144" width="144" src="/images/react-image.png" alt="react" />
      <article>

      </article>
    </>
  );
}
