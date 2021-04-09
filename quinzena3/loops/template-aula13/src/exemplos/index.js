/*
- **ENUNCIADO**

    **Exercícios de interpretação de código**

    EXERCÍCIO 1

    O que o código abaixo está fazendo? Qual o resultado impresso no console?

    ```jsx
    let valor = 0
    for(let i = 0; i < 5; i++) {
      valor += i
    }
    console.log(valor)
    ```

// Resposta Exercício 1:
A variável valor é inicializada com 0.
No for a variável i é inicializada com 0 e vai ser incrementada de 1 em 1 até alcançar 
o valor 4 (ou seja, menor que 5)
Dentro do for a variável valor vai acumular a soma de todos os i´s, conforme indicado por
valor=valor + i
Como o i varia de 0 a 4 teremos:
valor = 0+1+2+3+4 = 10
Assim, será exebido na tela o valor 10.


EXERCÍCIO 2

    Leia o código abaixo:

    ```jsx
    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
      if (numero > 18) {
    		console.log(numero)
    	}
    }
    ```

    a. O que vai ser impresso no console?

    b. Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` 
    é suficiente? Se sim, o que poderia ser usado para fazer isso?

// Respostas Exercício 2
 a. Serão exibidos os valores maiores que 18, ou seja: 
 19 21 23 25 27 30

 b. O `for...of...` facilita percorrer os elementos do array. Com os comandos que vimos até agora, 
 se quizermos saber qual o íncide de um elemento podemos usar o 'for(let i = 0;...' assim ao
 acessarmos array[i] saberemos o elemento que está nessa posição e o índice que será, nesse caso, a variável 'i'. 

 DESAFIO 1

        Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ? 

        ```jsx
        const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
        let quantidadeAtual = 0
        while(quantidadeAtual < quantidadeTotal){
          let linha = ""
          for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
            linha += "0"
          }
          console.log(linha)
          quantidadeAtual++
        }

        ```
// Resposta do DESAFIO 1

Se o usuário digitar 4, a constante quantidadeTotal receberá o número 4. 
O while irá executar a instrução dentro de seu escopo para quantidadeAtual 
variando de 0 até 3 (valor menor que 4).
quantidadeAtual delimita o número de vezes que o for vai executar, e este, basicamente,
vai colocar zeros na string linha. lembrando que a linha é "zerada" a cada iteração do while.
Assim sairá no console:

0
00
000
0000

**Exercícios de escrita de código**

    EXERCÍCIO 3

    Nas perguntas abaixo, considere que você tenha acesso a um `array`  (chamado de 'array original') 
    que seja composto somente de números. Após o enunciado, há um exemplo de qual deve ser a 
    resposta final de cada programa individualmente.

    a. Escreva um programa que:

    - **Imprima** cada um dos valores do array original.

    b. Escreva um programa que:

    - **Imprima** cada um dos valores do array original divididos por 10

    c. Escreva um programa que:

    - **Crie** um novo array contendo, somente, os números pares do array original.
    - **Imprima** esse novo array

    d. Escreva um programa que:

    - **Crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`"
    - **Imprima** este novo array

    e. Escreva um programa que imprima no console o maior e o menor números contidos no array original

    - Dica

        Você deve criar variáveis para guardar o `valorMaximo` e o `valorMinimo`. 
        Inicialize a variável `valorMaximo` com um valor que não seja maior que qualquer 
        valor do array original e a `valorMinimo` com um valor que não seja menor que qualquer
        valor do array original.

    Exemplos do que o código tem que fazer em cada item:

    ```jsx
    // Este array será usado para exemplificar as respostas de todos os itens
    const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

    // Resposta item a.
    80
    30
    130
    40
    60
    21
    70
    120
    90
    103
    110
    55
    */

    //Código para o Exercício 3, item a :
  const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    for(let i = 0; i < array.length; i++) {
        console.log(array[i])
    } 

/*
    // Resposta item b.
    8
    3 
    13
    4
    6
    2.1
    7 
    12
    9
    10.3
    11 
    5.5
*/
//Código para o Exercício 3, item b :
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    for(let i = 0; i < array.length; i++) {
        console.log((array[i]/10))
    } 

   
    /* // Resposta item c.
    [80, 30, 130, 40, 60, 70, 120, 90, 110] */

//Código para o Exercício 3, item c :
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let j = 0
let arrayPares = []
    for(let i = 0; i < array.length; i++) {
        if ((array[i]%2) === 0) {
            arrayPares [j] = array[i]
            j++
        }
    }
    console.log(arrayPares)

   /* // Resposta item d.
    [ 'O elemento do índex 0 é 80',
      'O elemento do índex 1 é 30',
      'O elemento do índex 2 é 130',
      'O elemento do índex 3 é 40',
      'O elemento do índex 4 é 60',
      'O elemento do índex 5 é 21',
      'O elemento do índex 6 é 70',
      'O elemento do índex 7 é 120',
      'O elemento do índex 8 é 90',
      'O elemento do índex 9 é 103',
      'O elemento do índex 10 é 110',
      'O elemento do índex 11 é 55' ]
      */
  //Código para o Exercício 3, item d:
 const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    for(let i = 0; i < array.length; i++) {
        if (i===0) {
            console.log("[ " + array[i] +",")
        } else if (i=== (array.length - 1)) {
            console.log(array [i] + "]")
        } else {
            console.log(array[i] + ",")
        }
    }

/*    // Resposta e.
    "O maior número é 130 e o menor é 21"

    ``` */

//Código para o Exercício 3, letra e:
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior= array[0]
let menor= array[0]
    for(let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        } 
        if (array[i] < menor) {
            menor = array[i]   
        }
    }
console.log ("O maior número é " + maior + " e o menor  é " + menor)

/*
- **DESAFIOS**

    DESAFIO 1

    Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que e
    stou pensando". Ele deve ser jogado entre duas pessoas. Inicialmente, uma das pessoas insere 
    qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o 
    número. Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a 
    outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si. 
    Veja, abaixo, um exemplo de partida:

    ```
    Vamos jogar!
    O número chutado foi: 3
    Errrrrrrrou, é maior
    O número chutado foi: 18
    Errrrrrrrou, é menor
    O número chutado foi: 15
    Errrrrrrrou, é menor
    O número chutado foi: 11
    Acertou!!
    O número de tentativas foi: 4 

    ```

    Um resumo das funcionalidades são:

    - Solicitar que o primeiro jogador escolha um número, através do `prompt`. 
    Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`
    - A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar,
     através do `prompt`. A cada chute, deve ser informado no console:
        - O número chutado, com a mensagem: `O número chutado foi: <número>`
        - Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado:
         `Errou. O número escolhido é maior/menor`
    - Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser
     impressa a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi : 
     <quantos chutes o usuário deu>`
    - OBS

        Vocês tem a liberdade para serem 100% criativos quanto às mensagens deste exercício, 
        mas lembrem-se de cobrir todos os casos pedidos! */

//Resposta DESAFIO 1
const numeroJogador1 = Number(prompt("Escolha um número"))
let contadorDeChutes = 0
console.log("Vamos Jogar!")
let chuteJogador2 = Number(prompt("Adivinhe o número do Jogador1"))
while (chuteJogador2 !== numeroJogador1) {
    contadorDeChutes+=1
    console.log("O número chutado foi: " + chuteJogador2)
    if (numeroJogador1 > chuteJogador2) {
        chuteJogador2 = Number(prompt("Errou! O número escolhido é maior! Digite um novo número"))
    } else if (numeroJogador1 < chuteJogador2) {
        chuteJogador2 = Number(prompt("Errou! O número escolhido é menor! Digite um novo número"))
    }
}
console.log("Acertou! O número é " + numeroJogador1)
console.log("O número de tentativas foi: " + contadorDeChutes)


/*   DESAFIO 2

    Uma das principais características de uma boa pessoa programadora é conseguir 
    resolver seus problemas independentemente. Queremos que você comece a treinar isso a partir 
    de hoje! Então, vamos pedir para que você faça uma alteração no código acima. Agora, ao invés 
    de ter 2 jogadores, haverá um só; e o seu adversário será o computador. A ideia é: ao iniciar o 
    jogo, você deve sortear um número aleatório (entre 1 e 100) e o usuário terá que ficar chutando 
    o valor até acertar. Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.

    Quando resolver o exercício, pare e faça a seguinte reflexão: foi fácil fazer esta alteração? 
    O que você poderia ter feito para que fosse mais fácil? **Deixe comentários no seu código sobre 
    esta reflexão.**

    Abaixo, há uma referência que explica como sortear um número em Javascript

    `EN`

    [JavaScript random() Method](https://www.w3schools.com/jsref/jsref_random.asp)

    `PT`

    [Math.random()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random) */


//Resposta do DESAFIO 2
//O código funciona e a alteração foi bastante fácil! Apenas usei a função sugerida na atribuição de 
//valor na constante numeroJogador1 (primeira linha do código), 
// no momento não me ocorre nada mais fácil que isso! :D :D    
const numeroJogador1 = Math.floor((Math.random() * 100) + 1)
let contadorDeChutes = 0
console.log("Vamos Jogar!")
let chuteJogador2 = Number(prompt("Adivinhe o número do Jogador1"))
while (chuteJogador2 !== numeroJogador1) {
    contadorDeChutes+=1
    console.log("O número chutado foi: " + chuteJogador2)
    if (numeroJogador1 > chuteJogador2) {
        chuteJogador2 = Number(prompt("Errou! O número escolhido é maior! Digite um novo número"))
    } else if (numeroJogador1 < chuteJogador2) {
        chuteJogador2 = Number(prompt("Errou! O número escolhido é menor! Digite um novo número"))
    }
}
console.log("Acertou! O número é " + numeroJogador1)
console.log("O número de tentativas foi: " + contadorDeChutes)