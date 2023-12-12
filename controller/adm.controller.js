const Cliente = require("../models/Cliente")
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

const salvarCliente = (req,res) => {
}

module.exports = { adm }