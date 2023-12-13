const { Venda } = require("../models/Venda");
const crud = require("../models/crud");
const filePath = './data/logado.JSON'

const carrinho = (req, res) => {
   const existClient = crud.read(filePath)
   if(existClient) {
      crud.read('./data/carrinho.JSON')
      const newCart = new Venda (req.body)
      res.render('carrinho',{dataClient:existClient})
   }else {
      res.render('cadastro')
   }
}

module.exports = { carrinho }