// routes/eventRoutes.js
import express from 'express';
import { getEvents, createEvent, updateEvent, deleteEvent } from '../controllers/eventController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getEvents)           // Obtener eventos (público)
  .post(protect, createEvent); // Crear evento (solo artista)

router.route('/:id')
  .put(protect, updateEvent)   // Actualizar evento (solo artista)
  .delete(protect, deleteEvent); // Eliminar evento (solo artista)

export default router;
