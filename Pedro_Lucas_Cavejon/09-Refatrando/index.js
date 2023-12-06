import express from 'express';
import { buscarUfs,buscarUfsPorId, buscarUfsPorNome } from './servicos/servicos.js';

const app = express();

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs();
    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({
            "error": "Nenhuma UF encontrada"
        });
    }
});

app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);

    if (idUF) {
        res.json(uf);
    } else if(isNaN(parseInt(req.params.iduf))) {
        res.status(400).send({"erro": "Requisição inválida"});
    } else {
        res.status(404).send({ "erro": "UF não encontrada" });
    }
});

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
})