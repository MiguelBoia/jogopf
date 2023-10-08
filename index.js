const _começarButton = document.querySelector(".começar-button")
const _questõesContenção = document.querySelector(".questões-Contenção")
const _centroPerguntas = document.querySelector(".respostas-Contenção")
const _alertaMensagem = document.querySelector(".perguntas")
const _proPergunta = document.querySelector (".próxima-questão")

_começarButton.addEventListener("click", estartaJogo )
_proPergunta.addEventListener("click", próximaQuestão )

let currentQuestionIndex = 0
let totalCorreta = 0

function estartaJogo() {
    _começarButton.classList.add("hide")
    _questõesContenção.classList.remove("hide") // funções feitas para começar o jogo sem dá erro, escondendo e removendo butões visuais //
    próximaQuestão() //função com o objetivo de chamar a próxima questão//
}

function próximaQuestão() {
        while(_centroPerguntas.firstChild) {
            _centroPerguntas.removeChild(_centroPerguntas.firstChild) //laço de repetição para remover os resquícios, os filhos//
        }
    }