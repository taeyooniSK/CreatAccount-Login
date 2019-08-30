const express = require('express');
const app = express();
// const mongoose = require('mongoose');

app.get('/', (req, res) => {
  res.send('<h1>This is Root route</h1>');
});

app.post('/signup', (req, res) => {});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
