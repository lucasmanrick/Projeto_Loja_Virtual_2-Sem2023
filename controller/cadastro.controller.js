const Cliente = require("../models/Cliente")
const Pessoa = require("../models/Pessoa")
const crud = require("../models/crud")
const filePath = './data/clientes.JSON'

const cadastro = (req, res) => {
    res.render('cadastro')
}

const clientRegister =(req,res) => {

    const {nome,cpf,DataNasc,Email,Senha} = req.body
    if (!crud.verificaCliente(cpf)) {
        const newClient = new Pessoa (nome,cpf,DataNasc,Email,Senha)
        crud.read(filePath) 
        newClient.id = crud.verificaId()
        crud.create(newClient,filePath)
        res.redirect('home')
    }else {
        return 'Usuario já Cadastrado'
    }
    
}

module.exports = { cadastro, clientRegister}