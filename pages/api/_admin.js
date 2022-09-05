import fs from 'fs';
import path from 'path';
function handler(req, res) {
   console.log(req.body.author);
   const blogFilePath = path.join(process.cwd(), `/data/blog/${req.body.author}`);
   const data = req.body.body;
   console.log(typeof data);
   // fs.writeFileSync(blogFilePath, data);

   // res.send('Done');
}

export default handler;
