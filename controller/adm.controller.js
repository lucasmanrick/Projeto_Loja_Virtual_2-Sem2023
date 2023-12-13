const Cliente = require("../models/Cliente")
const Adm = require('../models/Adm');
const crud = require("../models/crud");
const filePath = './data/clientes.JSON';
const secondFilePath = './data/adm.JSON';

const adm = (req, res) => {
    res.render('adm')
}

const atualizarCliente = (req,res) =>
{
    
}


module.exports = { adm }