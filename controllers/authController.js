// controllers/authController.js
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Generar token JWT
const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });

// Registrar Usuario
export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Verificar si el usuario ya existe
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    // Crear nuevo usuario y guardar en la base de datos
    const hashedPassword = await bcrypt.hash(password, 10); // Hash de la contraseña para mayor seguridad
    const user = await User.create({ username, email, password: hashedPassword });

    // Respuesta con token
    res.status(201).json({
      success: true,
      data: { _id: user._id, username: user.username, email: user.email, token: generateToken(user._id) },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Login del Usuario
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Buscar usuario por email
    const user = await User.findOne({ email });
    
    // Validar contraseña
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        success: true,
        data: { _id: user._id, username: user.username, email: user.email, token: generateToken(user._id) },
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
