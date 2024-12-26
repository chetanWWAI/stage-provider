import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
// import { getDocument } from '@/firebase/fireStoreDB';
import JavaScriptObfuscator from "javascript-obfuscator"; 

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
  // Get dynamic data from query parameters (or any source)
  const { id } = req.query;

  // console.log("id: ", id);

  // const currBot: BotType | null = await getDocument("bots", String(id));

  // const jsonBotCode = JSON.stringify(currBot?.html);

  // Resolve the path to the template JavaScript file
  const filePath = path.join(process.cwd(), 'src', 'utils', 'template.js');

  // Read the file from the filesystem
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to load the file' });
      return;
    }

    // Replace the placeholder with the actual username
    // const modifiedScript = data.replace(/{{botCode}}/g, String(id ?? ""));

    const obfuscationResult = JavaScriptObfuscator.obfuscate(data,
      {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 1,
        debugProtection: true,
        debugProtectionInterval: 1,
        disableConsoleOutput: true,
        log: false,
        mangle: false,
        renameGlobals: false,
        rotateStringArray: true,
        selfDefending: true,
        stringArray: true,
        stringArrayEncoding: ['rc4'],
        stringArrayThreshold: 1,
        unicodeEscapeSequence: false,
        domainLock: [],
      }
    );

    // Set the Content-Type to JavaScript
    res.setHeader('Content-Type', 'application/javascript');

    // Send the modified JavaScript content as the response
    res.status(200).send(obfuscationResult.getObfuscatedCode());
  });
}
