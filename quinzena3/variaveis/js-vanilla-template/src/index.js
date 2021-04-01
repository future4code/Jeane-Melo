/*

Análise de código:

Questão 1:
Programa:
a = 10
b = 10

console.log(b)

b = 5
console.log(a, b)
Análise:
As variáveis a e b receberão o valor 10.
o primeiro console.log(b), portanto, vai imprimir o valor 10 na tela.
Em seguida a variável b recebe um novo valor: 5.
Assim o console.log(a,b) vai imprimir na tela os valores 10 e 5.

Questão 2:

Programa:

a = 10
b = 20
c = a
b = c
a = b

console.log(a, b, c)

Análise: 
a recebe 10 e b recebe 20. c=a, ou seja, c=10. b recebe c, ou seja, b recebe 10. Finalmente, a recebe b, 
logo a recebe 10. 
Assim, console.log(a,b,c) irá imprimir na tela: 
10 10 10

Escrita de código:
Questão 1:

1. Construa um programa, seguindo os seguintes passos:

    a) Declare uma variável para armazenar um nome, sem atribuir um valor.

    b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

    c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.

    d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

    d) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

    Dica: se você receber um erro de código nessa etapa, reflita sobre o tipo de declaração que utilizou.

    e) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

    f) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu

    Dica: para imprimir mais de um valor na mesma linha, você pode usar essa sintaxe:
    `console.log(valor1, valor2)`
*/

let armazenaNome
console.log(typeof(armazenaNome));
let armazenaIdade
console.log(typeof(armazenaIdade));

/* Em ambos os casos a mensagem retornada no console foi undefined, o motivo é que nenhum valor foi atribuído
a essas variáveis e o tipo de cada uma delas só será definido na atribuição de um valor. */

armazenaNome = prompt("Qual o seu nome?");
console.log(armazenaNome);
console.log(typeof(armazenaNome));
armazenaIdade = prompt("Qual a sua idade?");
console.log(armazenaIdade);
console.log(typeof(armazenaIdade));

/*Neste caso, o tipo de ambas as variáveis armazenaNome e armazenaIdade foi string. Imagino que armazenaIdade 
seria tratada como um número em uma operação aritmética, mas, lendo do teclado, a resposta vai ser string para 
sequência de caracteres, sejam letras ou números */

console.log("Olá ", armazenaNome, "você tem ", armazenaIdade, "anos!" );

/* o comando acima retornou corretamente os valores de entrada, assim, aqui termina a Questão 1*/

/* Questão 2
2. Faça um programa que faça 5 perguntas para o usuário (pode ser criativo aqui). Imprima-as com as respostas no console da seguinte forma:

    ```
    1. Qual o seu endereço?
    Resposta: Rua ABC, 123

    2. Qual a sua cor favorita?
    Resposta: Azul 

    ```*/

armazenaQuestao1 = prompt("Você prefere dia ou noite?");
armazenaQuestao2 = prompt("Qual a sua comida predileta?");
armazenaQuestao3 = prompt("Qual país você gostaria de conhecer?");
armazenaQuestao4 = prompt("Qual sua música você considera a trilha sonora de sua vida?");
armazenaQuestao5 = prompt("Qual o nome da pessoa com a qual você gostaria de viajar?");

console.log("1. Você prefere dia ou noite?");
console.log("Resposta: ", armazenaQuestao1);
console.log("2. Qual a sua comida predileta?");
console.log("Resposta: ", armazenaQuestao2);
console.log("3. Qual país você gostaria de conhecer?");
console.log("Resposta: ", armazenaQuestao3);
console.log("4. Qual sua música você considera a trilha sonora de sua vida?");
console.log("Resposta: ", armazenaQuestao4);
console.log("5. Qual o nome da pessoa com a qual você gostaria de viajar?");
console.log("Resposta: ", armazenaQuestao5);



/*Questão 3:
 3. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável.
   Em seguida, siga os passos:

    a) Imprima na tela o array completo

    b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", 
    seguida por cada uma das comidas, **uma embaixo da outra**.

    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
    Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista*/
    
let array = ["chocolate", "coxinha", "paella", "abacaxi", "camarão"];
console.log (array[0], array[1], array[2], array[3], array[4]);

console.log ("Essas são minhas comidas preferidas:")
console.log (array[0], "\n", array[1], "\n", array[2], "\n", array[3], "\n", array[4]);

array[1] = prompt ("Qual a sua comida preferida?");
console.log ("Nova lista: ");
console.log (array[0], "\n", array[1], "\n", array[2], "\n", array[3], "\n", array[4]);

/* Questão 4:
4. Faça um programa que contenha um array com 3 perguntas de Sim ou Não, armazenado em uma variável. 
Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

    a) Crie uma nova variável, contendo um array com as respostas. Utilize o tipo booleano para cada resposta.

    b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:

    ```
    "Você está usando uma roupa azul hoje?" true
    ```
    */
   
   arrayPerguntas = ["Você gosta de viajar? ", "Você gosta de caminhar? ", "Sua cor predileta é o azul?"];

   console.log("Responda as questões a seguir com sim ou não")

   let arrayRespostas=[false, false, false]
   arrayRespostas[0]= prompt (arrayPerguntas[0]);
   arrayRespostas[1]= prompt (arrayPerguntas[1]);
   arrayRespostas[2]= prompt (arrayPerguntas[2]);

   console.log(arrayPerguntas[0], (arrayRespostas[0]=="sim"), "\n", arrayPerguntas[1], (arrayRespostas[1]=="sim"), "\n", arrayPerguntas[2], (arrayRespostas[2]=="sim"));

   
