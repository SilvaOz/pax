// routes/artistRoutes.js
import express from 'express';

import Product from '../models/Products.js';


const router = express.Router();



router.get('/product'), async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}




export default router;
