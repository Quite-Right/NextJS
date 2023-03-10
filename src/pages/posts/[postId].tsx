import { GetStaticProps, InferGetStaticPropsType } from "next";

const Post = ({post}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return <>
        <h1>{post.title}</h1>
        <p>
            {post.body}
        </p>
    </>
}

export const getStaticProps: GetStaticProps = async (context) => {
    const postId = context.params?.postId;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await res.json();
    return {
        props: {
            post
        }
    };
}

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();
    const postIds = await data.map((post: any) => post.id) as number[];
    return ({
        paths: postIds.map(postId => ({
            params: {
                postId: postId.toString()
            }
        })),
        fallback: false
    })
}

export default Post;
