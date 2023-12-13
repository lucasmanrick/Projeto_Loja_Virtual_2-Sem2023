const crud = require("../models/crud");
const filePath = './data/logado.JSON'

const naoAlcoolicas = (req, res) => {
   const existClient = crud.read(filePath)
   //  const productsReceive = crud.read (productsPath)
        if(existClient) {
           res.render('naoAlcoolicas',{dataClient:existClient,Produto:productsReceive}); 
        }else {
            res.render('naoAlcoolicas',{Produto:productsReceive})
        }
}

module.exports = { naoAlcoolicas }