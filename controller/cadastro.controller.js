const Cliente = require("../models/Cliente")
const Pessoa = require("../models/Pessoa")
const crud = require("../models/crud")
const filePath = './data/clientes.JSON'

const cadastro = (req, res) => {
    res.render('cadastro')
}

const clientRegister =(req,res) => {

    const {nome,cpf,DataNasc,Email,Senha} = req.body
    crud.read(filePath) 
    if (!crud.verificaCliente(cpf)) {
        const newClient = new Pessoa (nome,cpf,DataNasc,Email,Senha)
        newClient.id = crud.verificaId()
        crud.create(newClient,filePath)
        res.render('cadastro',{returnMsg:'usuario Cadastrado com Sucesso!!'})
    }else {
       res.render ('cadastro',{returnMsg:'CPF já esta cadastrado'})
    }
}

const loginEnter = (req,res) => {
  crud.read(filePath)
  const {cpf,senha} = req.body
  if (crud.validaLogin (cpf,senha)) {
    sessionStorage.setItem('cliente',crud.validaLogin(cpf,senha))
    res.redirect('home')
  }

}

module.exports = { cadastro, clientRegister, loginEnter}