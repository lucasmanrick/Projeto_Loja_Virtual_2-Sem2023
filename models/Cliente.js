const Pessoa = require ('./Pessoa');
const crud = require('./crud');
class Cliente extends Pessoa {
    constructor(nome,cpf,DataNasc,Email,Senha) {
        super (nome,cpf,DataNasc,Email,Senha)
        this.funcionario = false;
        this.permissao = false;
    }
}



module.exports = Cliente