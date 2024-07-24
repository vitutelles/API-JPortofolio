import express from "express"
import dotenv from 'dotenv';
import connectDatabase from "./src/database/database.js";
import userRoute from "./src/routes/user.route.js";


dotenv.config();



const app = express();
const port = 3000;

connectDatabase()
app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log(`Servidor Rodando na porta ${port}`));