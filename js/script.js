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
    if (clientePedido.value == '' || descPedido.value == '' || valorPedido.value == '' || observacoesPedido.value == '' ) {
       alert("Preencha todos os campos");
       return false;
    }

    console.log("dados validados");
}
