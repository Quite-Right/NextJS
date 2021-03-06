import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First post</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>First Post</h1>
      <h2>
        Back to the <Link href="/">main page</Link>
      </h2>
      <article>
        Note: to style Link component using className, etc. use inner component
        (prefered a tag)
      </article>
    </>
  );
}
