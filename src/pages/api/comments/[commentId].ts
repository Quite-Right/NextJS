import { comments } from "../../../data/comments";

export default function handler(req, res) {
    const {commentId} = req.query;
    if (req.method === 'GET') {
        res.status(200).json(comments.find(
            comment => comment.id === commentId
        ));
    }
    if (req.method === 'DELETE') {
        const index = comments.findIndex(
            comment => comment.id === commentId
        );

        const deletedArr = comments.splice(index, 1);
        res.status(200).json(deletedArr[0]);
    }

    if (req.method === 'PUT') {
        const index = comments.findIndex(
            comment => comment.id === commentId
        );

       comments[index] = req.body;
       res.status(200).json(comments[index]);
    }
}