import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

const Post = ({post}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter();
    if (router.isFallback) return <h1>Loading...</h1>
    return <>
        <h1>{post.title}</h1>
        <p>
            {post.body}
        </p>
    </>
}

export const getStaticProps: GetStaticProps = async (context) => {
    const postId = context.params?.postId;
    console.log(`Generating static for post #${postId}`);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await res.json();
    if (!post.id) return {
        notFound: true
    }
    return {
        props: {
            post
        }
    };
}

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();
    const postIds = await data.slice(0, 3).map((post: any) => post.id) as number[];
    return ({
        paths: postIds.map(postId => ({
            params: {
                postId: postId.toString()
            }
        })),
        fallback: true
    })
}

export default Post;
