const _começarButton = document.querySelector(".começar-button")
const _questõesContenção = document.querySelector(".questões-Contenção")
const _centroPerguntas = document.querySelector(".respostas-Contenção")
const _alertaMensagem = document.querySelector(".perguntas")
const _proPergunta = document.querySelector (".próxima-questão")

_começarButton.addEventListener("click", estartaJogo )
_proPergunta.addEventListener("click", próximaQuestão )

let currentQuestionIndex = 0
let totalCorreta = 0