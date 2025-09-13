const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

// Маршрут для tonconnect-manifest.json
app.get('/tonconnect-manifest.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({
    "url": "https://ton-mini-app-backend.onrender.com",
    "name": "TON Mystery Cases", 
    "iconUrl": "https://ton.org/icon.png",
    "termsOfUseUrl": "https://ton-mini-app-backend.onrender.com/terms",
    "privacyPolicyUrl": "https://ton-mini-app-backend.onrender.com/privacy"
  });
});

// Основные маршруты API
app.get('/', (req, res) => {
  res.json({ status: 'OK', message: 'TON Mini App Backend is working!' });
});

app.post('/api/user', (req, res) => {
  console.log('User data:', req.body);
  res.json({ success: true, balance: 5 });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
