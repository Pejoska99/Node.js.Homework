import express from 'express';
// import cors from 'cors';
import router from './routes/trainer.router.js';

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";


// Middleware
// app.use(cors());
app.use(express.json());

// Koristite glavni router za rute
app.use('/api', router); // Sve rute će biti dostupne na /api putanji

// Pokrenite server
app.listen(PORT,HOST, () => {
    console.log(`Server running on port ${PORT}`);
});
