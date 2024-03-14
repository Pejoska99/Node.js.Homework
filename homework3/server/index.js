import express from "express";
import cors from "cors";
import { router as trainersRouter } from "./routes/trainers.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", trainersRouter);

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
