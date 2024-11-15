// models/Biography.js
import mongoose from 'mongoose';

const biographySchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist', // Puedes enlazarlo a un modelo de Artista si tienes uno
  },
});

const Biography = mongoose.model('Biography', biographySchema);

export default Biography;
