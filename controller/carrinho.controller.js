
const  {Venda}  = require("../models/Venda");
const crud = require("../models/crud");
const filePath = './data/logado.JSON'

const carrinho = (req,res) => {
  let cartCheck = crud.read('./data/carrinho.JSON')
  const existClient = crud.read(filePath)
  if(cartCheck && existClient){
   res.render('carrinho',{dataClient:existClient,dataCart:cartCheck})
  }else{
    res.render('carrinho')
  }
}

const carrinhoAdd = (req, res) => {
   const existClient = crud.read(filePath)
   if(existClient) {
      const id = parseFloat(req.params.id)
      crud.read('./data/produtos.JSON')
      let receiveProduct = crud.procurarProduto(id)
      if(receiveProduct) { 
        crud.myData.splice(0,crud.myData.length)
        let checkCart = crud.read('./data/carrinho.JSON')
        if(checkCart) {
          console.log(crud.myData)
          const newCart = new Venda (crud.myData[0].id,crud.myData[0].data) 
          newCart.quantidade = crud.myData[0].quantidade
          newCart.items = crud.myData[0].items
          newCart.adicionarAoCarrinho(receiveProduct)
          newCart.atualizarValorTotal()
          crud.myData.splice(0,crud.myData.length)
          crud.create(newCart,'./data/carrinho.JSON')
          res.render("carrinho",{dataClient:existClient,dataCart:newCart})
        }else{
          const newCart = new Venda (1,new Date ())
          newCart.adicionarAoCarrinho(receiveProduct)
          newCart.atualizarValorTotal()
          crud.create(newCart,'./data/carrinho.JSON')
          res.render("carrinho",{dataClient:existClient,dataCart:newCart})
        }
      }else {
        throw new Error('produto não disponivel para vendas')
      }
   }else {
      res.render('cadastro')
   }
}
  module.exports = {
    carrinho,
    carrinhoAdd
  };
