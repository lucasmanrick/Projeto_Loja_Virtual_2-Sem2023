const Venda = require ('./Venda')
class VendaProduto extends Venda {
    #idProduto;
    #idVenda;
    constructor(id, idProduto, idVenda){
        super(id);
        this.#idProduto = idProduto;
        this.#idVenda = idVenda;
    }
}