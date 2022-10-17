import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Tech } from '../../typings';

const query = groq`
    *[_type == "tech"]
`

type Data = {
    techs: Tech[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const techs: Tech[] = await sanityClient.fetch(query);
    
    res.status(200).json({ techs })
}