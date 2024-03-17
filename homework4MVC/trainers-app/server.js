import express from 'express';

import router from './routes/trainer.router.js';

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

app.use(express.json());

app.use('/api', router); 

app.listen(PORT,HOST, () => {
    console.log(`Server running on port ${PORT}`);
});
