const PORT = process.env.PORT || 3000;
const MEESKOND = process.env.TEAM_NAME || "Tundmatu tiim (Viga!)";

app.get('/', (req, res) => {
    res.send(`<h1>Сервер работает!</h1><p>Meeskond: ${MEESKOND}</p>`);
});

app.get('/api/info', (req, res) => {
    res.status(200).json({ 
        missioon: "Iseseisev deploimine edukas",
@@ -13,12 +18,7 @@ app.get('/api/info', (req, res) => {
    });
});

app.get('/', (req, res) => {
    res.send(`<h1>Server töötab!</h1><p>Meeskond: ${MEESKOND}</p>`);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`API Server töötab selle pordi peale: ${PORT}`);
});
