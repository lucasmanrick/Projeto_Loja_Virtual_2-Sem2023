const crud = require("../models/crud");
const filePath = './data/logado.JSON'

const home = (req, res) => {
    const existClient = crud.read(filePath)
        if(existClient) {
           res.render('home',{dataClient:existClient}); 
        }else {
            res.render('cadastro')
        }
};

module.exports = {home};