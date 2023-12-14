class Venda {
    constructor(id, data) {
      this.id = id;
      this.data = data;
      this.valorTotal = 0;
      this.items = [];
      this.quantidade = []; // Armazena as quantidades dos produtos
    }
  
    adicionarAoCarrinho (item) {

      let receiveStatus = false;
      this.items.forEach((el) => {
        if (el.id === item.id) {
          receiveStatus = true
        }
      })
      if(receiveStatus === true) {
        this.quantidade.forEach((el) => {
         if(el.nameObject == item.nome) {
          el.quantieItem += 1
         }
        })
      }else {
        this.items.push(item)
        this.quantidade.push ({nameObject:item.nome,quantieItem:item.id,price:item.preco})
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
  
    atualizarQuantidadeDoProduto(item) {
      let quantieStorage = [];
      this.quantidade.forEach((el) => {
        if(el === item.id) {
          quantieStorage.push (el)
        }
      })
      if(quantieStorage.length > 0) {
        return quantieStorage.length
      }
    }

    atualizarValorTotal () {
      this.valorTotal = 0;
        this.quantidade.forEach((e) => {
          let takeResult = e.quantieItem * e.price
          this.valorTotal += takeResult
          })
    }
  }
  
module.exports = {Venda}
  