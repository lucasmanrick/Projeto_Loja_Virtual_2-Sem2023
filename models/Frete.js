class Frete {

    constructor (id,DataEntrega,Cnpj,Empresa,CodRastreio) {
        this.id = null;
        this.dataGerada = new Date()
        this.dataEntrega = DataEntrega
        this.cnpj = Cnpj
        this.empresa = Empresa
        this.CodRastreio = CodRastreio
    }

}