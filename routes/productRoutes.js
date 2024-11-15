// routes/productRoutes.js
import express from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getProducts)           // Obtener productos (público)
  .post(protect, createProduct); // Crear producto (solo artista)

router.route('/:id')
  .put(protect, updateProduct)   // Actualizar producto (solo artista)
  .delete(protect, deleteProduct); // Eliminar producto (solo artista)

export default router;
