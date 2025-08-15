#utf-8
#language: pt

Funcionalidade: gerenciamentoTabela-01 - Testes na Tabela de Registros

Cenario: Validar o ciclo de vida completo de um registro (CRUD)
  Dado que eu acesse a página de Web Tables
  Quando eu realizo o cadastro de um novo registro
  E realizo a edição deste mesmo registro
  E por fim, realizo a exclusão do registro
  Então o registro não deve mais ser encontrado na tabela