// routes/artistRoutes.js
import express from 'express';

import Event from '../models/Event.js';

const router = express.Router();


router.get('/event'), async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

router.post('/event'), async (req, res) => {
  const event = new Event(req.body);
  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export default router;
