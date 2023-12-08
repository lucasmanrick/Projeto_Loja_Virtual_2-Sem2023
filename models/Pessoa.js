class Pessoa {
    nome;
    cpf;
    dataNasc;
    email;
    senha;

    constructor (nome,cpf,DataNasc,Email,Senha) {
        this.id = null;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNasc = DataNasc;
        this.email = Email;
        this.senha = Senha;
    }

    get getName () {
        return this.nome;
    }

    get getCpf () {
        return this.cpf;
    }

    get getDataNasc () {
        return this.dataNasc;
    }

    get getEmail () {
        return this.email;
    }

    get getSenha () {
        return this.senha;
    }

    set newName (name) {
        this.nome = name;
    }
    set newCpf (cpf) {
        this.cpf = cpf;
    }
    set newDataNasc (newBirthdate) {
        this.dataNasc = newBirthdate;
    }
    set newEmail (email) {
        this.email = email;
    }

    set newPassword(newPassword) {
        this.senha = newPassword;
    }

}

module.exports = Pessoa