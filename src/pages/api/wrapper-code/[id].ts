// pages/api/dynamic-script.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getDocument } from '@/firebase/fireStoreDB';

type BotType = {
  flow: string;
  html: string; 
  id: string;
  js: string;
  name: string;
  reports: string;
  slug: string;
  theme: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const currBot: BotType | null = await getDocument("bots", String(id));
  res.status(200).send(JSON.stringify({ bot: JSON.stringify(currBot) }));
}
