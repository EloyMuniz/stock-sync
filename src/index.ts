import express from "express";
import { AppDataSource } from "./data-source";


const app = express()
const PORT = 3030
app.use(express.json());
// app.use(userRoutes, companyRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
AppDataSource.initialize()
    .then(() => {
        console.log("Banco de dados conectado com sucesso!");
    })
    .catch((error) => console.log("Erro ao conectar no banco: ", error));