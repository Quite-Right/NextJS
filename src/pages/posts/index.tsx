import Link from "next/link";

interface IPostsProps {
    posts: any[];
}

const Posts = ({posts}: IPostsProps) => {
    return <>
        <h1>Posts</h1>
        {posts.map(post => <Link href={`/posts/${post.id}`} key={post.id}>
            <div>
                {post.title}
            </div>
        </Link>)}
    </>
}

export const getStaticProps = () => fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then((posts: any[]) => ({
    props: {
        posts: posts.slice(0, 3)
    }
}))

export default Posts;
