const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on 0.0.0.0:${PORT}`);
});
const MEESKOND = process.env.TEAM_NAME || "Tundmatu tiim (Viga!)";

app.get('/api/info', (req, res) => {
    res.status(200).json({ 
        missioon: "Iseseisev deploimine edukas",
        meeskond: MEESKOND,
        aeg: new Date().toISOString()
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`API Server tootab selle pordi peale: ${PORT}`);
});
