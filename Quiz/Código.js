// PARTE 1: Lista de perguntas e respostas
perguntas = [
  {
    pergunta:
      "Sobre a obra One Piece, qual foi o TERCEIRO companheiro do Luffy?",
    respostas: [
      { opcao: "Roronoa Zoro", correto: false },
      { opcao: "Nami", correto: false },
      { opcao: "Usopp", correto: true },
      { opcao: "Sanji", correto: false }
    ]
  },
  {
    pergunta: "Qual é o sonho do personagem Sanji em One Piece?",
    respostas: [
      { opcao: "Encontrar o One Piece", correto: false },
      { opcao: "Ser o maior espadachim do mundo", correto: false },
      { opcao: "Encontrar o All Blue", correto: true },
      { opcao: "Vingar sua família", correto: false }
    ]
  },
  {
    pergunta:
      "Qual o nome da Akuma no Mi que Luffy comeu, revelado após o arco de Wano?",
    respostas: [
      { opcao: "Gomu Gomu no Mi", correto: false },
      { opcao: "Nika Nika no Mi", correto: false },
      { opcao: "Hito Hito no Mi: Modelo Nika", correto: true },
      { opcao: "Hito Hito no Mi: Modelo Buddha", correto: false }
    ]
  },
  {
    pergunta: "Quem é o capitão da tripulação dos Chapéus de Palha?",
    respostas: [
      { opcao: "Roronoa Zoro", correto: false },
      { opcao: "Monkey D. Luffy", correto: true },
      { opcao: "Portgas D. Ace", correto: false },
      { opcao: "Shanks", correto: false }
    ]
  },
  {
    pergunta: "Qual o nome do navio original dos Chapéus de Palha?",
    respostas: [
      { opcao: "Thousand Sunny", correto: false },
      { opcao: "Going Merry", correto: true },
      { opcao: "Red Force", correto: false },
      { opcao: "Oro Jackson", correto: false }
    ]
  }
];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos = acertos + 1;
        // Incrementa o contador de acertos
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  if (acertos == 0) {
    textoFinal.innerHTML = `Infelizmente você não acertou nenhuma questão..`;
  } else if (acertos <= 4) {
    textoFinal.innerHTML = `Muito bom! Você acertou ${acertos} pergunta(s) de um total de ${perguntas.length}`;
  } else {
    textoFinal.innerHTML = `Parabéns!!! Você acertou todas as perguntas, e agora está apto a entrar na jornada com os chapéus de palha, rumo ao One Piece!`;
  }
  // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// Recomeçar o quiz
function recomecarQuiz() {
  indiceAtual = 0;
  acertos = 0;
  conteudoFinal.style.display = "none"; // esconde a tela final
  conteudo.style.display = "flex"; // mostra a área do quiz
  carregarPergunta(); // carrega a primeira pergunta
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();
