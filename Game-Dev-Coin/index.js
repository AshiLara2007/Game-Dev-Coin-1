const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors()); // Allow all origins
app.use(bodyParser.json());

// Sample test route
app.get('/', (req, res) => {
    res.send('Telegram Airdrop Server is Running!');
});

// Example route for saving Telegram ID (optional)
app.post('/start', (req, res) => {
    const { telegramId } = req.body;
    console.log(`New user started: ${telegramId}`);
    res.json({ message: 'User saved (console only)' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server started on http://localhost:${PORT}`);
});
