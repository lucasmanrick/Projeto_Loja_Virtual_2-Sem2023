const crud = require("../models/crud");
const filePath = './data/logado.JSON'
const productsPath = './data/produtos.JSON'

const alcoolica = (req, res) => {
    const existClient = crud.read(filePath);
    const productsReceive = crud.read(productsPath);
    const produtosAlcoolicos = productsReceive.filter(produto => produto.Alcoolico === true);
    if (existClient) {
        res.render('alcoolica', { dataClient: existClient, Produto: produtosAlcoolicos });
    } else {
        res.render('alcoolica', { Produto: produtosAlcoolicos });
    }
}

module.exports = { alcoolica }