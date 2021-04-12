/**
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


let somaUsuario = 0
let somaComputador =0
let respostaUsuario 
let respostaComputador 
let confirmeCartasU = ""
let confirmeCartasC = ""
let valor1Usuario =0
let valor2Usuario = 0
let valor1Computador = 0
let valor2Computador = 0
let controleJogo = true
let cartasUsuario = []
let cartasComputador = []
let textoConfirmacao = " "
let textoComputador = " "
let textoGanhador = " "
let controleI = 0
let controleJ = 0

console.log("Bem vindo ao jogo de Blackjack!")

// while (controleJogo) {

   if(confirm("Quer iniciar uma nova rodada?")) {
      respostaUsuario = ""
      respostaComputador = ""
      
      //Resposta do item 8 do desafio
      const carta1Usuario = comprarCarta(); 
      const carta2Usuario = comprarCarta(); 
      while ((carta1Usuario.valor === 11) && (carta2Usuario.valor === 11)) {
         const carta1Usuario = comprarCarta(); 
         const carta2Usuario = comprarCarta();
      }
      const carta1Computador = comprarCarta(); 
      const carta2Computador = comprarCarta(); 
      while ((carta1Computador.valor === 11) && (carta2Computador.valor === 11)) {
         const carta1Computador = comprarCarta(); 
         const carta2Computador = comprarCarta();
      }
      somaUsuario = carta1Usuario.valor + carta2Usuario.valor
      somaComputador = carta1Computador.valor + carta2Computador.valor
     
      //Resposta do item 9 do desafio
      confirmeCartasU = confirmeCartasU + carta1Usuario.texto + " " + carta2Usuario.texto 
      confirmeCartasC = confirmeCartasC + carta1Computador.texto + " " + carta2Computador.texto 
      textoConfirmacao = "Suas cartas são " + confirmeCartasU +". A carta revelada do computador é "+ carta1Computador.texto + "."
      while (confirm(
         textoConfirmacao +
         "\n"+  // \n faz pular a linha
         "Deseja comprar mais uma carta?"
      ) && (somaUsuario <= 21)) {
            cartasUsuario[controleI] = comprarCarta()
            somaUsuario = somaUsuario + cartasUsuario[controleI].valor
            textoConfirmacao = " "
            confirmeCartasU = confirmeCartasU + " " + cartasUsuario[controleI].texto
            textoConfirmacao = "Suas cartas são " + confirmeCartasU +". A carta revelada do computador é "+ carta1Computador.texto + "."
            controleI += 1
      }
      while ((somaComputador < somaUsuario) && (somaComputador <= 21)){
         cartasComputador[controleJ] = comprarCarta()
         somaComputador = somaComputador + cartasComputador[controleJ].valor
         confirmeCartasC = confirmeCartasC + " " + cartasComputador[controleJ].texto
         controleJ+=1
      }
      if ((somaUsuario<= 21) && (somaComputador <= 21)){
         if (somaUsuario > somaComputador) {
            textoGanhador = "Você ganhou!"
         } else if (somaUsuario < somaComputador) {
            textoGanhador = "O computador ganhou!"
         } else {
            textoGanhador = "Empate!"
         }

      }
      if ((somaUsuario > 21) || (somaComputador > 21)){
         if (somaUsuario <= 21 ) {
            textoGanhador = "Você ganhou!"
         } else if (somaComputador <= 21 ) {
            textoGanhador = "O computador ganhou!"
         } else {
            textoGanhador = "Empate!"
         }

      }
      respostaUsuario = " Suas cartas são " + confirmeCartasU + " . Sua pontuação é " + somaUsuario + ". \n"
      respostaComputador = "As cartas do computador são  " + confirmeCartasC + " . A pontuação do computador é " + somaComputador + ". \n"
      
      alert( respostaUsuario + respostaComputador + textoGanhador )
   }


   

console.log("O jogo acabou!")
