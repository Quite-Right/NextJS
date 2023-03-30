import { comments } from "@/@/data/comments";


export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(comments);
    }
    if (req.method === 'POST') {
        const comment = req.body.comment;
        const commentObj = {
            id: Date.now().toString(),
            text: comment,
        }
        comments.push(commentObj)
        res.status(201).json(commentObj);
    }
}