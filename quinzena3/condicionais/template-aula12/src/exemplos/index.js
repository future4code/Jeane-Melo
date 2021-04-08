/*
**Exercícios de interpretação de código**

EXERCÍCIO 1

Leia o código abaixo:

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
```

Explique o que o código faz. Qual o teste que ele realiza? Para que tipos de números ele imprime no console "Passou no teste"? Para que tipos de números a mensagem é "Não passou no teste"? 

// Resposta:
O Código lê a respostaDoUsuario do console e transforma o seu tipo em número. Em seguida,
no condicional, ele testa se o resto da divisão deste número por 2 é zero (ou seja, se o 
    número é par). Se for, ele imprime na tela "Passou no teste.", se não ele vai impprimir 
    "Não passou no teste."

EXERCÍCIO 2

O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de 
um supermercado. Veja abaixo:

```jsx
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
```

a. Para que serve o código acima?

//Resposta:
O código serve para imprimir na tela o preço das frutas: Laranja = 3.5; Maçã = 2.25; Uva = 0.30; Pêra = 5.5;
Qualquer outra fruta diferentes dessas o preço será 5.

b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//Resposta:
"O preço da fruta " Maçã " é " "R$ " 2.25

c. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se 
retirássemos o `break` que está logo acima do `default` 
(o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

//Resposta

Caso o break seja retirado, o programa seguirá para o próximo passo (no caso o default) e irá executá-lo.
Assim a mensagem que seguirá na tela é:
"O preço da fruta " Pêra " é " "R$ " 5

EXERCÍCIO 3

Leia o código abaixo:

```jsx
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
```

a. O que a primeira linha está fazendo?

// Resposta
Está solicitando ao usuário que digite o primeiro número, transformando este valor em número e 
armazenando este na constante denominada numero.

b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//Resposta
Se digitar 10 a mensagem do terminal será:
"Esse número passou no teste"
Essa mensagem é secreta!!!

Se o usuário digitar -10, como esse número não é maior que zero, a variável mensagem ficará indefinida. 
Como a variável mensagem foi definida dentro do escopo do if, 
ela não será reconhecida fora dele, retornando erro.


c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//Resposta
Haverá sim. Como a variável mensagem foi definida dentro do bloco do if, caso o valor digitado pelo usuário
seja menor ou igual a zero, a variável não será definida e não receberá valor algum, não sendo, portanto,
reconhecida fora do escopo do if. Assim, console.log(mensagem) dará um erro.

**Exercícios de escrita de código**

EXERCÍCIO 4

Vamos criar programas que lidem com entradas do usuário! Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

1. Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
2. Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
3. Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
*/
//Resposta Exercício 4
const idade = Number(prompt("Qual a sua idade?"))
if (idade >= 18){
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}

/*EXERCÍCIO 5

Agora faça um programa que verifica que turno do dia um aluno estuda. 
Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). 
Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`

- Exemplo

    Se o usuário digitar "V", a saída deve ser:

    ```
    "Boa Tarde!"
    ```
    
// Resposta Exercício 5
*/    
const turno = prompt ("Digite o turno no qual você estuda. Utilize M para matutino,  V para Vespertino ou N para Noturno")

if ((turno === "M") || (turno === "m") ) {
    console.log("Bom dia!")
} else if ((turno === "V") || (turno === "v")) {
    console.log("Boa tarde!")}
    else {
    console.log("Boa noite!")}
    
/*EXERCÍCIO 6

Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.
// Resposta */
const turno = String(prompt ("Digite o turno no qual você estuda. Utilize M para matutino,  V para Vespertino ou N para Noturno"))
       
switch  (turno) {
    case "M":
        console.log("Bom dia!")
        break;
    case "m":
        console.log("Bom dia!")
        break;
    case "V":
        console.log("Boa tarde!")
        break;
    case "v":
        console.log("Boa tarde!")
        break;
    case "N":
        console.log("Boa noite!")
        break;
    case "n":
        console.log("Boa noite!")
        break;
    default:
        console.log("Bom dia!")
        break;
}


/*EXERCÍCIO 7

Considere a situação: você vai no cinema com um amigo ou amiga, porém ele/ela só assiste filme do 
gênero fantasia ****e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário 
qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique 
se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: 
"Bom filme!", caso contrário, imprima "Escolha outro filme :("
*/
const genero = prompt ("Qual o gênero do filme que deseja assistir?")
const valor =Number(prompt("Qual o valor do ingresso do filme?"))

if ((genero === "fantasia") && (valor < 15) ) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :( ")}

/* DESAFIO 1

Modifique o código do exercício 7 para, antes de imprimir a mensagem "Bom filme!", 
pergunte ao usuário, pelo `prompt` que snack ele vai comprar (pipoca, chocolate, doces, etc) e 
imprima no console as mensagens "Bom filme!" e "... com `[SNACK]`", trocando [SNACK] pelo que o 
usuário colocou no input.

- Exemplo

    Entradas: "fantasia" | "10"

    Saída:

    ```
    [prompt] Qual snack que você quer comprar?
    ```

    Entrada: "chocolate"

    Saída:

    ```
    "Bom filme!"
    "... com chocolate"
    ```

*/
//Resposta - Desafio 1

const genero = prompt ("Qual o gênero do filme que deseja assistir?")
const valor =Number(prompt("Qual o valor do ingresso do filme?"))

if ((genero === "fantasia") && (valor < 15) ) {
    const snack = prompt ("Qual snack deseja comprar?")
    console.log("Bom filme! \n", "... com ", snack)
} else {
    console.log("Escolha outro filme :( ")}


/*DESAFIO 2

Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. 
Para esta compra, o usuário deve fornecer algumas informações:

- Nome completo;
- Tipo de jogo: IN indica internacional; e DO indica doméstico;
- Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
- Categoria: pode ser as opções 1, 2, 3 ou 4;
- Quantidade de ingressos

O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . 
Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o 
valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso 
    multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e
     exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o m
     esmo de jogos domésticos, mas seus preços devem ser dados em dólar 
     (considerar a cotação de U$1,00 = R$4,10)

**Tabela de preços**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd2f55f6-e07f-45fd-9b65-ecf0343a3b3c/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd2f55f6-e07f-45fd-9b65-ecf0343a3b3c/Untitled.png)

**Exemplos de saídas**

Jogo nacional

```
---Dados da compra--- 
Nome do cliente:  Soter Padua 
Tipo do jogo:  Nacional 
Etapa do jogo:  Final 
Categoria:  1 
Quantidade de Ingressos:  10 ingressos 
---Valores--- 
Valor do ingresso:  R$ 1980
Valor total:  R$ 19800

```

Jogo internacional

```
---Dados da compra--- 
Nome do cliente:  Soter Padua 
Tipo do jogo:  Internacional 
Etapa do jogo:  Final 
Categoria:  1 
Quantidade de Ingressos:  10 ingressos 
---Valores--- 
Valor do ingresso:  U$ 482.92682926829275
Valor total:  U$ 4829.2682926829275

```

*/
// Resposta Desafio 2
const nomeUsuario=prompt("Digite seu nome completo")
const tipoJogo = prompt("Qual o tipo de jogo que deseja assistir? Por favor, utilize o código de duas letras para responder:Internacional (IN) ou Doméstico (DO) ")
const etapaJogo = prompt ("Qual etapa deseja assistir? Semi-final (SF); Decisão de terceiro lugar (DT) ou Final (FI)")
const categoria = Number(prompt ("Por favor, informe a categoria: 1, 2, 3 ou 4?"))
const quantidade = Number(prompt("Quantos ingressos deseja comprar?"))
let valor = 0
let total = 0

if (tipoJogo === "IN") {

    if (etapaJogo === "SF") {
        if (categoria === 1) {
            valor = (1320/4.10)
            total = (valor * quantidade)
        }else if (categoria === 2){
            valor = (880/4.10)
            total = (valor * quantidade)
        } else if (categoria === 3) {
            valor = (550/4.10)
            total = (valor * quantidade)
 
        } else {
            valor = (220/4.10)
            total = (valor * quantidade)
        }
        console.log( "Jogo internacional \n \n ")
        console.log ("---Dados da compra--- \n \n")
        console.log ("Nome do cliente: ", nomeUsuario, "\n")
        console.log ("Tipo do jogo: Internacional \n")
        console.log ("Etapa do jogo: Semi-final \n")
        console.log ("Categoria: ", categoria, "\n")
        console.log ("Quantidade de ingressos: ", quantidade, "\n")
        console.log ("---Valores--- \n \n")
        console.log ("Valor do ingresso: U$ ", valor, "\n")
        console.log ("Valor total: U$ ", total, "\n")

    } else if (etapaJogo === "DT") {
        if (categoria === 1) {
            valor = (660/4.10)
            total = (valor * quantidade)
        }else if (categoria === 2){
            valor = (440/4.10)
            total = (valor * quantidade)
        } else if (categoria === 3) {
            valor = (330/4.10)
            total = (valor * quantidade)
 
        } else {
            valor = (170/4.10)
            total = (valor * quantidade)
        }
        console.log( "Jogo internacional \n \n ")
        console.log ("---Dados da compra--- \n \n")
        console.log ("Nome do cliente: ", nomeUsuario, "\n")
        console.log ("Tipo do jogo: Internacional \n")
        console.log ("Etapa do jogo: Decisão de terceiro lugar \n")
        console.log ("Categoria: ", categoria, "\n")
        console.log ("Quantidade de ingressos: ", quantidade, "\n")
        console.log ("---Valores--- \n \n")
        console.log ("Valor do ingresso: U$ ", valor, "\n")
        console.log ("Valor total: U$ ", total, "\n")

    } else {
        if (categoria === 1) {
            valor = (1980/4.10)
            total = (valor * quantidade)
        }else if (categoria === 2){
            valor = (1320/4.10)
            total = (valor * quantidade)
        } else if (categoria === 3) {
            valor = (880/4.10)
            total = (valor * quantidade)
 
        } else {
            valor = (330/4.10)
            total = (valor * quantidade)
        }
        console.log( "Jogo internacional \n \n ")
        console.log ("---Dados da compra--- \n \n")
        console.log ("Nome do cliente: ", nomeUsuario, "\n")
        console.log ("Tipo do jogo: Internacional \n")
        console.log ("Etapa do jogo: Final \n")
        console.log ("Categoria: ", categoria, "\n")
        console.log ("Quantidade de ingressos: ", quantidade, "\n")
        console.log ("---Valores--- \n \n")
        console.log ("Valor do ingresso: U$ ", valor, "\n")
        console.log ("Valor total: U$ ", total, "\n")

    }

} else {
    if (etapaJogo === "SF") {
        if (categoria === 1) {
            valor = (1320)
            total = (valor * quantidade)
        }else if (categoria === 2){
            valor = (880)
            total = (valor * quantidade)
        } else if (categoria === 3) {
            valor = (550)
            total = (valor * quantidade)
 
        } else {
            valor = (220)
            total = (valor * quantidade)
        }
        console.log( "Jogo nacional\n \n ")
        console.log ("---Dados da compra--- \n \n")
        console.log ("Nome do cliente: ", nomeUsuario, "\n")
        console.log ("Tipo do jogo: Nacional \n")
        console.log ("Etapa do jogo: Semi-final \n")
        console.log ("Categoria: ", categoria, "\n")
        console.log ("Quantidade de ingressos: ", quantidade, "\n")
        console.log ("---Valores--- \n \n")
        console.log ("Valor do ingresso: R$ ", valor, "\n")
        console.log ("Valor total: R$ ", total, "\n")

    } else if (etapaJogo === "DT") {
        if (categoria === 1) {
            valor = (660)
            total = (valor * quantidade)
        }else if (categoria === 2){
            valor = (440)
            total = (valor * quantidade)
        } else if (categoria === 3) {
            valor = (330)
            total = (valor * quantidade)
 
        } else {
            valor = (170)
            total = (valor * quantidade)
        }
        console.log( "Jogo nacional\n \n ")
        console.log ("---Dados da compra--- \n \n")
        console.log ("Nome do cliente: ", nomeUsuario, "\n")
        console.log ("Tipo do jogo: Nacional \n")
        console.log ("Etapa do jogo: Decisão de terceiro lugar \n")
        console.log ("Categoria: ", categoria, "\n")
        console.log ("Quantidade de ingressos: ", quantidade, "\n")
        console.log ("---Valores--- \n \n")
        console.log ("Valor do ingresso: R$ ", valor, "\n")
        console.log ("Valor total: R$ ", total, "\n")

    } else {
        if (categoria === 1) {
            valor = (1980)
            total = (valor * quantidade)
        }else if (categoria === 2){
            valor = (1320)
            total = (valor * quantidade)
        } else if (categoria === 3) {
            valor = (880)
            total = (valor * quantidade)
 
        } else {
            valor = (330)
            total = (valor * quantidade)
        }
        console.log( "Jogo nacional\n \n ")
        console.log ("---Dados da compra--- \n \n")
        console.log ("Nome do cliente: ", nomeUsuario, "\n")
        console.log ("Tipo do jogo: Nacional \n")
        console.log ("Etapa do jogo: Final \n")
        console.log ("Categoria: ", categoria, "\n")
        console.log ("Quantidade de ingressos: ", quantidade, "\n")
        console.log ("---Valores--- \n \n")
        console.log ("Valor do ingresso: R$ ", valor, "\n")
        console.log ("Valor total: R$ ", total, "\n")

    }

}

