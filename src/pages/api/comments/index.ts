import { comments } from "@/@/data/comments";
import { NextApiRequest, NextApiResponse } from "next";


export default function handler(req: NextApiRequest, res: NextApiResponse) {
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