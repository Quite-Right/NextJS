import { comments, IComment } from "@/data/comments";

export default function Comment({id, text}: IComment) {
    return <div>
        <span style={{color: 'green'}}>{id}</span>:{text}
    </div>
}

export async function getStaticPaths() {
    return {
        paths: [
            {params: {commentId: '1'}},
            {params: {commentId: '2'}},
            {params: {commentId: '3'}}
        ],
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const {params} = context;
    const {commentId} = params;
    return {
        props: comments.find(comment => comment.id === commentId)
    }
}