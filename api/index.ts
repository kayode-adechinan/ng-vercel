import { VercelRequest, VercelResponse } from '@vercel/node';

export default (req: VercelRequest, res: VercelResponse) => {
  return res.json({ message: 'Hello World' });
};

// https://blog.logrocket.com/serverless-deployments-vercel-node-js/
