import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({req});
    if (!session) {
        res.status(401).json('Unauthorized');
    } else {
        res.status(200).json({name: 'Blog API route'});
    }
}

