// models/Event.js
import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: String,
  date: Date,
  location: String,
  description: String,
  ticketsAvailable: Number,
});

export default mongoose.model('Event', eventSchema);
