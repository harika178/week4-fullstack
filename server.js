    const express = require('express');
    const cors = require('cors'); // important for frontend connection
    const app = express();
    const PORT = 3000;

    app.use(cors()); // allows frontend to connect
    app.use(express.json());

    app.get('/health', (req, res) => {
      res.send('Server is OK!');
    });

    app.get('/users', (req, res) => {
      res.json([{id: 1, name: 'Test User'}]);
    });

    app.listen(PORT, () => {
      console.log(`SUCCESS! Server running on http://localhost:${PORT}`);
    });