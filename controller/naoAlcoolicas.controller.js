const crud = require("../models/crud");
const filePath = './data/logado.JSON'

const naoAlcoolicas = (req, res) => {
   const existClient = crud.read(filePath)
   if(existClient) {
      res.render('naoAlcoolicas',{dataClient:existClient}); 
   }else {
      res.render('naoAlcoolicas'); 
   }
}

module.exports = { naoAlcoolicas }