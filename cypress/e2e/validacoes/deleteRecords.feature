#utf-8
#language: pt

Funcionalidade: Exclusão de Registros da Tabela
  Como um usuário
  Eu quero poder excluir registros existentes
  Para manter a tabela de dados atualizada

Cenario: Excluir todos os registros existentes na tabela
  Dado que eu acesse a página de Web Tables com os registros padrão
  Quando eu excluo todos os registros existentes
  Então a tabela deve exibir a mensagem "No rows found"