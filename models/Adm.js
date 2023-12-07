const Pessoa = require('./Pessoa');
const Cliente = require('./Cliente');

class Adm extends Pessoa {
    #permissao
    #funcionario

    constructor (nome,cpf,DataNasc,Email,Senha) {
        super (nome,cpf,DataNasc,Email,Senha)
        this.#permissao = true;
        this.#funcionario = true;
    }
    
    createEmployAndAdmAccount (employed,permission,accountModify) {

        if (Adm) {
            console.log ('é usuario ADM');
            if (employed === true || employed === false) {
                accountModify.modifyAccount = employed
            }else {
                return
            }
            if (permission === true || permission === false) {
                this.#permissao = permission
                accountModify.modifyPermission = permission
            }else {
                return
            }
        }
    }   
}

const newClient = new Cliente('Lucas',49222231234,'03/07/2003','Lucasmanrick.ipsm@gmail.com','Lukinha123');
console.log (newClient)
const newAdm = new Adm ('Lucas',42223121233,'03/01/00223','Lukinhadovrau@gmail.com',3311123)
console.log (newAdm.getName)


console.log (newAdm.createEmployAndAdmAccount(true,true,newClient))