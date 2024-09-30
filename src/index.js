import express from "express";
import expressInit from "../config/express.js";
import handlebarsInit from "../config/handlebars.js";
import { routes } from "../routes.js";

const app = express();
const port = 5000;

expressInit(app);
handlebarsInit(app);
app.use(routes)

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}...`));