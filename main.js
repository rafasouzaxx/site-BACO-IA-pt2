const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Vocẽ curte Baco Exu do Blues?",
        alternativas: [
            {
                texto: "Sim, com certeza!",
                afirmacao: "Sim, eu acredito que as músicas dele tem sentimento envolvido"
            },
            {
                texto: "Não, não curto muito!",
                afirmacao: "Não, são músicas superficiais (músicas para transar)"
            }
        ]
    },
    {
        enunciado: "O que vocẽ acha sobre o álbum EXU?",
        alternativas: [
            {
                texto: "Muito bom! ",
                afirmacao: "Álbum cheio de inclusões"
            },
            {
                texto: "Horrível",
                afirmacao: "Muitos xingamentos"
            }
        ]
    },
    {
        enunciado: "O que acha sobre o artista em si?",
        alternativas: [
            {
                texto: "Daora",
                afirmacao: "O cantor em suas redes aparenta ser muito humilde"
            },
            {
                texto: "Deselegante",
                afirmacao: "Muito militante"
            }
        ]
    },
    {
        enunciado: "Vocẽ gostou de seu ultimo lançamento?, o álbum FETICHE",
        alternativas: [
            {
                texto: "Gostei Muito",
                afirmacao: "Exitante"
            },
            {
                texto: "Muito ruim",
                afirmacao: "Não transo / broxo"
            }
        ]
    },
    {
        enunciado: "Vocẽ considera Baco Exu do Blues um bom artista?",
        alternativas: [
            {
                texto: "Elegante",
                afirmacao: "Musicas muito boas"
            },
            {
                texto: "Broxa",
                afirmacao: "Baco broxa"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O que vocẽ acha do BACO";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "Broxa";
}

mostraPergunta();