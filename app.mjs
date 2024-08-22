import express from "express";
import chalk from "chalk";
import debug from "debug";
import morgan from "morgan";
import path, { dirname } from "path";
import { fileURLToPath } from "url"

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/Pubilc/")));

app.get("/", (req, res) => {
  res.send("Hello Game5555");
});

app.listen(port, () => {
  debug("Listening on port " + chalk.green(port));
});
