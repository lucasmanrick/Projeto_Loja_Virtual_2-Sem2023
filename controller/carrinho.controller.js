
const { Venda } = require("../models/Venda");
const crud = require("../models/crud");
const filePath = './data/logado.JSON'


const carrinho = (req, res) => {
   const existClient = crud.read(filePath)
   if(existClient) {
      crud.read('./data/carrinho.JSON')
      const id = req.params.id
      console.log(id)
      const {itemId} = req.body
      const newCart = new Venda (req.body)
      res.render('carrinho',{dataClient:existClient})
   }else {
      res.render('cadastro')
   }
}
const adicionarItem = async (req, res) => {
    const { produtoId, quantidade } = req.body;
  
    try {
      const produto = await Produto.findById(produtoId);
      if (!produto) {
        return res.status(404).json({ message: 'Produto não encontrado' });
      }
  
      // Verificar se o carrinho já existe para o usuário (ou crie um novo se necessário)
      let carrinho = await Carrinho.findOne({ userId: req.user.id });
      if (!carrinho) {
        carrinho = new Carrinho({ userId: req.user.id, itens: [] });
      }
  
      // Verificar se o produto já está no carrinho
      const itemIndex = carrinho.itens.findIndex(item => item.produtoId === produtoId);
      if (itemIndex !== -1) {
        // Se o produto já estiver no carrinho, atualize a quantidade
        carrinho.itens[itemIndex].quantidade += quantidade;
      } else {
        // Se o produto não estiver no carrinho, adicione um novo item
        carrinho.itens.push({ produtoId, quantidade });
      }
  
      // Salve o carrinho atualizado no banco de dados
      await carrinho.save();
      
      res.status(200).json({ message: 'Item adicionado ao carrinho com sucesso' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Controlador para exibir o conteúdo do carrinho
  const exibirCarrinho = async (req, res) => {
    try {
      const carrinho = await Carrinho.findOne({ userId: req.user.id }).populate('itens.produtoId');
  
      if (!carrinho) {
        return res.status(404).json({ message: 'Carrinho vazio' });
      }
  
      res.status(200).json({ carrinho });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Outros controladores (remover item, atualizar quantidade, processar checkout) podem ser adicionados conforme necessário
  
  module.exports = {
    adicionarItem,
    exibirCarrinho,
    carrinho
  };
