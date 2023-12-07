const Pessoa = require ('./Pessoa');

class Cliente extends Pessoa {
    #funcionario;
    #permissao;

    constructor(nome,cpf,DataNasc,Email,Senha) {
        super (nome,cpf,DataNasc,Email,Senha)
        this.#funcionario = false;
        this.#permissao = false;
    }

   set modifyAccount (funcionario) {
        this.#funcionario = funcionario;
        return this.#funcionario
    }

    set modifyPermission (permissao) {
        this.#permissao = permissao;
        return this.#permissao
    }
}



module.exports = Cliente