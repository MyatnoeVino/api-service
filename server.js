const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const MEESKOND = process.env.TEAM_NAME || "Tundmatu tiim (Viga!)";

// Маршрут для информации о сервисе
app.get('/api/info', (req, res) => {
    res.status(200).json({ 
        missioon: "Iseseisev deploimine edukas",
        meeskond: MEESKOND,
        aeg: new Date().toISOString()
    });
});

// Главная страница, чтобы при GET / не было "Cannot GET /"
app.get('/', (req, res) => {
    res.send(`<h1>Server töötab!</h1><p>Meeskond: ${MEESKOND}</p>`);
});

// Один вызов listen для запуска сервера
app.listen(PORT, '0.0.0.0', () => {
    console.log(`API Server töötab selle pordi peale: ${PORT}`);
});
