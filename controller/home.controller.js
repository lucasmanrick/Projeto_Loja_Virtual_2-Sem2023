const crud = require("../models/crud");
const filePath = './data/logado.JSON'
const productsPath = './data/produtos.JSON'

const home = (req, res) => {
    const existClient = crud.read(filePath)
    const productsReceive = crud.read (productsPath)
        if(existClient) {
           res.render('home',{dataClient:existClient,Produto:productsReceive}); 
        }else {
            res.render('home',{Produto:productsReceive})
        }
};

module.exports = {home};