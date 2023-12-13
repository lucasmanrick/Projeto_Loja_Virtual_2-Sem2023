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
          res.render('cadastro',{returnMsg:true})
      }
      else {res.render('cadastro',{sucess:true})}
    }
}

const loginEnter = (req,res) => {
  crud.read(filePath,secondFilePath)
  const {cpf,senha} = req.body
  if (crud.validaLogin (cpf,senha)) {
    let sessionValue = crud.validaLogin(cpf,senha)
    crud.clienteLogado(true,sessionValue)
    res.render('home', {dataClient:sessionValue})
  }else{
      res.render('cadastro')
  }
}
  const loginLogout = (req,res) => {
    const clientLog = crud.read('./data/logado.JSON')
    const productsReceive = [{nome:'vinho',preco:'10r$',img:'/img/cerveja/img1.png',id:1}];
    if(clientLog) {
      crud.deletarArquivo('./data/logado.JSON')
      res.render('home',{Product:productsReceive})
    }
}


module.exports = { cadastro, clientRegister, loginEnter,loginLogout}
