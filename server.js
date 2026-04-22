const express = require('express');
const PocketBase = require('pocketbase/cjs');

const app = express();

const PORT = process.env.PORT || 3000;
const PB_URL = process.env.PB_URL;

const pb = new PocketBase(PB_URL);

const MEESKOND = process.env.TEAM_NAME || "Tundmatu tiim";

app.use((req, res, next) => {
    console.log(`Külastus: ${req.ip} -> ${req.url}`);
    next();
});

// HTML таблица оценок
app.get('/', async (req, res) => {
    try {
        const grades = await pb.collection('grades').getFullList();

        let rows = grades.map(g => `
            <tr>
                <td>${g.student_name}</td>
                <td>${g.subject}</td>
                <td>${g.score}</td>
                <td>${g.status}</td>
            </tr>
        `).join('');

        res.send(`
            <html>
            <head>
                <title>Hinded</title>
                <style>
                    table { border-collapse: collapse; width: 80%; margin: 20px auto; }
                    th, td { border: 1px solid #333; padding: 8px; text-align: center; }
                    th { background: #eee; }
                </style>
            </head>
            <body>
                <h2 style="text-align:center;">Kursandi hinded (${MEESKOND})</h2>
                <table>
                    <tr>
                        <th>Nimi</th>
                        <th>Aine</th>
                        <th>Hinne</th>
                        <th>Staatus</th>
                    </tr>
                    ${rows}
                </table>
            </body>
            </html>
        `);

    } catch (err) {
        res.send(`
            <h2>⚠️ Andmebaasi viga</h2>
            <p>${err.message}</p>
        `);
    }
});

// API
app.get('/api/info', (req, res) => {
    res.json({
        meeskond: MEESKOND
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server töötab pordil: ${PORT}`);
});
