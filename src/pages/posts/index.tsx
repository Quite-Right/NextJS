import Link from "next/link";

interface IPostsProps {
    posts: any[];
}

const Posts = ({posts}: IPostsProps) => {
    return <>
        <Link href="/">
            <div>
                Back
            </div>
        </Link>
        <h1>Posts</h1>
        {posts.map(post => <Link href={`/posts/${post.id}`} key={post.id}>
            <div>
                {post.title}
            </div>
        </Link>)}
    </>
}

export const getStaticProps = () => fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then((posts: any[]) => {
    console.log('Generatic Posts page');
    return {
        props: {
            posts: posts.slice(0, 3)
        },
        revalidate: 10
    }
});

export default Posts;
