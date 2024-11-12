// app.js
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import artistRoutes from './routes/artistRoutes.js';
import productRoutes from './routes/productRoutes.js';
import eventRoutes from './routes/eventRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a la base de datos
connectDB();

const PORT = process.env.PORT || 5000;

// Definir las rutas
app.use('/api/artists', artistRoutes);
app.use('/api/products', productRoutes);
app.use('/api/events', eventRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
