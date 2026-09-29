let listaPedidoGlobal = JSON.parse(localStorage.getItem("pedidos")) || [];

const button = document.querySelector("#btnNewOrder");
const dialogNovoPedido = document.querySelector ("#dialogNovoPedido");
const dataAtual = document.querySelector("#dataAtual");
dataAtual.innerHTML = new Date().toLocaleDateString("pt-BR");


//inputs novo pedido
const clientePedido = document.querySelector("#cliente");
const descPedido = document.querySelector("#pedido");
const valorPedido = document.querySelector("#valor");
const observacoesPedido = document.querySelector("#observacoes");

//cards de contagem dos pedidos
const totalPedidos = document.querySelector("#totalPedidos");
const totalPendentes = document.querySelector("#totalPendentes");
const totalEmAndamento = document.querySelector("#totalEmAndamento");
const totalConcluidos = document.querySelector("#totalConcluidos");
const totalPedidosGerenciamento = document.querySelector("#totalPedidosGerenciamento");




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

    const dataHora = new Date();
    const hora = dataHora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit"});
    const data = dataHora.toLocaleDateString("pt-BR");

        
    // montando o objeto JSON do pedido
    let pedidoObj = {
        "nomeCliente": clientePedido.value,
        "descPedido":  descPedido.value,
        "valorPedido": valorPedido.value,
        "observacoesPedido": observacoesPedido.value,
        "statusPedido": "Pendente",
        "dataHora": data+" - "+hora
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

    // passar para a lista de pedidos global
    listaPedidoGlobal = listaPedidos;

    //lista na tela a lista atualizada
    listagemPedidos();

    //fechando a dialog
    dialogNovoPedido.close();

    //informando ao usuario feedback de sucesso
    alert("Pedido cadastrado com sucesso");

}



function listagemPedidos(){

    const listaContainer = document.getElementById("listaPedidosContainer");

    listaContainer.innerHTML = "";
    
    if(listaPedidoGlobal.length === 0 ){
        listaContainer.innerHTML = `<div class="vazio"> Nenhum pedido cadastrado </div>`;
        totalConcluidos.innerHTML = `<span class="numberCard">0</span>  finalizados`;
        totalEmAndamento.innerHTML = `<span class="numberCard">0</span>  em andamento agora`;
        totalPendentes.innerHTML = `<span class="numberCard">0</span>  aguardando inicio`;
        totalPedidos.innerHTML = `<span class="numberCard">0</span>  pedidos cadastrados`;
        totalPedidosGerenciamento.innerHTML = 0 + " pedidos"; 
        return false;
    }

    listaPedidoGlobal.forEach((pedido, index) => {

        
        const elementItem = document.createElement("div");

        elementItem.classList.add("pedidoItem");

        elementItem.innerHTML = `
            <div class="row firstRow">
                <div class="dadosPedido">
                    <span class="idPedido"> #${index}</span>
                    <span class="clientePedido">${pedido.nomeCliente}</span>
                    <span class="descPedido">${pedido.descPedido}</span>
                    <span class="obsPedido">${pedido.observacoesPedido}</span>
                </div>
                <div>
                    <span ${pedido.statusPedido === "Pendente" ? "class= 'statusPedido statusPEN'" : pedido.statusPedido === "Em andamento" ? "class= 'statusPedido statusEmAndamento'" : pedido.statusPedido === "Concluído" ? "class= 'statusPedido statusCON'" : ""   }>${pedido.statusPedido}</span>
                </div>
            </div>

            <div class="row">
                <div class="valorContainer">
                    <span class="valorPedido">R$${pedido.valorPedido}</span>
                    <span class="horaPedido"> <i class="fa-duotone fa-solid fa-clock"></i> ${pedido.dataHora}</span>
                </div>
                <div class="acoesPedido">
                    <div class="selectStatus">
                        <select ${pedido.statusPedido === "Pendente" ? "class= 'statusPedido statusPEN'" : pedido.statusPedido === "Em andamento" ? "class= 'statusPedido statusEmAndamento'" : pedido.statusPedido === "Concluído" ? "class= 'statusPedido statusCON'" : ""   }>
                            <option value="Pendente" ${pedido.statusPedido === "Pendente" ? "selected" : ""}>Pendente</option>
                            <option value="Em andamento" ${pedido.statusPedido === "Em andamento" ? "selected" : ""}>Em andamento</option>
                            <option value="Concluído" ${pedido.statusPedido === "Concluído" ? "selected" : ""}>Concluído</option>
                        </select>
                    </div>
                    <button class="btnEditar"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="btnExcluir"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `;

        listaContainer.appendChild(elementItem);

        //Contagem de pedidos totais e por status
        let pendentes = listaPedidoGlobal.filter(pedido => pedido.statusPedido === "Pendente").length;
        let emAndamento = listaPedidoGlobal.filter(pedido => pedido.statusPedido === "Em Andamento").length;
        let concluidos = listaPedidoGlobal.filter(pedido => pedido.statusPedido === "Concluído").length;
        let totalPedidosQtd = listaPedidoGlobal.length;


        //adicionando quantidas aos cards respectivos
        totalConcluidos.innerHTML = `<span class="numberCard">${concluidos}</span>  finalizados`;
        totalEmAndamento.innerHTML = `<span class="numberCard">${emAndamento}</span>  em andamento agora`;
        totalPendentes.innerHTML = `<span class="numberCard">${pendentes}</span>  aguardando inicio`;
        totalPedidos.innerHTML = `<span class="numberCard">${totalPedidosQtd}</span>  pedidos cadastrados`;
        totalPedidosGerenciamento.innerHTML = totalPedidosQtd + " pedidos"; 


    });



}

listagemPedidos();

