class Produto {
  constructor(nome,preço,estoque) {
    this.id = null;
    this.nome = nome;
    this.preco= preço
    this.estoque = estoque
    this.ativo = 1
  }
}

module.exports = {Produto}