class Venda {
   id
   data
   valorTotal

    constructor(data, valor) {
        this.id = null;
        this.data = data;
        this.valorTotal = valor;
        this.items = [];
        this.quantidade = {}; // Adicionando um objeto para armazenar as quantidades dos produtos
    }

    // Outros métodos da classe...

    adicionarAoCarrinho(items) {
        for (let item of items) {
            if (!this.items.includes(item)) {
                this.items.push(item);
                this.quantidade[item] = 1; // Define a quantidade inicial como 1 para cada produto adicionado
            }
        }
    }

    excluirItem(item) {
        let index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            delete this.quantidade[item]; // Remove a quantidade do produto ao excluí-lo do carrinho
            console.log(`${item} removido do carrinho.`);
        } else {
            console.log(`${item} não encontrado no carrinho.`);
        }
    }

    atualizarQuantidadeDoProduto(produto, quantidade) {
        if (this.items.includes(produto) && quantidade > 0) {
            this.quantidade[produto] = quantidade;
            console.log('Quantidade alterada com sucesso');
        } else {
            console.log('Erro na alteração de quantidade');
        }
    }

    mostrarCarrinho() {
        console.log("Itens no carrinho:");
        for (let item of this.items) {
            console.log(`${item} - Quantidade: ${this.quantidade[item]}`);
        }
    }
}

let carrinho = new Venda();
carrinho.adicionarAoCarrinho(["Produto 1", "Produto 2", "Produto 3"]);
carrinho.mostrarCarrinho();

carrinho.atualizarQuantidadeDoProduto("Produto 2",5);
carrinho.mostrarCarrinho();

carrinho.excluirItem("Produto 3");
carrinho.mostrarCarrinho();
module.exports = {Venda}
