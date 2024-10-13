import express from "express";
import next from "next";
import path from "path";
import { fileURLToPath } from "url";

const app = next({dev: false});
const handle = app.getRequestHandler();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.prepare().then(() => {
  const server = express();

  server.use(express.static(path.join(__dirname, '.next')));
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT || 8000, function () {
    console.log(`Server is running at port: 8000`);
  });
});