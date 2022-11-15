# Desafio Nginx com o Node.js

O desafio se trata de atráves do docker compose subir uma aplicação em Node.js que tem o Nginx na frente fazendo um proxy reverso para aplicação

## Estratégia 

Para cumprir o desafio foi necessário subir três containers: db, app e nginx.
- db : Base de dados mysql que utiliza uma pasta compartilhada com o container para que não haja perda de dados
- app : Aplicação em Node.js que se conecta com a base de dados e salva um nome fixo na base de dados, depois faz um select e exibe o resultado na tela junto com a frase "Full Cycle Rocks!". Como esse container depende da base mysql foi necessário usar o "wait-for-it" para que o app espere o db subir. [Aqui](https://github.com/codeedu/docker-wait-for-it) tem uma explicação e um projeto de exemplo sobre o "wait-for-it"
- nginx: Web server usado para fazer um proxy reverso para a aplicaação em Node.js, foi necessário fazer a configuração do proxy reverso no aquivo "nginx.conf" que foi copiado para dentro do container do nginx


## Execução
Para subir o projeto é necessário executar o comando abixo:
`docker compose up -d --build  `