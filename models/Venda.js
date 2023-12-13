class Venda {
    constructor(id, data, valor) {
      this.id = id;
      this.data = data;
      this.valorTotal = valor;
      this.items = [];
      this.quantidade = {}; // Armazena as quantidades dos produtos

    }
  
    adicionarAoCarrinho(item) {
      if (!this.items.includes(item)) {
        this.items.push(item);
        this.quantidade[item.id] = 1; // Define a quantidade inicial como 1 para cada produto adicionado
      } else {
        this.quantidade[item.id] += 1; // Incrementa a quantidade se o item já estiver no carrinho
      }
    }
  
    excluirItem(item) {
      const index = this.items.findIndex(prod => prod.id === item.id);
      if (index !== -1) {
        this.items.splice(index, 1);
        delete this.quantidade[item.id]; // Remove a quantidade do produto ao excluí-lo do carrinho
        console.log(`${item.nome} removido do carrinho.`);
      } else {
        console.log(`${item.nome} não encontrado no carrinho.`);
      }
    }
  
    atualizarQuantidadeDoProduto(produto, quantidade) {
      if (this.items.some(item => item.id === produto.id) && quantidade > 0) {
        this.quantidade[produto.id] = quantidade;
        console.log('Quantidade alterada com sucesso');
      } else {
        console.log('Erro na alteração de quantidade');
      }
    }
  
    mostrarCarrinho() {
      console.log("Itens no carrinho:");
      for (let item of this.items) {
        console.log(`${item.nome} - Quantidade: ${this.quantidade[item.id]}`);
      }
    }
  }
  
  module.exports = Venda;
  