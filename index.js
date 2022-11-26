//const express = require('express');
import express from "express";

const app = express();

//app.get
//app.delete
//app.put
app.get("/Players", (req, res) => res.send("Obteniendo jugadores"));
app.post("/Players", (req, res) => res.send("Creando jugadores"));
app.put("/Players", (req, res) => res.send("Actualizando jugadores"));
app.delete("/Players", (req, res) => res.send("Eliminando jugadores"));

app.listen(3000);
console.log("server running on port 3000");
