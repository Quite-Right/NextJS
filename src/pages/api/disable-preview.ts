import { NextApiRequest, NextApiResponse } from "next";

export default function disablePreview (req: NextApiRequest, res: NextApiResponse) {
    res.clearPreviewData();
    res.end('Preview mode disabled');
}
