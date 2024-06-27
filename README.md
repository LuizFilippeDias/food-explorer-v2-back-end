# Objetivo da criação do projeto! 🚀

Esse projeto foi criado no intuito de ser a avaliação final do curso Explorer realizado pela <a href="https://www.rocketseat.com.br/">Rocketseat</a>.
O projeto aborda alguns pontos cruciais pedidos na avaliação, são eles:
1. Implementação das telas de login, página principal, página de detalhes do prato, e outras conforme o layout disponibilizado no Figma.
2. Funcionalidades para visualização de pratos, busca por nome e ingredientes, e interação com os pratos.
3. Suporte para upload de imagens durante o cadastro dos pratos.

    . Interface de usuário responsiva de acordo com o conceito Mobile First.
5. Implementação de animações e transições para melhorar a experiência do usuário.
6. Integração com a API do back-end para o consumo de dados.
7. Documentação detalhada no README, incluindo instruções de execução do projeto e link de deploy.

## Resumo da API 💻

A API nada mais é do que um cardápio online, onde você poderá realizar pedidos e confirmar sua compra. Há um cardápio dividido para cada tipo de refeição. Tanto para mobile quanto para uso em desktop.

Caso você seja o dono do restaurante e queira usar a API, também tem para você a parte administrativa, onde você poderá criar, editar e apagar os pratos do seu cardápio online.

A parte de back-end você verá aqui. 

## Banco de Dados 📂
No banco de dados foram aplicados as seguintes tabelas:
- Users;
- Ingredients;
- Cart Items;
- Carts;
- Dishes;
- Favorites;
- Knex Migrations;
- Knex Migrations Lock;
- MyOrders;
- Order Items;
- Orders;
- SQLITE Sequence.

## Tecnologias usadas 🧰
- SQLite;
- SQLite3;
- Bcrypt.js;
- CORS;
- Dotenv;
- Express.js;
- express-async-errors;
- JSON Web Token;
- Knex.js;
- Node.js;
- Multer;
- PM2.

## Acesso 🔑
Para conseguir acessar a API você pode entrar clicando <a href="https://food-explorer-luiz-filippe.netlify.app/">aqui</a>. Você será redirecionado para o site onde a API está hospedada.

Para acessar onde o back-end está hospedado clique <a href="https://food-explorer-v2-back-end.onrender.com">aqui</a>.

**Obs:** Por ser uma hospedagem gratuita irá ocorrer lentidão em alguns momentos.

## 
Caso queira baixar o projeto na sua máquina, siga a seguinte orientação:

**obs:** É necessário ter o Node.js instalado e o npm na sua máquina.

**Passo 1:** Clone este projeto utilizando o seguinte comando em seu terminal.

      $ git clone https://github.com/LuizFilippeDias/food-explorer-v2-back-end
      
**Passo 2:** Acesse a pasta onde está o projeto.

      $ cd food-explorer-v2-back-end
      
**Passo 3:** Instale as dependências.

      $ npm install
      
**Passo 4:** Inicie o servidor.

      $ npm start

**Obs:**  Crie um arquivo .env. Crie e preencha os campos AUTH_SECRET e PORT com as informações necessárias.

Para gerar o valor para o campo AUTH_SECRET, você pode utilizar o MD5 Hash Generator para gerar uma sequência de caracteres segura.

Preencha o campo PORT com o número da porta desejada para executar o servidor da aplicação

### Extra 🔔
Caso queiram ver a parte do back-end podem ter acesso a ela clicando <a href="https://github.com/LuizFilippeDias/food-explorer-v2-front-end">aqui</a>

### Licença 🚔
O projeto está acompanhado da licença MIT.

### Contato 📱
<a href="https://www.linkedin.com/in/luiz-guilherme-costa-filippe-dias-b559531a5/">Linkedin</a>

