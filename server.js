const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'OK', message: 'TON Mini App Backend is working!' });
});

app.post('/api/user', (req, res) => {
  console.log('User data:', req.body);
  res.json({ success: true, balance: 5 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
