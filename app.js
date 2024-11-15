// app.js
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import artistRoutes from './routes/artistRoutes.js';
import productRoutes from './routes/productRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import authRoutes from './routes/authRoutes.js';
import biographyRoutes from './routes/biographyRoutes.js';

import dotenv from 'dotenv';

dotenv.config();


const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());
// app.js
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});


// Conectar a la base de datos
connectDB();

const PORT = process.env.PORT || 5000;

// Definir las rutas
app.use('/api/auth', authRoutes);

app.use('/api/biography', biographyRoutes);

app.use('/api/artists', artistRoutes);
app.use('/api/products', productRoutes);
app.use('/api/events', eventRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
