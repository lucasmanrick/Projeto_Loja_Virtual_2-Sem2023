class Produto {
  constructor(nome,preço,estoque,descricao,imagemProduto) {
    this.id = null;
    this.nome = nome;
    this.preco= preço;
    this.estoque += estoque;
    this.imagemProduto = imagemProduto
    this.ativo = 1
  }
}
module.exports = Produto;
