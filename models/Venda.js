class Venda {
    constructor(id, data) {
      this.id = id;
      this.data = data;
      this.valorTotal = 0;
      this.items = [];
      this.quantidade = []; // Armazena as quantidades dos produtos
      this.desconto = 0;
    }
  
    adicionarAoCarrinho (item) {
      let receiveStatus = false;
      this.items.forEach((el) => {
        if (el.id === item.id) {
          receiveStatus = true
        }
      })

      if(receiveStatus == true) {
        if(this.quantidade.length > 0) {
          this.quantidade.forEach((el) => {
            if(el.nameObject == item.nome) {
              el.quantieItem += 1
            }
          })
        }  
      }else {
        this.items.push(item)
        this.quantidade.push ({nameObject:item.nome,quantieItem:1,price:item.preco})
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
          this.valorTotal = this.valorTotal + takeResult
          })
          if(this.valorTotal > 50) {
            this.valorTotal -= 10
            this.desconto = 10
          }
          if(this.valorTotal >= 100) {
            this.valorTotal -=10
            this.desconto = 20
          }
    }
  }
  
module.exports = {Venda}
  