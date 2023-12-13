const Pessoa = require('./Pessoa');
const Cliente = require('./Cliente');

class Adm extends Pessoa {
    #permissao
    #funcionario
    #verify

    constructor (nome,cpf,DataNasc,Email,Senha) {
        super (nome,cpf,DataNasc,Email,Senha)
        this.#permissao = true;
        this.#funcionario = true;
        this.#verify = new.target
    }
    
    create (id,name,cpf,birthDate,Mail,Password,Permission,employment) {
        
    }

    modifyAccountPermissions (employed,permission,accountModify) {
        let returnMessage = ''

        if (this.#verify === Adm)  {
            if (employed === true || employed === false && employed) {
                accountModify.funcionario = employed
            }
            if (permission === true || permission === false && permission) {
                accountModify.permissao = permission
            }
            if (permission !== true && permission !== false && employed !== true && employed !== false) {
                returnMessage = 'invalid modifications'
            }
        }
        return returnMessage
    }   
}