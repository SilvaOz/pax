// models/Event.js
import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  description: { type: String },
  ticketsAvailable: { type: Number, default: 0 }
});

export default mongoose.model('Event', eventSchema);
