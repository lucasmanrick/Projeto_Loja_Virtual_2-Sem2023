const crud = require("../models/crud");
const filePath = './data/logado.JSON'

const carrinho = (req, res) => {
   const existClient = crud.read(filePath)
   if(existClient) {
      res.render('carrinho',{dataClient:existClient})
   }else {
      res.render('carrinho')
   }

}

module.exports = { carrinho }