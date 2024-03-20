import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


import router from './routes_new/trainer.router.js';

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const projectPath = path.dirname(currentFilePath);

const staticPagePublic = path.join(projectPath, "public");

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

app.use(express.json());
app.use(express.static(path.join(staticPagePublic, 'public')));


app.use('/api', router); 

app.get("/home", (req, res) => {
    res.sendFile(path.join(staticPagePublic, "index.html"));
});
app.get("/home/image.jpeg",(req, res)=> {
   res.sendFile(path.join(staticPagePublic, "image.jpeg"));
});

app.listen(PORT, HOST, () => {
    console.log(`Server running on port ${PORT}`);
});
