const Cliente = require("../models/Cliente")
const crud = require("../models/crud")
const filePath = '../data/clientes.JSON'

const cadastro = (req, res) => {
    res.render('cadastro')
}

const clientRegister =(req,res) => {
    const newClient = new Cliente (req.body)
    crud.read(filePath) 
    newClient.id = crud.verificaId()
    crud.create(newClient,filePath)
    res.render('home')
}

module.exports = { cadastro, clientRegister}