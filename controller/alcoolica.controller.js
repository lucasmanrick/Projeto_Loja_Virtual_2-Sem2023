const crud = require("../models/crud");
const filePath = './data/logado.JSON'
const productsPath = './data/produtos.JSON'

const alcoolica = (req, res) => {
    const existClient = crud.read(filePath);
    const productsReceive = crud.read(productsPath);
    const produtosNaoAlcoolicos = productsReceive.filter(produto => produto.Alcoolico === true);
    if (existClient) {
        res.render('alcoolica', { dataClient: existClient, Produto: produtosNaoAlcoolicos });
    } else {
        res.render('alcoolica', { Produto: productsReceive });
    }
}

module.exports = { alcoolica }