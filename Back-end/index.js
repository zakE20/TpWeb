const express =require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

//servir les fichiers du dossier Front-end
app.use(express.static(path.join(__dirname, "../Front-end")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Front-end/index.html"));
});

const PORT = 4000;
console.log(`Server is running on http://localhost:${PORT}`);
