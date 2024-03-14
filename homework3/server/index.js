import express from "express";
import cors from "cors";
import { router as trainersRouter } from "./routes/trainers.routes.js";
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const projectPath = path.dirname(currentFilePath);

const staticPagePublic = path.join(projectPath, "public");


app.use("/api", trainersRouter);
app.use("/public", express.static(staticPagePublic));

app.get("/home", (req, res) => {
    res.sendFile(path.join(staticPagePublic, "index.html"));
});
app.get("/home/image.jpeg",(req, res)=> {
   res.sendFile(path.join(staticPagePublic, "image.jpeg"));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
