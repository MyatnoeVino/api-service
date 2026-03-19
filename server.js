const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const MEESKOND = process.env.TEAM_NAME || "Tundmatu tiim (Viga!)";

// Главная страница
app.get('/', (req, res) => {
    res.send(`<h1>Сервер работает!</h1><p>Meeskond: ${MEESKOND}</p>`);
});

// API-информация
app.get('/api/info', (req, res) => {
    res.status(200).json({ 
        missioon: "Iseseisev deploimine edukas",
        meeskond: MEESKOND,
        aeg: new Date().toISOString()
    });
});

// Запуск сервера только один раз
app.listen(PORT, '0.0.0.0', () => {
    console.log(`API Server töötab selle pordi peale: ${PORT}`);
});
