import { NextApiRequest, NextApiResponse } from 'next';

const blogsHandler = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({ 'name': 'Kei' });
};

export default blogsHandler;
