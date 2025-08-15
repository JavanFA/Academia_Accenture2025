#uft-8
#language: pt

Funcionalidade: Validações do Formulário de Cadastro
  Como um usuário
  Eu quero que o sistema valide os campos do formulário
  Para garantir a integridade dos dados inseridos

  Contexto: Acessar a página e o formulário
    Dado que eu acesse a página de Web Tables

  Cenario: Tentar cadastrar sem preencher um campo obrigatório
    Quando eu tento realizar um cadastro sem o Sobrenome
    Então o formulário não deve ser submetido e o campo de Sobrenome deve indicar um erro

  Cenario: Tentar cadastrar com um formato de e-mail inválido
    Quando eu tento realizar um cadastro com um e-mail sem "@"
    Então o formulário não deve ser submetido e o campo de e-mail deve indicar um erro