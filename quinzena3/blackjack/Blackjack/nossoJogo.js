/*
*
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

   /* **Regras do jogo 📖**

    As regras do jogo são as seguintes:
    
    - Existem 2 jogadores: o usuário e o computador.
    - Os jogadores usam um baralho com muitas cartas. 
    As cartas têm um número (A, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,J ,Q ,K) e um naipe 
    (Copas (♥️), Paus (♣️), Ouros(♦️) e Espadas(♠️)). Por exemplo, uma carta do baralho
     é o dois de Paus (2♣️). Existem 52 possibilidades de cartas diferentes (13 números e 4 naipes).
    - Os jogadores compram cartas do baralho. Ao comprar uma carta do baralho, 
    ela pode ser de qualquer uma das 52 cartas, com probabilidade igual.
    - As cartas tem um valor de acordo com seu número (a carta 4♣️ tem valor 4, e 
      a carta 9♦️ tem valor 9). As cartas J, Q e K tem valor 10, e a carta A tem valor 11.
    - O jogo inicia com cada jogador (usuário e computador) recebendo 2 cartas. 
    A pontuação de cada jogador é a soma do valor das suas cartas.
    - O jogador com a maior pontuação ganha a rodada.
    
    **Montando o jogo 🎰** 
    
    Essa etapa do projeto consiste em criar um programa que:
    
    1 - Imprime uma mensagem no console "Bem vindo ao jogo de Blackjack!".
    
    2 - Envia um `confirm`, perguntando ao usuário: "Quer iniciar uma nova rodada?".
    
    - Dica (clique para ver)
    
        `confirm` é um comando que cria uma caixa com dois botões: `ok` e `cancelar`, permitindo fazer 
        perguntas de "sim" e "não". Caso o usuário responda sim (`ok`) o comando devolve o valor `true`, 
        caso contrário, devolve `false`. Desta forma, podemos usar condicionais para decidir o que fazer 
        em cada caso
    
        ```jsx
        if(confirm("pergunta de sim ou não")) {
           // o que fazer se o usuário clicar "ok"
        } else {
           // o que fazer se o usuário clicar "cancelar"
        }
        ```
    
    3 - Se o usuário responder `cancel`, imprime uma mensagem no console "O jogo acabou".
    
    4 - Se o usuário responder `Ok`, o programa deve iniciar uma nova rodada. 
    
    **Começando uma rodada 🃏**
    
    A rodada consiste em sortear 2 cartas para cada jogador, definir a
     pontuação de cada jogador e informar o vencedor (usuário ou computador), 
     ou empate, caso as pontuações sejam iguais.
    
    5 - Nós preparamos um método que permite sortear uma carta. 
    Ela vem com um **texto** que representa o que é escrito na carta; 
    e um **valor** que mostra a pontuação da carta. 
    
    - Dica (clique para ver)
    
        ```jsx
        const carta = comprarCarta(); 
        // Sorteia uma carta. Por exemplo, o rei de ouros
    
        console.log(carta.texto) 
        // imprime o texto da carta. Nesse caso: "K♦️"
    
        console.log(carta.valor) 
        // imprime o valor da carta (um número). Nesse caso: 10)
        ```
    
    6 - O programa deve mostrar, no console, as cartas e pontuação de cada 
    jogador no formato mostrado abaixo
    
    ```jsx
    "Usuário - cartas: Q♣️ 10♣️  - pontuação 20" 
    "Computador - cartas: Q♣️ 10♣️  - pontuação 20"
    ```
    
    7 - Além disso, deve indicar o vencedor ou um empate
    
    ```jsx
    "Empate!"
    "O usuário ganhou!"
    "O computador ganhou!"
    ```  */


let somaUsuario = 0
let somaComputador =0
let respostaUsuario 
let respostaComputador 
let valor1Usuario =0
let valor2Usuario = 0
let valor1Computador = 0
let valor2Computador = 0
let controleJogo = true

console.log("Bem vindo ao jogo de Blackjack!")

while (controleJogo) {

   if(confirm("Quer iniciar uma nova rodada?")) {
      respostaUsuario = ""
      respostaComputador = ""
      const carta1Usuario = comprarCarta(); 
      const carta2Usuario = comprarCarta(); 
      const carta1Computador = comprarCarta(); 
      const carta2Computador = comprarCarta(); 

      console.log(carta1Usuario.valor)
      console.log(carta2Usuario.valor)
      console.log(carta1Computador.valor)
      console.log(carta2Computador.valor)

      somaUsuario = carta1Usuario.valor + carta2Usuario.valor
      somaComputador = carta1Computador.valor + carta2Computador.valor
      respostaUsuario = "Usuário - cartas: " + carta1Usuario.texto + " " + carta2Usuario.texto + " - pontuação " + somaUsuario
      respostaComputador = "Computador - cartas: " + carta1Computador.texto + " " + carta2Computador.texto + " - pontuação " + somaComputador
      console.log(respostaUsuario)
      console.log(respostaComputador)

      if (somaUsuario > somaComputador) {
         console.log("O usuário ganhou!")
      } else if (somaUsuario < somaComputador){
         console.log("O computador ganhou!")
      } else {
         console.log("Empate!")
      }

   } else {
      controleJogo = false
      console.log("O jogo acabou!")
   }
}
  