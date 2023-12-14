class Venda {
    constructor(id, data, valor,items) {
      this.id = id;
      this.data = data;
      this.valorTotal = valor;
      this.items = [items];
      this.quantidade = []; // Armazena as quantidades dos produtos
    }
  
    adicionarAoCarrinho (item) {

      let receiveStatus;
      this.items.forEach((el) => {
        if (el.id === item.id) {
          receiveStatus = el.id
        }
      })
      if(receiveStatus) {
        this.quantidade.push (receiveStatus)
      }else {
        this.items.push(item)
        this.quantidade.push(item.id)
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

    atualizarValorTotal () {
      this.items.forEach((el) => {
        this.valorTotal += el.preco
      })
    }
  }
  
module.exports = {Venda}
  