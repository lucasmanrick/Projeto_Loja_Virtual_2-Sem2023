const Produto = require('../models/Produto')

const Adm = require('../models/Adm');
const crud = require("../models/crud");
const filePath = './data/logado.JSON';



const adm = (req, res) => {
   const existClient = crud.read(filePath)
   if(existClient) {
      res.render('adm',{dataClient:existClient})
   }else {
      res.render('adm')
   }
}

const atualizarDadosCliente = (req,res) =>
{
    const existClient = crud.read(filePath)
    if(existClient) {
      
    }
}

const criarProduto = (req,res) => {
   const existClient = crud.read(filePath)
   if(existClient.permissao) {
      crud.read('./data/produtos.JSON')
      const {nome,preco,estoque,imagemProduto,Alcoolico} = req.body
      const newProduct = new Produto (nome,preco,estoque,imagemProduto,Alcoolico)
      newProduct.id = crud.verificaId()
      crud.create(newProduct,'./data/produtos.JSON')
      res.render('adm',{confirm:'concluido modificações'})
   }
}


module.exports = { adm }