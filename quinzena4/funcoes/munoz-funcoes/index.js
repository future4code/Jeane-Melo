
/*
    ### Enunciado

    **Exercícios de interpretação de código**

    EXERCÍCIO 1

    Leia o código abaixo:

    ```jsx
    function minhaFuncao(variavel) {
    	return variavel * 5
    }

    console.log(minhaFuncao(2))
    console.log(minhaFuncao(10))
    ```

    a. O que vai ser impresso no console?
*/
    //Resposta Exercício1 - letra a

    10
    50

   /* b. O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a 
    função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
  */
    //Resposta Exercício1 - letra b
    O cálculo seria executado, porém, nada apareceria no console.

  /*  EXERCÍCIO 2

    Leia o código abaixo:

    ```jsx
    let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"];

    const outraFuncao = function(array) {
    	for (let i = 0; i < 2; i++) {
    		console.log(array[i])
    	}
    }

    outraFuncao(arrayDeNomes)
    ```

    a. Explicite quais são as saídas impressas no console
   */ 
  //Resposta Exercício2 - letra a
   Darvas
   Caio
   João
   Paulinha
   Chijo

  /*  b. Se `arrayDeNomes` mudasse de valor para `["Amanda", "Caio"]`, o que vai ser impresso no console?
*/
  //Resposta Exercício2 - letra b

   Amanda
   Caio

 /*   EXERCÍCIO 3

    O código abaixo mostra uma função que recebe um array e devolve outro array. Explique em 
    poucas palavras o que ela faz e sugira um nome melhor para ela!

    ```jsx
    const metodo = (array) => {
      let arrayFinal = [];

      for (let x of array) {
    	if (x % 2 === 0) {
    	    arrayFinal.push(x * x)
    	}
      }

      return arrayFinal;
    }
    ```
 */
    //Resposta Exercício 3 

    O código irá elevar ao quadrado todos os elementos pares do array de entrada. O quadrado de cada elemento
    é inserido no final de arrayFinal. Assim, o array final conterá todos os elementos pares do array de entrada
    elevados ao quadrado.

    Sugestão de nome: paresQuadrados

   /* **Exercícios de escrita de código**

    EXERCÍCIO 4

    Escreva as funções explicadas abaixo:

    a. A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas 
    informações sobre você, como: 

    ```
    "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
    ```

    Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
    Lembrando que a função não possui entradas, apenas imprimir essa mensagem.
*/
    //Resposta Exercício 4 - letra a
    function faleSobreMim() {
            console.log("Eu sou Jeane, tenho 51 anos, moro em Recife e sou professora.")
    }
  /*  b.  Agora escreva uma função que receba 4 parâmetros que correspondem às 
  informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e um 
  `boolean` que representa se é estudante ou não. Ela deve retornar uma `string` que unifique 
  todas as informações da pessoa em uma só mensagem com o template:

    ```
    Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e [SOU/NÃO SOU] estudante.
    ```

    - Exemplo

        Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `true`, deve retornar:

        `"Eu sou Laís, tenho 23 anos, moro em Rua Guarapari 190 e sou estudante."`
*/
 //Resposta Exercício 4 - letra b   
 function faleSobreVoce(nome, idade, endereço, estuda) {
   if (estuda === true){
    console.log('Eu sou' + nome + ', tenho ' + idade + ' anos, moro em ' + endereço + ' e sou estudante')
   } else {
    console.log('Eu sou' + nome + ', tenho ' + idade + ' anos, moro em ' + endereço + ' e não sou estudante')
   }
  }   
 /*       EXERCÍCIO 5

    Escreva as funções explicadas abaixo:

    a. Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma 
    das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado. */
  
//Resposta Exercício 5 - letra a

  const somaDois = (num1, num2) => {
    return num1 + num2
}

const resultado = somaDois(10,10)
console.log(resultado)

/*
    b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro 
    número é **maior ou igual** ao segundo.
*/
//Resposta Exercício 5 - letra b

function comaparaDois (num1, num2) {
  if (num1 >= num2) {
    return true
  } else {
    return false
  }
}

/*    c. Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima essa 
    mensagem 10 vezes. (não é permitido escrever 10 `console.log` dentro da função. 
    Use outra estrutura de código para isso)
*/
//Resposta Exercício 5 - letra c
function imprimirMensagem(mensagem) {
  for (let i=0; i<10; i++) {
    console.log(mensagem)
  }
}
 

/*   EXERCÍCIO 6

    Para os itens a seguir, considere o seguinte array para os seus testes:

    ```jsx
    const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
    ```

    a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele
*/
//Resposta Exercício 6 - letra a
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

const devolveTamanhoDoArray = function(arrayEntrada) {
    return arrayEntrada.length
}

const tamanho = devolveTamanhoDoArray(array)

 /*   b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
*/
//Resposta Exercício 6 - letra b
 function numeroPar (numero) {
  if (numero %2 === 0) {
    return true
  } else {
    return false
  }
}

 /*   c. Escreva uma função que receba um array de números e devolva a quantidade de números 
 pares dentro dele
*/
//Resposta Exercício 6 - letra c
 function quantidadeDePares(array) {
      let contaPares = 0
      for (let x of array) {
    	  if (x % 2 === 0) {
    	     contaPares+=1
      	}
      }
      return contaPares;
    }
   /*
    d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para 
    verificar se o número é par
*/
//Resposta Exercício 6 - letra d
//Declarando a função que vou usar antes de usar :)
function numeroPar (numero) {
  if (numero %2 === 0) {
    return true
  } else {
    return false
  }
}

 function quantidadeDePares(array) {
      let contaPares = 0
      for (let x of array) {
        const paridade = numeroPar(x)
    	  if (paridade) {
    	     contaPares+=1
      	}
      }
      return contaPares;
    }
    
/*
- **DESAFIOS**

    EXERCÍCIO 1

    Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao 
    longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções 
    também. Sua tarefa é escrever duas funções: 

    1.  Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro.
*/

//Resposta DESAFIO Exercício 1 - item 1
  const recebeImprime = (parametro) => {
    console.log(parametro)
  }

/*    2. Escreva outra *arrow function* que recebe dois valores como parâmetros
     mas **nenhum retorno.** Faça a soma entre esses valores e chame a sua primeira 
     função mandando este resultado da soma como entrada para imprimí-lo.
*/
//Resposta DESAFIO Exercício 1 - item 2
const recebeImprime = (parametro) => {
  console.log(parametro)
}

const somaValores = (num1, num2) => {
  const resultado = num1 + num 2
  recebeImprime(resultado)
}

 /*   EXERCÍCIO 2

    Considere o seguinte array e utilize ele para os exercícios:

    ```jsx
    const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
    ```

    a. Escreva uma função que receba um array como parâmetro e retorne um array com apenas os 
    números pares e multiplicados por 2.

    */
   //Resposta DESAFIO Exercício 2 - item a
    
   const dobraPares = (array) => {
      let paresDobrados = [];

      for (let x of array) {
    	if (x % 2 === 0) {
    	    paresDobrados.push(2 * x)
    	}
      }

      return paresDobrados;
    }

    /*

    b. Escreva uma função que receba um array como parâmetro e retorne o maior número deste array.
*/
//Resposta DESAFIO Exercício 2 - item b
    const retornaMaior = (array) => {
      let maior = array[0];
      for (let i = 0; i < array.length; i++) {
    	
    	  if (array[i] > maior) {
    	      maior = array[i]
    	  }
      }
      return maior;
    }
    
  /*  c. Escreva uma função que receba um array como parâmetro e retorne o **índice** do maior número 
    deste array.
  */
//Resposta DESAFIO Exercício 2 - item c
const retornaMaior = (array) => {
  let maior = array[0];
  let indiceMaior = 0
  for (let i = 0; i < array.length; i++) {
  
    if (array[i] > maior) {
        maior = array[i]
        indiceMaior = i
    }
  }
  return indiceMaior;
}
 /*   d. Escreva uma função que recebe um array como parâmetro e retorne este array invertido.

    - Exemplo

        Para o array dado como entrada, retorne:

        ```jsx
        [13, 12, 41, 15, 10, 16, 23, 8, 0]
```*/

//Resposta DESAFIO Exercício 2 - item d
        const inverteArray = (array) => {
          let arrayInvertido = []
          let tamanhoArray = array.length
          for (let i = 0; i < array.length; i++) {
           tamanhoArray=tamanhoArray -1
           arrayInvertido[i]=array[tamanhoArray]
          }
          return arrayInvertido;
        }
      