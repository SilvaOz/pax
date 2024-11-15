// controllers/biographyController.js
import Biography from '../models/Biography.js';

// Obtener la biografía del artista
export const getBiography = async (req, res) => {
  try {
    const biography = await Biography.findOne(); // Obtiene la primera biografía disponible
    res.status(200).json(biography);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar la biografía del artista
export const updateBiography = async (req, res) => {
  try {
    const biography = await Biography.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.status(200).json(biography);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
