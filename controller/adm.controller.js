const Cliente = require("../models/Cliente")

const Adm = require('../models/Adm');
const crud = require("../models/crud");
const filePath = './data/clientes.JSON';
const secondFilePath = './data/adm.JSON';
const crud = require("../models/crud");
const filePath = './data/logado.JSON'

const adm = (req, res) => {
   const existClient = crud.read(filePath)
   if(existClient) {
      res.render('adm',{dataClient:existClient})
   }else {
      res.render('adm')
   }
}

const atualizarCliente = (req,res) =>
{
    
}


module.exports = { adm }