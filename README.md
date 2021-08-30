# UFCGBot 

> Repositório referente ao projeto da disciplina Projeto 1 do curso de Ciência da Computação - UFCG (2020.2).

## Descrição 

<p> O UFCGBot é um Minimum Viable Product (MVP) com o intuito de facilitar o atendimento remoto a clientes da Comissão de Processos Vestibulares da UFCG (Comprov) </p>

> Possui um fluxograma de mensagens automáticas que serão enviadas para um usuário que interage com a Comprov via Telegram, e que funcionará como atendimento eletrônico automatizado que permite a economia de tempo e torna o acesso aos processos mais faceis.   

## Sobre o projeto

O projeto foi desenvolvido em node.js utilizando a API do Telegram para a estruturação do Bot. Além disso, utiliza biliotecas como axios, cors, express, localtunnel e npmlog. 

## Estrutura

- `raiz` Caminho das pastas do projeto.
  - `config` Diretório que contém as variaveis de ambiente de desenvolvimento e produção.
  - `docs` Diretório que contém os documentos de como utilizar o Docker Container, registrar uma imagem no Docker e possui links uteis que podem ser usados para auxilar o desenvolvimento.
  - `src` Diretório mais importante do projeto, o source contém o código bruto antes da minificação ou compilação, sendo usada para leitura ou edição do código.
    - `controllers` Diretório onde encontra-se os arquivos MessageController.js e WebhookController.js que são responsáveis por encapsular os services e lidar com a comunicação da API.
        - `MessageController.js` Arquivo responsável por possuir metódos para enviar mensagens para um usuário especifico e utilizar o Webhook para receber e gerenciar mensagens dos usuários.
        - `WebhookController.js` Arquivo responsável por possuir o metódo para registrar uma novo url do webhook utilizando a Telegram API.
    - `routes` Diretório onde encontra-se o arquivo index.js que é responsável por utilizar a biblioteca express e definir as rotas da API.
    - `services`  Diretório onde encontra-se os arquivos api.js e telegram.js que utiliza a biblioteca axios e implementa a logica de negocio da aplicação.
       - `api.js` Arquvio responsável por criar uma nova instância do axios com uma configuração personalizada (TOKEN do Bot). 
       - `telegram.js` Arquivo responsável por possuir metódos básicos, para o funcionamento da aplicação, como enviar mensagem, responder mensagem e registrar um webhook para receber atualizações
    - `tests` Diretório que possui arquivos de testes unitarios que utilizam as biblitecas mocha e chai.
    - `utils` Diretório onde encontra-se os arquivos que auxiliam no desenolvimento e esturturação do projeto.
      - `errorMessages.js` Arquivo responsável por estruturar e exportar as mensagens de error.
      - `flowchart.js` Arquivo responsável por possuir uma implementação de uma maquina de estados que representa o fluxograma da aplicação.
      - `log.js`  Arquivo responsável por utilizar a bibilioteca npmlog e possuir funções que criam os logs do projeto
      - `messageTypes.js` Arquivo responsável por possuir o metódo que cria opções no teclado do usuário para responder mensagens.
      - `storage.js` Arquivo responsável por possuir uma classe que contém metódos básicos de armazenamento para o banco de dados.
    - `serve.js`  Arquivo que utiliza a biblioteca express para definir as rotas, a porta e consumir as bibliotecas para rodar a aplicação localmente.
    - `tunnel.js`  Arquivo que utiliza a biblioteca localtunnel para compartilhar um serviço web da máquina local sem alterar nenhuma configuração de DNS ou Firewall. Assim disponibilizando uma URL exclusiva, acessível publicamente, que fará o proxy de todas as solicitações para o servidor local.
 

