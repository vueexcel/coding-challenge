"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const path = require("path");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const fs_1 = require("fs");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const todos = express();
todos.get('/', (_, res) => {
    const data = JSON.parse((0, fs_1.readFileSync)(path.join(process.cwd(), 'data.json'), 'utf8'));
    res.json(data);
});
todos.put('/', (req, res) => {
    // TODO
});
todos.delete('/:index', (req, res) => {
    // TODO
});
app.use('/api/todos', todos);
const httpServer = http.createServer(app);
const host = '0.0.0.0';
const port = 8888;
httpServer.listen({ host, port }, () => console.log(`Listening on ${host}:${port}`));
