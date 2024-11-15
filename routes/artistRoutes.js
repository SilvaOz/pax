// routes/artistRoutes.js
import express from 'express';
import { getArtistInfo, updateArtistInfo } from '../controllers/artistController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Añadimos `protect` a la ruta `GET` si la queremos protegida
router.route('/').get(protect, getArtistInfo).put(protect, updateArtistInfo);

export default router;
