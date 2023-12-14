const crud = require("../models/crud");
const filePath = './data/logado.JSON'
const productsPath = './data/produtos.JSON'

const alcoolica = (req, res) => {
   const existClient = crud.read(filePath)
    const productsReceive = crud.read (productsPath)
        if(existClient) {
           res.render('alcoolica',{dataClient:existClient,Produto:productsReceive}); 
        }else {
            res.render('alcoolica',{Produto:productsReceive})
        }
}

module.exports = { alcoolica }