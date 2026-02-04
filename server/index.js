const express = require('express');
const cors = require('cors');

const app = express();

// 1. This allows your React app (on port 3000) to talk to this server (on port 5000)
app.use(cors());

// 2. This is your "Dummy API" (Requirement #4)
app.get('/api/data', (req, res) => {
    res.json({
        message: "Hello from the Node.js Backend!",
        projectName: "Marma MERN Task",
        status: "Backend Connected Successfully",
        author: "Sarthak"
    });
});

// 3. Define the port and start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});