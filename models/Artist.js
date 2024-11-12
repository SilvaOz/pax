// models/Artist.js
import mongoose from 'mongoose';

const artistSchema = new mongoose.Schema({
  name: String,
  bio: String,
  photos: [String],
  audioSamples: [String],
  videos: [String],
});

export default mongoose.model('Artist', artistSchema);
