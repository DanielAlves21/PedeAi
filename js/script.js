let listaPedidoGlobal = JSON.parse(localStorage.getItem("pedidos")) || [];

const button = document.querySelector("#btnNewOrder");
const dialogNovoPedido = document.querySelector ("#dialogNovoPedido");

// inputs novo pedido
const clientePedido = document.querySelector("#cliente");
const descPedido = document.querySelector("#pedido");
const valorPedido = document.querySelector("#valor");
const observacoesPedido = document.querySelector("#observacoes");

//cards de contagem dos pedidos
const totalPedidos = document.querySelector("#totalPedidos");
const totalPendentes = document.querySelector("#totalPendentes");
const totalEmAndamento = document.querySelector("#totalEmAndamento");
const totalConcluidos = document.querySelector("#totalConcluidos");

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
    const data = dataHora.toLocaleTimeString("pt-BR");


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

    //fechando a dialog
    dialogNovoPedido.close();

    //informando ao usuario feedback de sucesso
    alert("Pedido cadastrado com sucesso");

}


 
function listagemPedidos(){
    // criando constante referente a div onde vai ficar a visualização dos pedidos.
    const listaContainer = document.getElementById("listaPedidosContainer");

    listaContainer.innerHTML = "";
    
    // verificando se a lista de pedidos global está vazia. 
    // se tiver vazia aparece mensagem de pedido não cadastrado.
    if(listaPedidoGlobal.length === 0 ){
        listaContainer.innerHTML = `<div class="vazio"> Nenhum pedido cadastrado </div>`;

        return false;
    }

    // crianfo a visualização dos pedidos, com a estrutura de repetição forEach.
    listaPedidoGlobal.forEach((pedido, index) => {
    // criando elementto div, que vai receber os dados do pedido.
        const elementItem = document.createElement("div");
    //adicionando a classe pedidoItem ao elemento div criado anteriormente.
        elementItem.classList.add("pedidoItem");
    //atribuindo estrutura HTML e os dados do pedido ao elemento div criado anteriormente.
        elementItem.innerHTML = `

            <div class="row">
                <div class="dadosPedido">
                    <span class="idPedido"> #${index}</span>
                    <span class="clientePedido">${pedido.nomeCliente}</span>
                    <span class="descPedido">${pedido.descPedido}</span>
                    <span class="ObsPedido">${pedido.observacoesPedido}</span>
                </div>
                <div>
                    <span class="statusPedido">${pedido.statusPedido}</span>
                </div>
            </div>

            <hr/>

            <div class="row">
                <div class="valorContainer">
                    <span class="valorPedido">${pedido.valorPedido}</span>
                    <span class="horaPedido">${pedido.dataHora}</span>
                </div>

                <div class="acoesPedido">
                    <div class="selectStatus">
                        <select>
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
        //adicionando a div container o elemento filho que contém as informações do pedido.
        listaContainer.appendChild(elementItem);

        //Contagem de pedidos totais e por status
        let pendentes = listaPedidoGlobal.filter(pedido => pedido.statusPedido === "Pendente").length;
        let emAndamento = listaPedidoGlobal.filter(pedido => pedido.statusPedido === "Em Andamento").length;
        let concluidos = listaPedidoGlobal.filter(pedido => pedido.statusPedido === "Concluído").length;
        let totalPedidosQtd = listaPedidoGlobal.length;

        //adicionando quantidas aos cards respectivos
        totalConcluidos.innerHTML = concluidos + " finalizados";
        totalEmAndamento.innerHTML = emAndamento + " em andamento agora";
        totalPendentes.innerHTML = pendentes + " aguardando inicio";
        totalPedidos.innerHTML = totalPedidosQtd + " pedidos cadastrados";
    
    });



}

listagemPedidos();



