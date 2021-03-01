import Link from "next/link";

export default function FirstPost() {
  return (
    <>
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
