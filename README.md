# PedeAi
O PedeAí é um sistema web simples, desenvolvido para ajudar pequenos comércios a registrar e acompanhar seus pedidos de forma organizada.
---
##Historias de usuários

HU01 — Cadastrar pedido

Como comerciante,
quero cadastrar um novo pedido,
para registrar os pedidos dos meus clientes e evitar esquecimentos ou perda de informações.

Critérios de aceitação:

- Deve permitir informar o nome do cliente.
- Deve permitir informar a descrição do pedido.
- Deve permitir informar observações.
- Deve permitir informar o valor do pedido.
- Deve registrar a data e hora do cadastro.
- O pedido deve ser cadastrado inicialmente com o status Pendente.

---

HU02 — Visualizar pedidos

Como comerciante,
quero visualizar os pedidos cadastrados,
para acompanhar e consultar os pedidos realizados.

Critérios de aceitação:

- Deve exibir todos os pedidos cadastrados.
- A listagem deve apresentar as informações cadastradas do pedido.
- Deve apresentar o status atual de cada pedido.
- Os pedidos devem ser apresentados de forma organizada.

---

HU03 — Atualizar status do pedido

Como comerciante, quero alterar o status de um pedido, para acompanhar o andamento do atendimento.

Critérios de aceitação:

- O pedido deve iniciar com o status Pendente.
- Deve ser possível alterar o status para Em preparo.
- Deve ser possível alterar o status para Concluído.
- O novo status deve ser apresentado na listagem de pedidos.

---

HU04 — Editar pedido

Como comerciante, quero editar um pedido cadastrado, para corrigir ou atualizar informações do pedido.

Critérios de aceitação:

- Deve ser possível alterar os dados cadastrados do pedido.
- As alterações devem ser salvas.
- Os dados atualizados devem aparecer na listagem.

---

HU05 — Excluir pedido

Como comerciante, quero excluir um pedido, para remover pedidos que foram cadastrados incorretamente ou que não precisam mais ser mantidos no sistema.

Critérios de aceitação:

- Deve ser possível excluir um pedido cadastrado.
- O sistema deve solicitar confirmação antes da exclusão.
- Após a confirmação, o pedido não deve mais aparecer na listagem.

---

## Product Backlog

| ID | Funcionalidade | Prioridade |
|---|---|---|
| HU01 | Cadastrar pedido | Alta |
| HU02 | Visualizar pedidos | Alta |
| HU03 | Atualizar status do pedido | Alta |
| HU04 | Editar pedido | Média |
| HU05 | Excluir pedido | Média |