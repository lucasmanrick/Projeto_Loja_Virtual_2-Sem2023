const crud = require("../models/crud");
const filePath = './data/logado.JSON'

const alcoolica = (req, res) => {
   const existClient = crud.read(filePath)
   if(existClient) {
      res.render('alcoolica',{dataClient:existClient})
   }else {
      res.render('alcoolica')
   }
}

module.exports = { alcoolica }