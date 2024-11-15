// routes/biographyRoutes.js
import express from 'express';
import { getBiography, updateBiography } from '../controllers/biographyController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getBiography)            // Obtener la biografía (público)
  .put(protect, updateBiography); // Actualizar la biografía (solo artista)

export default router;
