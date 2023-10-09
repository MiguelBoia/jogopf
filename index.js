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
    document.body.removeAttribute("class")
    _proPergunta.classList.add("hide")

    if (perguntas.length === currentQuestionIndex) { return fimGame()}


_alertaMensagem.textContent = perguntas[currentQuestionIndex].pergunta // dentro do textContent pegou as perguntas atuais do index// 
perguntas[currentQuestionIndex].respostas.forEach(respostas)=> {

const resB = document.createElement("button")
}
resB.classList.add("button", "respostas")
    resB.textContent = respostas.text
    if (respostas.correto) {resB.dataset.correto = respostas.correto}
    _centroPerguntas.appendChild(resB)
    
    resB.addEventListener("click", seleçãoPerguntas)
function seleçãoPerguntas(event) {
    const resCerta = event.target
}
if (resCerta.dataset.correto) {
    document.body.classList.add("correto")  // função criada para capturar a resposta certa e foi criado uma função para selecionar as respostas certas e erradas para mudarem as cores//
    totalCorreta++}
    else {
        document.body.classList.add("incorreto")
    }

    document.querySelectorAll(".respostas").forEach(button) => {
        if (button.dataset.correto) {
            button.classList.add("correto")
        } else {
            button.classList.add("incorreto")
        }
        button.disabled = true
    
    }