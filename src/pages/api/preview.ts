import { NextApiRequest, NextApiResponse } from "next";

export default function preview (req: NextApiRequest, res: NextApiResponse) {
    res.setPreviewData({
        knockKnock: 'Who?'
    });
    if (req.query.redirect) {
        res.redirect(req.query.redirect as string);
    }
    // res.end('Preview mode enabled');
}
