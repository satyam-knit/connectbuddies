import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import connection from "./Database/database.js";

import route from "./routes/route.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", route);

connection();

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running successfully on port ${PORT}`)); 