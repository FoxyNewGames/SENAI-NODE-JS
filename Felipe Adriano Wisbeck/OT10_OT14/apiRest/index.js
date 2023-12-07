import express from "express";
import colecaoUf from "./Dados.js";

const app = express();

app.get("/ufs", (req, res) => {
    res.json(colecaoUf)
});

app.get("/ufs/:iduf", (req, res) => {
    const idUF = parseInt(req.params.iduf);
    let mensagemErro = "";
    let uf;


    if (!(isNaN(idUF))) {
        uf = colecaoUf.find(u => u.id === idUF);
        if (!uf) {
            mensagemErro = "UF nao Encontrado";
        }
    } else {
        mensagemErro = "Requisao Invalida";
    }

    if (uf) {
        res.json(uf);
    } else {
        res.status(404).send({ "erro": mensagemErro });
    }
});
app.listen(8080, () => {
    console.log("Servidor Iniciando na Porta 8080")
});