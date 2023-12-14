const crud = require("../models/crud");
const filePath = './data/logado.JSON';
const productsPath = './data/produtos.JSON';

const alcoolica = (req, res) => {
    const existClient = crud.read(filePath);
    const productsReceive = crud.read(productsPath);
    const produtosNaoAlcoolicos = productsReceive.filter(produto => produto.Alcoolico === true );
    if (existClient) {
        res.render('Alcoolicas', { dataClient: existClient, Produto: produtosNaoAlcoolicos });
    } else {
        res.render('Alcoolicas', { Produto: productsReceive });
    }
}



module.exports = { alcoolica };