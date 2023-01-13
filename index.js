const express = require("express");
const axios = require("axios");
const app = express();

const port = 5000;

// Body parser
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome to a basic express App");
});

app.get(":ativo", async (req, res) => {
  const ativo = req.params.ativo;

  const BASE_URL = 'https://query2.finance.yahoo.com/v8';
  const result = await axios.get(`${BASE_URL}/finance/chart/${ativo}`);

  console.log('result', result.data);

  res.json(result.data);
});

// Mock API
app.get("/finance/chart/:ativo", async (req, res) => {
  const ativo = req.params.ativo;

  const BASE_URL = 'https://query2.finance.yahoo.com/v8';
  const result = await axios.get(`${BASE_URL}/finance/chart/${ativo}`);

  console.log('result', result.data);

  res.json(result.data);
});

// Listen on port 5000
app.listen(port, () => {
  console.log(`API DE TESTE`);
});