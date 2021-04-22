//Exercício 1

function inverteArray(array) {
  // implemente sua lógica aqui
  let numElementos = array.length
  let arrayInvertido = []
  for (let i=0; i<numElementos; i++) {
     arrayInvertido[i] = array[numElementos - 1 - i]
  }
  return arrayInvertido
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui
   let numElementos = array.length
   let arrayParesAoQuadrado = []
   let j=0
   for (let i=0; i<numElementos; i++) {
      if ((array[i]%2) === 0) {
         arrayParesAoQuadrado[j] = (array[i] * array[i])
         j+=1
      } 
   }
   return arrayParesAoQuadrado
}

//Exercício 3

function retornaNumerosPares (array) {
   // implemente sua lógica aqui
   let numElementos = array.length
   let arrayDePares = []
   let j=0
   for (let i=0; i<numElementos; i++) {
      if ((array[i]%2) === 0) {
         arrayDePares[j] = array[i]
         j+=1
      } 
   }
   return arrayDePares
}


//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
   let numElementos = array.length
   let maiorElemento = array[0]
   for (let i=0; i<numElementos; i++) {
      if (array[i] > maiorElemento) {
         maiorElemento = array[i]
      } 
   }
   return maiorElemento
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
   let numElementos = array.length
   return numElementos
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
   let arrayDeBooleanos = []
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2 
   const booleano4 = !booleano3
   arrayDeBooleanos[0] = ((booleano1 && booleano2) && (!booleano4))
   arrayDeBooleanos[1] = ((booleano1 && booleano2) || !booleano3)
   arrayDeBooleanos[2] = ((booleano2 || booleano3) && (booleano4 || booleano1))
   arrayDeBooleanos[3] = (!(booleano2 && booleano3) || !(booleano1 && booleano3))
   arrayDeBooleanos[4] = ((!(booleano1) && !(booleano3)) || (!booleano4 && booleano3 && booleano3))
   return arrayDeBooleanos
}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   let arrayNNumerosPares = []
   for (let i=0; i<n; i++) {
      arrayNNumerosPares[i] = (2*i)
      } 
   return arrayNNumerosPares
}

// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
  let tipoDeTriangulo =""
  if ((a === b) && (b === c)){
     tipoDeTriangulo ="Equilátero"
  } else if ((a === b) || (b === c)) {
   tipoDeTriangulo ="Isósceles"
  } else {
   tipoDeTriangulo ="Escaleno"
  }
  return tipoDeTriangulo
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
// implemente sua lógica aqui

 let maior 
 let menor 
 let maiorDivisivelPorMenorR = false
 if (num1 >= num2) {
    maior = num1
    menor = num2
 } else {
    maior = num2
    menor = num1
 }
 if ((maior%menor) === 0) {
    maiorDivisivelPorMenorR = true
 }
 
return {
   maiorNumero: maior,
   maiorDivisivelporMenor: maiorDivisivelPorMenorR,
   diferenca: (maior-menor)
 }
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
  /* let segundoMaior = array[0]
   let segundoMenor = array[0]
   let arrayResposta =[]
   let numElementos = array.length
   let maiorElemento = array[0]
   let indiceMaior = 0
   let menorElemento = array[0]
   let indiceMenor = 0
   for (let i=0; i<numElementos; i++) {
      if (array[i] > maiorElemento) {
         maiorElemento = array[i]
         indiceMaior = i
      } 
   }
   for (let j=0; j<numElementos; j++) {
      if (array[j] < menorElemento) {
         menorElemento = array[j]
         indiceMenor = j
      } 
   }
   for (let i=0;  i<numElementos; i++){
      if (array[i] >= segundoMaior){
         if (i !== indiceMaior) {
            segundoMaior = array[i]
         }
      } 
   }
   for (let j=0; j<numElementos; j++){
      if (array[j] <= segundoMenor){
         if (j !== indiceMenor) {
         segundoMenor = array[j]
         }
      } 
   }
   arrayResposta[0] = segundoMaior
   arrayResposta[1] = segundoMenor
   return arrayResposta */


 let numElementos = array.length
   let arrayOrdenado = []
   let chaveAtual 
   let indiceWhile
   let arrayResposta =[]
   for (let j=1; j<numElementos; j++){
      chaveAtual = array[j]
      indiceWhile = j-1
      while ((indiceWhile>-1) && (array[indiceWhile] > chaveAtual)) {
         array[indiceWhile + 1] = array[indiceWhile]
         indiceWhile = indiceWhile -1
      }
      array[indiceWhile+1] = chaveAtual
   }
   arrayResposta[0]= array[numElementos-2]
   arrayResposta[1]= array[1]
return arrayResposta

}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
   let numElementos = array.length
   let arrayOrdenado = []
   let chaveAtual 
   let indiceWhile
   for (let j=1; j<numElementos; j++){
      chaveAtual = array[j]
      indiceWhile = j-1
      while ((indiceWhile>-1) && (array[indiceWhile] > chaveAtual)) {
         array[indiceWhile + 1] = array[indiceWhile]
         indiceWhile = indiceWhile -1
      }
      array[indiceWhile+1] = chaveAtual
   }
return array

}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
   
   return {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   }
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
const favoritoAstroDev = {
   nome: "O Diabo Veste Prada",
   ano: 2006,
   diretor: "David Frankel",
   atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
}
return `Venha assistir ao filme ${favoritoAstroDev.nome}, de ${favoritoAstroDev.ano}, dirigido por ${favoritoAstroDev.diretor} e estrelado por ${favoritoAstroDev.atores[0]}, ${favoritoAstroDev.atores[1]}, ${favoritoAstroDev.atores[2]}, ${favoritoAstroDev.atores[3]}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
  
   return {
      largura: lado1,
      altura: lado2,
      perimetro: (2*(lado1+lado2)),
      area: (lado1*lado2)
   }
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
   pessoa.nome="ANÔNIMO"
   return pessoa
}

// Exercício 16

const arrayDePessoas = [
   { nome: "Pedro", idade: 20 },
   { nome: "João", idade: 10 },
   { nome: "Paula", idade: 12 },
   { nome: "Artur", idade: 89 } 
 ]
 
 // Exercício 16, letra A
 
 function maioresDe18(arrayDePessoas) {
    // implemente sua lógica aqui
    pessoasAdultas =[]
    let j=0
    let numElementos = arrayDePessoas.length
    for (let i=0; i<numElementos; i++) {
       if (arrayDePessoas[i].idade >= 18) {
          pessoasAdultas[j] = arrayDePessoas[i]
          j+=1
       } 
    }
    return pessoasAdultas

 }
 
 // Exercício 16, letra B
 
 function menoresDe18(arrayDePessoas) {
    // implemente sua lógica aqui
    pessoasMenoresDe18 =[]
    let j=0
    let numElementos = arrayDePessoas.length
    for (let i=0; i<numElementos; i++) {
       if (arrayDePessoas[i].idade < 18) {
          pessoasMenoresDe18[j] = arrayDePessoas[i]
          j+=1
       } 
    }
    return pessoasMenoresDe18
 }
 
 // Exercício 17, letra A
 
 function multiplicaArrayPor2(array) {
    // implemente sua lógica aqui
    arrayResposta =[]
    let numElementos = array.length
    for (let i=0; i<numElementos; i++) {
       arrayResposta[i] = (array[i]*2)
      } 
    return arrayResposta
 }
 
 // Exercício 17, letra B
 
 function multiplicaArrayPor2S(array) {
   // implemente sua lógica aqui
  arrayResposta =[]
    let numElementos = array.length
    for (let i=0; i<numElementos; i++) {
       arrayResposta[i] = String(array[i]*2)
      } 
    return arrayResposta
 }
 
 // Exercício 17, letra C
 
 function verificaParidade(array) {
    // implemente sua lógica aqui
    arrayResposta =[]
    let j=0
    let numElementos = array.length
    for (let i=0; i<numElementos; i++) {
       if ((array[i]%2)===0){
         arrayResposta[j] = `${array[i]} é par` 
         j+=1
       } else {
         arrayResposta[j] = `${array[i]} é ímpar` 
         j+=1
       }
      } 
    return arrayResposta
 }
 
 // Exercício 18
 
 const pessoas = [
   { nome: "Paula", idade: 12, altura: 1.8},
   { nome: "João", idade: 20, altura: 1.3},
   { nome: "Pedro", idade: 15, altura: 1.9},
   { nome: "Luciano", idade: 22, altura: 1.8},
   { nome: "Artur", idade: 10, altura: 1.2},
   { nome: "Soter", idade: 70, altura: 1.9}
 ]
 //A regra para entrar na montanha russa do 
 //terror é: ter, no mínimo, 1.5m de altura; ser mais velho do que 14 anos e mais novo do que 60 anos.
 //Exercício 18, letra A
 
 function retornaPessoasAutorizadas() {
    // implemente sua lógica aqui
    pessoasAutorizadas =[]
    let j=0
    let numElementos = pessoas.length
    for (let i=0; i<numElementos; i++) {
       if (((pessoas[i].idade > 14) &&  (pessoas[i].idade < 60)) && (pessoas[i].altura >= 1.5)){
         pessoasAutorizadas[j] = pessoas[i]
         j+=1
       }
    
      }
    return pessoasAutorizadas
 }
 
 
 // Exercício 18, letra B
 
 function retornaPessoasNaoAutorizadas() {
    // implemente sua lógica aqui
    pessoasNaoAutorizadas =[]
    let j=0
    let numElementos = pessoas.length
    for (let i=0; i<numElementos; i++) {
       if (((pessoas[i].idade <= 14) ||  (pessoas[i].idade >= 60)) || (pessoas[i].altura < 1.5)){
         pessoasNaoAutorizadas[j] = pessoas[i]
         j+=1
       }
    
      }
    return pessoasNaoAutorizadas
 }
 
 //Exercício 19
 
 const consultasNome = [
    { nome: "João", dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", dataDaConsulta: "02/07/2021" },
    { nome: "Paula", dataDaConsulta: "03/11/2021" },
    { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
  ]
  
  //Exercício 19, letra A
  
  function ordenaPorNome() {
   
  }
  
  // Exercício 19, letra B
  
  const consultasData = [
    { nome: "João", dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", dataDaConsulta: "02/07/2021" },
    { nome: "Paula", dataDaConsulta: "03/11/2021" },
    { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
  ]
  
  function ordenaPorData() {
  
  }
 
 //Exercício 20
 
 const contas = [
   { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
   { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
   { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
   { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
   { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
   { cliente: "Soter", saldoTotal: 1200, compras: [] }
 ]
 
 function atualizaSaldo() {
   // implemente sua lógica aqui
 }