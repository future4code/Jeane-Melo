/*
**Exercícios de interpretação de código**

1. Leia o código abaixo. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

    ```jsx
    const bool1 = true
    const bool2 = false
    const bool3 = !bool2

    let resultado = bool1 && bool2
    console.log("a. ", resultado)

    //Saída no console: a. false

    resultado = bool1 && bool2 && bool3
    console.log("b. ", resultado)

    //Saída no console: b. false

    resultado = !resultado && (bool1 || bool1)
    console.log("c. ", resultado)

    //Saída no console: c. true

    console.log("e. ", typeof resultado)
    //Saída no console: e. Boolean

    ```

    

2.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

```jsx
let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

//As saídas no console para os itens a, b, c, d, e, f são:

a. Undefined
b. Null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9

```

**Exercícios de escrita de código**

1. Faça um programa que:
a. Pergunte a idade do usuário
b. Pergunte a idade do seu melhor amigo ou da sua melhor amiga

    Dica: não se esqueça de converter as respostas para o tipo número

    c. **Imprima na tela** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?",
     seguido pela resposta (`true` ou `false`). Para isso, use a variável criada no item (b) 
     para definir qual será a resposta.
    d. **Imprima na tela** a diferença de idade (não tem problema se sair um número negativo)*/

//Respostas para os itens a, b, c, d:
const idadeUsuario = Number(prompt("Qual a sua idade?"))
const idadeAmigo = Number(prompt("Qual a idade de seu melhor amigo?"))
console.log("Sua idade é maior do que a do seu melhor amigo? ", idadeUsuario > idadeAmigo )
console.log("A diferença de idade entre você e seu melhor amigo é: ", idadeUsuario - idadeAmigo)

/*2. Faça um programa que:
a. Peça ao usuário que insira um número **par**.

    Dica: não se esqueça de converter a resposta para o tipo número

    b. Imprima na tela **o resto da divisão** desse número por 2.
    c. Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    d. O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código*/

//Respostas para os itens a, b:

const numeroPar= Number(prompt("Digite um número par:"))
console.log("O resto da divisão de ", numeroPar, " por 2 é: ", numeroPar%2)

//Respostas para os itens c, d:
// Padrão para diversos número pares: O resto da divisão de um número par por 2 é sempre 0.
// Se o usuário fornecer um número ímpar, o resto da divisão dele por 2 será iguial a 1.

/*3. Faça um programa, seguindo os passos:
a. Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
c. Imprima o array na tela
d. Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
e. Remova da lista o item de índice que o usuário escolheu.
f. Imprima o array na tela */

//Respostas para os itens a, b, c, d , e, f: 
let listaDeTarefas =[]
listaDeTarefas[0]=prompt("Digite a sua primeira tarefa deste dia:")
listaDeTarefas[1]=prompt("Digite a sua segunda tarefa deste dia:")
listaDeTarefas[2]=prompt("Digite a sua terceira tarefa deste dia:")
console.log("Suas três tarefas de hoje são:", listaDeTarefas[0], listaDeTarefas[1], listaDeTarefas[2])
const indice= Number(prompt("Digite o índice - 0, 1 ou 2, da tarefa que você já realizou: "))
listaDeTarefas.splice(indice,1)
console.log("Restam as seguintes tarefas para serem realizadas: ", listaDeTarefas)

/*4. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, 
imprima na tela a seguinte mensagem:

    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`! */

//Respostas: 
const nomeDoUsuario = prompt("Digite o seu nome:")
const emailDoUsuario = prompt("Digite o seu email")
let mensagem = "O email " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o) " + nomeDoUsuario +"!"
console.log (mensagem) 

    
/*DESAFIOS: Todos os exercícios aqui são de escrita de código! 

1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de 
temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:
    - Graus Fahrenheit(°F) para Kelvin(K)

        ```
        (KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
        ```

    - Graus Celsius(°C) para Graus Fahrenheit (°C)

        ```
        (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32
        ```

    a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

    b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.

    c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.

    d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.*/

//Respostas para os itens a, b, c e d:
let grausKelvinA = ((77-32)*5/9) + 273.15
console.log("a. 77 graus Fahrenheit equivalem a ", grausKelvinA, "K")
let grausFahrenheitB = (80*9/5) + 32
console.log("b. 80 graus celsius equivalem a ", grausFahrenheitB, "°F")
let grausFahrenheitC = (30*9/5) + 32
let grausKelvinC = ((grausFahrenheitC-32)*5/9) + 273.15
console.log("c. 30 graus celsius equivalem a ", grausFahrenheitC, "°F", " e ", grausKelvinC, "K")
const grausCelsiusD = Number(prompt("Digite o valor em graus célisius que deseja converter:"))
let grausFahrenheitD = (grausCelsiusD*9/5) + 32
let grausKelvinD = ((grausFahrenheitD-32)*5/9) + 273.15
console.log("d. ", grausCelsiusD, " graus celsius equivalem a ", grausFahrenheitD, "°F", " e ", grausKelvinD, "K")

/*2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o 
consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia 
custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.

    a. Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora;

    b. Altere o programa para receber mais um valor: a porcentagem de desconto. 
    Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto.*/
//Respostas para todas as solicitações dos itens a e b:
const consumoResidencia1 = 280
const custokwh = 0.05
const percentualResidencia1 = 15

console.log("O valor a ser pago por uma residência que consome 280 quilowatt-hora é: R$", consumoResidencia1*custokwh)

let custoResidencia1ComDesconto = (consumoResidencia1*custokwh) - ((consumoResidencia1*custokwh)*percentualResidencia1/100)
console.log("O valor a ser pago por uma residência que consome 280 quilowatt-hora com desconto de 15% é: R$", custoResidencia1ComDesconto)

const consumoResidencia2= Number(prompt("Digite a quantidade de quilowatt-hora que sua residência consumiu:"))
console.log("O valor a ser pago por uma residência que consumiu ", consumoResidencia2, " quilowatt-hora é: R$", consumoResidencia2*custokwh)

const descontoResidencia2 = Number(prompt("Digite o valor do percentual de desconto que você recebeu: "))
let custoResidencia2ComDesconto = (consumoResidencia2*custokwh) - ((consumoResidencia2*custokwh)*descontoResidencia2/100)
console.log("O valor a ser pago por uma residência que consumiu ", consumoResidencia2, " quilowatt-hora com desconto de ", descontoResidencia2, " é: R$", custoResidencia2ComDesconto)

/*3. Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para
 representar a mesma coisa. Por exemplo, para representar a Massa de um corpo, podemos usar 
 quilograma (kg), onça (oz) e até libra (lb). Para representar Distâncias, existem metro (m), 
 pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). 
 Dada essa introdução, faça o que se pede:

    a. Procure uma forma de converter libra (lb) para quilograma (kg) e escreva 
    um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
    `20lb equivalem a X kg`*/

//Resposta: Medida de conversão: 1lb = 0,454kg
 const valorDadoLb = 20
 const valorLidoLb = Number(prompt("Digite um valor em libras:"))
 console.log(valorDadoLb, "lb equivalem a ", valorDadoLb * 0.454, " kg")
 console.log(valorLidoLb, "lb equivalem a ", valorLidoLb * 0.454, " kg")

 /*  b. Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa 
    que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
    `10.5oz equivalem a X kg`*/
    
//Resposta: Medida de Conversão:  1oz = 0.0283 *kg
 const valorDadoOz = 10.5
 const valorLidoOz = Number(prompt("Digite um valor em onças:"))
 console.log(valorDadoOz, "oz equivalem a ", valorDadoOz*0.0283, " kg")
 console.log(valorLidoOz, "oz equivalem a ", valorLidoOz*0.0283, " kg")

 /*
    c. Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que
     converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
    `100mi equivalem a X m` */

// Resposta: Medida de Conversão: 1mi = 1609,344m
 const valorDadoMi = 100
 const valorLidoMi = Number(prompt("Digite um valor em milhas:"))
 console.log(valorDadoMi, "mi equivalem a ", valorDadoMi*1609.344, " m")
 console.log(valorLidoMi, "mi equivalem a ", valorLidoMi*1609.344, " m")


 /*
    d. Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que
     converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
    `50ft equivalem a X m`
    */
//Resposta: Medida de Conversão: 1ft= 0.305m
 const valorDadoFt = 50
 const valorLidoFt = Number(prompt("Digite um valor em pés (ft):"))
 console.log(valorDadoFt, "ft equivalem a ", valorDadoFt*0.305, " m")
 console.log(valorLidoFt, "ft equivalem a ", valorLidoFt*0.305, " m")

  /*  e. Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que
     converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
    `103.56gal equivalem a X l` */

//Resposta - medida de conversão: 1gal = 3.785l
 const valorDadoGal = 103.56
 const valorLidoGal = Number(prompt("Digite um valor em galões (gal):"))
 console.log(valorDadoGal, "gal equivalem a ", valorDadoGal*3.785, " l")
 console.log(valorLidoGal, "gal equivalem a ", valorLidoGal*3.785, " l")
 
   /* f. Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que
     converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
    `450 xic equivalem a X l` */

// Resposta: Medida de Conversão: 1xic = 0.24l
 const valorDadoXic = 450
 const valorLidoXic = Number(prompt("Digite a quantidade de xícaras (xic):"))
 const respostaStringDado = valorDadoXic + " xic equivalem a " + (valorDadoXic*0.24) + " l"
 const respostaStringLido = valorLidoXic + " xic equivalem a " + (valorLidoXic*0.24) + " l"
 console.log(respostaStringDado)
 console.log(respostaStringLido)

  /*  g. Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça 
    ao usuário o valor da unidade original antes de converter.*/
    //Resposta: Esta opção foi dada em todos os itens. 
    //No item "f" a resposta foi dada montando a string de resposta em uma variável antes de usar o console.log