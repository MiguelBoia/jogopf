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
    
    document.body.removeAttribute("class")
    _proPergunta.classList.add("hide")

    if (perguntas.length === currentQuestionIndex) { return fimGame()}


_alertaMensagem.textContent = perguntas[currentQuestionIndex].pergunta // dentro do textContent pegou as perguntas atuais do index// 
perguntas[currentQuestionIndex].respostas.forEach(respostas=> {

    const resB = document.createElement("button")
    resB.classList.add("button", "respostas")
    resB.textContent = respostas.text
    if (respostas.correto) {resB.dataset.correto = respostas.correto}
    _centroPerguntas.appendChild(resB)
    
    resB.addEventListener("click", seleçãoPerguntas)

})}
function seleçãoPerguntas(event) {
    const resCerta = event.target

if (resCerta.dataset.correto) {
    document.body.classList.add("correto")  // função criada para capturar a resposta certa e foi criado uma função para selecionar as respostas certas e erradas para mudarem as cores//
    totalCorreta++}
    else {
        document.body.classList.add("incorreto")
    }

    document.querySelectorAll(".respostas").forEach(button => {
        if (button.dataset.correto) {
            button.classList.add("correto")
        } else {
            button.classList.add("incorreto")
        }
        button.disabled = true
    
    })
    _proPergunta.classList.remove("hide")
currentQuestionIndex++;
}


const perguntas = [
    {
        pergunta: " Em que dia se comemora o dia mundial da mulher?",
        respostas: [
            { text: "10 de junho", correto: false },
            { text: "8 de março", correto: true },
            { text: "20 de março", correto: false },
            { text: "8 de abril", correto: false }
        ]
    },

    {
        pergunta: " Que nome se dá ao medico especializado em crianças?",
        respostas: [
            { text: "Ortopedia", correto: false },
            { text: "Pediatra", correto: true },
            { text: "Patologia", correto: false },
            { text: "Angiologia", correto: false }
        ]

    },

    {
        pergunta: " O mílesimo gol de Pelé foi marcado em?",
        respostas: [
            { text: "tiro de meta", correto: false },
            { text: "lance normal", correto: false },
            { text: "cobrança de falta", correto: false },
            { text: "cobrança de penalti", correto: true }
        ]
    },

    {
        pergunta: " Como são chamados as pessoas que vivem no Pólo Ártico?",
        respostas: [
            { text: "esquimos", correto: true },
            { text: "ayoreo", correto: false },
            { text: "ratanabá", correto: false },
            { text: "polares", correto: false }
        ]
    },

    {
        pergunta: " O que Cristovão Colombo procurava quando descobriu a América?",
        respostas: [
            { text: "o caminho para o fim do mar", correto: false },
            { text: "o caminho para a Africa", correto: false },
            { text: "o caminho para as Índias", correto: true },
            { text: "o caminho para o Japão feudal", correto: false }
        ]
    },
    {
        pergunta: " Em qual local os humanos vivem?",
        respostas: [
            { text: "Planeta Marte", correto: false },
            { text: "Planeta Terra", correto: true },
            { text: "Planeta Saturno", correto: false },
            { text: "Estrela Sol", correto: false }
        ]
    },
   
    {
        pergunta: " Qual o plural de  Beija-flor?",
        respostas: [
            { text: "beijas-flor", correto: false },
            { text: "beija-flores", correto: true },
            { text: "beijas-flores", correto: false },
            { text: "beijar-flores", correto: false }
        ]
    },
    {
        pergunta: " Personagem bíblico famoso por ter sua força provinda dos cabelos?",
        respostas: [
            { text: "Sansão", correto: true },
            { text: "Pedro", correto: false },
            { text: "João", correto: false },
            { text: "Daniel", correto: false }
        ]
    },
    {
        pergunta: " Quais são os dois planetas do Sistema solar que não possuem satélites?",
        respostas: [
            { text: "Terra e Marte", correto: false },
            { text: "Terra Plutão", correto: false },
            { text: "Terra e Mercúrio", correto: false },
            { text: "Mercúrio e Vênus", correto: true }
        ]
    },
    {
        pergunta: " Em que esporte se destacou Éder Jofre?",
        respostas: [
            { text: "volei", correto: false },
            { text: "basquete", correto: false },
            { text: "Boxe", correto: true },
            { text: "futebol", correto: false }
        ]
    },
    {
        pergunta: " Qual o maior país da America Latina?",
        respostas: [
            { text: "Brasil", correto: true },
            { text: "Argentina", correto: false },
            { text: "Chile", correto: false },
            { text: "Uruguai", correto: false }
        ]
    },
    {
        pergunta: " Como se chamou o primeiro avião feito por Santos Dumont?",
        respostas: [
            { text: "Flyer III", correto: false },
            { text: "14 Bis", correto: true },
            { text: "15 Bis", correto: false },
            { text: "11 Bis", correto: false }
        ]
    },
    {
        pergunta: " Qual o plural de  calça cor-de-rosa?",
        respostas: [
            { text: "calças cores-de-rosas", correto: false },
            { text: "calças de rosas", correto: false },
            { text: "calças cor-de-rosa", correto: true },
            { text: "calça cor-de-rosas", correto: false }
        ]
    },
    {
        pergunta: " Qual a primeira emissora de TV inaugurada no Brasil?",
        respostas: [
            { text: "TV Tupi", correto: true },
            { text: "Globo", correto: false },
            { text: "SBT", correto: false },
            { text: "Globe", correto: false }
        ]
    },
    {
        pergunta: " Como se chama o defeito visual contrário à miopia?",
        respostas: [
            { text: "glaucoma", correto: false },
            { text: "hipermetropia", correto: true },
            { text: "conjuntivite", correto: false },
            { text: "catarata", correto: false }
        ]
    }, 
    
    {
        pergunta: " Quem instituiu os primeiros jogos olímpicos da era moderna?",
        respostas: [
            { text: "Barão de Anhumas", correto: false },
            { text: "Barão de Coubertain", correto: true },
            { text: "Lula", correto: false },
            { text: "Greta Thunberg", correto: false }
        ]
    },

{
    pergunta: "Em que ano ocorreu a revolução francesa?",
    respostas: [
        { text: "1889", correto: false },
        { text: "1792", correto: false },
        { text: "1789", correto: true },
        { text: "1650", correto: false }

    ]
},
{
    pergunta: "Quem foi Napoleão Bonaparte?",
    respostas: [
        { text: "Imperador alemão", correto: false},
        { text: "Imperador Brasileiro", correto: false },
        { text: "Imperador Romano", correto: false },
        { text: "Imperador Francês", correto: true }

    ]
},
{
    pergunta:"Quanto tempo durou o Império Romano?",
    respostas: [
        { text: "5 séculos", correto: true},
        { text: "10 séculos", correto: false },
        { text: "2 séculos", correto: false},
        { text: "12 séculos", correto: false}

    ]
    }, 
{
    pergunta:"Atualmente quantos elementos químicos da tabela periódica possui?",
    respostas: [
        { text: "120", correto:false},
        { text: "118", correto: true},
        { text: "95", correto: false},
        { text: "100", correto: false}
    ]



},
]



function fimGame() {
    const totalPerguntas = perguntas.length;
    const resultado = Math.floor((totalCorreta * 100) / totalPerguntas);
    
    

    _questõesContenção.innerHTML = `
      <p class="acabou"> Sua performace foi ${totalCorreta} de ${totalPerguntas} com ${resultado}% de acertos das questões!
      <button onclick=window.location.reload() class="button"> Refazer teste </button>
  `;
  } 