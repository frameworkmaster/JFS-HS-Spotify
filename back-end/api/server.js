// API significa Application Programming Interface
// POST,GET, PUT, DELETE
// CRUD - Create Read Update Delete
// Endpoint - Rota que pode ser acessado dentro de uma API
// Middleware - Uma função que é executada no meio da rota entre a escuta (listen) da API e a requisição (request)

import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artist' e '/songs'");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
