import { IComment } from "@/data/comments";
import { useState } from "react";

export default function CommentsPage() {
    const [comments, setComments] = useState<IComment[]>([]);
    const [comment, setComment] = useState('');

    const fetchComments = async () => {
        const res = await fetch('/api/comments')
        const data: IComment[] = await res.json();
        setComments(data);
    }
    
    const submitComment = async () => {
        const res = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                comment: comment
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        console.log({data});
        fetchComments();
    }

    const deleteComment = async (id: string) => {
        const res = await fetch(`/api/comments/${id}`, {
            method: 'DELETE',
        });
        const data = await res.json();
        console.log({data});
        fetchComments();
    }

    const updateComment = async (id: string) => {
        const res = await fetch(`/api/comments/${id}`, {
            method: 'PUT',
            body: JSON.stringify(comments.find(comment => comment.id === id)),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        console.log({data});
        fetchComments();
    }

    return <>
        <div>
            <input type="text" value={comment} onChange={e => setComment(e.target.value)}/>
        </div>
        <button onClick={submitComment}>
            Submit comment
        </button>
        <button onClick={fetchComments}>
            LoadComments
        </button>
        {comments.map((comment) => <div key={comment.id}>
            <span>{comment.id}:</span>
            <input type="text" value={comment.text} onChange={e => {
                const commentsCopy = [...comments];
                const index = commentsCopy.findIndex(commentC => commentC.id === comment.id);
                commentsCopy[index] = {
                    ...commentsCopy[index],
                    text: e.target.value
                }
                setComments(commentsCopy)
            }}/>
            <button onClick={() => updateComment(comment.id)}>
                update
            </button>
            <button onClick={() => deleteComment(comment.id)}>delete</button>
        </div>)}
    </>
}