import express from "express";
import { config } from "dotenv";
import cors from "cors";
import router from "./routes/index.routes.js";

const app = express();
config();

app.use(express.json());
app.use(cors());
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port ${port}`));
