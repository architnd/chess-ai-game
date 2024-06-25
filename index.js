const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/api/move', async (req, res) => {
    const { fen } = req.body;

    try {
        // Use a mock or local AI engine instead of an external API
        const response = await axios.post('http://localhost:3001/move', { fen });
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error getting AI move');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

