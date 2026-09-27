const button = document.querySelector("#btnNewOrder");
const dialogNovoPedido = document.querySelector ("#dialogNovoPedido");

const clientePedido = document.querySelector("#cliente");
const descPedido = document.querySelector("#pedido");
const valorPedido = document.querySelector("#valor");
const observacoesPedido = document.querySelector("#observacoes");

button.onclick = function () {
    dialogNovoPedido.showModal()
}

const btnIcon = document.querySelector ("#closeIcon");
const btnCancelNovoPedido = document.querySelector ("#btnCancelNovoPedido");

btnIcon.onclick = function () {
    dialogNovoPedido.close()
}

btnCancelNovoPedido.onclick = function () {
    dialogNovoPedido.close()
}

const btnRegistrarPedido = document.querySelector("#btnRegistrarPedido");
btnRegistrarPedido.onclick = function() {
    //validação dos inputs - verificando se os inputs estão vazios
    if (clientePedido.value == '' || descPedido.value == '' || valorPedido.value == '' || observacoesPedido.value == '' ) {
       alert("Preencha todos os campos");
       return false;
    }

    ''
    // montando o objeto JSON do pedido
    let pedidoObj = {
        "nomeCliente": clientePedido.value,
        "descPedido":  descPedido.value,
        "valorPedido": valorPedido.value,
        "observacoesPedido": observacoesPedido.value
    }
    
    //capturando lista de pedidos do localStorage, se não tiver pedidos retorna um array vazio
    let listaPedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    //adicionando um novo pedido a lista de pedidos
    listaPedidos.push(pedidoObj);

    //armazenando pedidos ao localStorage
    localStorage.setItem("pedidos",JSON.stringify(listaPedidos));
    
    //limpando os inputs após o pedido
    clientePedido.value = '';
    descPedido.value = '';
    valorPedido.value = '';
    observacoesPedido.value = '';

    //fechando a dialog
    dialogNovoPedido.close();

    //informando ao usuario feedback de sucesso
    alert("Pedido cadastrado com sucesso");




}

