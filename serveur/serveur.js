const express = require('express');
const app = express();
const path = require("path");

// Serve les fichiers statiques (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '../app')));

// Redirection vers index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../app', 'index.html'));
});

// Écouter sur le port 6500
const PORT = 6500;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

// faire marcher le serveur -> node serveur/serveur.js