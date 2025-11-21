# Automação de Testes End-to-End com Cypress

Este projeto contém a automação de cenários essenciais de um fluxo de e-commerce, incluindo testes de Login, Cadastro, Carrinho e Checkout.  

A estrutura foi organizada em suítes independentes para facilitar manutenção e escalabilidade.


# Instalação do projeto

terminal bash: git clone "repositório"

terminal bash: cd desafio-cypress-QA


# Para instalar

terminal bash: npm init -y

terminal bash: npm install --save-dev


# Executar testes

Abrir Cypress na interface gráfica

terminal bash: npx cypress open

Em seguida, selecione E2E Testing.

Escolha o navegador.

Clique no teste que deseja executar.

Obs: Há uma maneira alternativa de executar os testes.

No arquivo packge.json adicionei dois comandos:

"cy:open": "cypress open",

"cy:run": "cypress run"

Com isso, é possível executar um único comando capaz de abrir e executar o teste direto na interface.

terminal bash: npm run cy:open


# Executar todos os testes via terminal

terminal bash: npx cypress run


# Executar uma suíte específica via terminal

terminal bash: npx cypress run --spec "cypress/e2e/login/*"

No exemplo acima, o comando vai executar a suíte de testes da pasta login.


# Síntese dos cenários automatizados

**CARRINHO**

Adicionar e remover produto do carrinho

**CHECKOUT**

Fluxo completo de compra

Tentativa de finalizar compra com campos obrigatórios vazios

**LOGIN**

Login válido

Login com:

-- senha incorreta

-- e-mail incorreto

-- campo e-mail vazio

-- campo senha vazio

-- e-mail e senha vazios

**CADASTRO**

Cadastro com:

-- e-mail inválido

-- e-mail vazio

-- senha vazia

-- ambos os campos vazios


Com isso, conseguimos:

Validar regras críticas de autenticação, cadastro, carrinho e checkout;

Garantir que funcionalidades essenciais estejam funcionando corretamente;

Criar uma base robusta de testes E2E e bem organizada.