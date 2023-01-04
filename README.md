# Trivia (atualizar link do linkedin)
## ✏ Sobre o projeto
O objetivo do projeto é desenvolver uma aplicação de um jogo de <strong>trivia</strong> (jogo de perguntas e respostas), consumindo a API [The Trivia Api](https://the-trivia-api.com/) para a geração das perguntas. O projeto consiste em uma tela de login, tela do jogo, página de feedback e ranking. Se o usuário logar no jogo com o email que tiver cadastro no site Gravatar, terá sua foto associada ao perfil da pessoa usuária no jogo, logo na seqüência o usuário tem acesso ao jogo em si. :hourglass_flowing_sand:

O jogo tem 5 perguntas, com 30 segundos para responder cada uma. Caso seja escolhida a resposta correta, a pontuação será baseada no tempo em que levou para responder e na dificuldade da pergunta, após o jogador terminar a partida irá para a tela de feedback que consiste em uma simples avaliação com base na quantidade de perguntas que o jogador acertou, e poderá escolher voltar para tela inicial ou conferir sua pontuação no ranking comparado com outros jogadores da maquina. :trophy:

Foram desenvolvidos testes para cada tela da aplicação utilizando o <strong>Jest</strong> e a biblioteca <strong>React Test Library (RTL)</strong>. :man_technologist:

## Habilidades desenvolvidas:
* Uso do `ReactJS` com componentes de classe para desenvolvimento do projeto.

* Uso do `React Router` para paginação.

* Uso do `Redux` no gerenciamento do estado global;

* Uso do `React Testing Library` para desenvolvimento dos testes.

## :wrench: Principais tecnologias utilizadas: 
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript);
- [React.js](https://pt-br.reactjs.org/);
- [Redux.js](https://redux.js.org/)
- [React Router Dom](https://reactrouter.com/en/main)
- [Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)
- [Jest](https://jestjs.io/pt-BR/)
- [RTL - React Test Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Tailwind](https://tailwindcss.com/)

## Como utilizar o projeto na sua máquina
<strong>1. Deploy:</strong>
</br>
https://newtrivianeon.netlify.app/

<strong>2. Faça o git clone na sua máquina e entre no diretório:</strong>
 - Lembre-se de clonar o repositório no diretório desejado na sua máquina!
 ```
git@github.com:Marcio-Gabriel-Roque-Mendes/trivia-project.git
 cd trivia-project
 ```
 Instale as dependências
 - Atente-se para instalar na pasta raiz do projeto
```
 npm install
```
Inicie a aplicação 
```
 npm start
```
Rode todos os testes com o seguinte comando:
```
npm run test 
```
Para rodar um teste em específico, digite o seguinte comando, seguido do nome de arquivo de teste que deseja executar. Exemplo:
```
npm run test CardGame.test.js
```
- Dica: Todos os arquivos de testes desenvolvidos para esse projeto podem ser encontrado no seguinte diretorio:
```
src/tests
```
![Captura de tela de 2023-01-03 20-57-50](https://user-images.githubusercontent.com/99992471/210460937-f9eee0bc-72e7-4b39-941a-383b542bacbd.png)

<strong/>Este projeto foi desenvolvido em grupo por:</strong>

* Bruno Emanuel
* Cesar Holanda
* Marcelo Lima
* Marcio Gabriel

Utilizamos a metodologia agil Kanban para a gestão de fluxo do nosso trabalho pelo Trello, em paralelo com outras ferramentas de comunicação assíncrona neste caso o Slack e comunicação síncrona sendo o Zoom para videochamada. 

Mais informações dos colaboradores do projeto podem ser encontradas nessa [publicação feita no Linkedin.](https://www.linkedin.com/posts/marcio-gabriel-roque_frontend-react-redux-activity-7016201802920407040-wxwq?utm_source=share&utm_medium=member_desktop)

## Prévia da aplicação rodando:
https://user-images.githubusercontent.com/99992471/210459441-b383f4f7-6dab-4c7c-b910-52de13ba533f.mp4

Código desenvolvido pelo grupo no projeto Trivia durante o curso da [Trybe](https://www.betrybe.com/)
