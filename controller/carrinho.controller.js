
const  Venda  = require("../models/Venda");
const crud = require("../models/crud");
const filePath = './data/logado.JSON'


const carrinho = (req, res) => {
   const existClient = crud.read(filePath)
   if(existClient) {
      
      const id = req.params.id
      crud.read('./data/produtos.JSON')
      let receiveProduct = crud.procurarProduto(id)
      let idActual = crud.verificaId()
      const newCart = new Venda (idActual,new Date(),receiveProduct.preco)
      newCart.items.push(receiveProduct)
      
      
      res.render('carrinho',{dataClient:existClient})
   }else {
      res.render('cadastro')
   }
}
  module.exports = {
    carrinho
  };
