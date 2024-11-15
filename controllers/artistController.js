// controllers/artistController.js
import Artist from '../models/Artist.js';

export const getArtistInfo = async (req, res) => {
  try {
    const artist = await Artist.findOne();
    res.json(artist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createArtist = async (req, res) => {
    const { name, bio, photos, audioSamples, videos } = req.body;
    try {
      const newArtist = new Artist({ name, bio, photos, audioSamples, videos });
      const savedArtist = await newArtist.save();
      res.status(201).json(savedArtist);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export const updateArtistInfo = async (req, res) => {
  try {
    const artist = await Artist.findOneAndUpdate({}, req.body, { new: true });
    res.json(artist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
