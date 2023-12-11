const Cliente = require("../models/Cliente")
const Pessoa = require("../models/Pessoa")
const crud = require("../models/crud")
const filePath = './data/clientes.JSON'
const secondFilePath = './data/adm.JSON'

const cadastro = (req, res) => {
    res.render('cadastro')
}

const clientRegister =(req,res) => {

    const {nome,cpf,DataNasc,Email,Senha} = req.body
    if (nome,cpf,DataNasc,Email,Senha) {
      crud.read(filePath) 
      if (!crud.verificaCliente(cpf)) {
          const newClient = new Cliente (nome,cpf,DataNasc,Email,Senha)
          newClient.id = crud.verificaId()
          crud.create(newClient,filePath)
          res.render('cadastro',{returnMsg:false})
      }
      else {res.render('cadastro',{returnMsg:true})}
    }
}

const loginEnter = (req,res) => {
  crud.read(filePath,secondFilePath)
  const {cpf,senha} = req.body
  if (crud.validaLogin (cpf,senha)) {
    let sessionValue = crud.validaLogin(cpf,senha)
    res.render('home', {dataClient:sessionValue})
  }

}

module.exports = { cadastro, clientRegister, loginEnter}