/*
1 - Crie uma função que é chamada ao clicar no botão "Criar Tarefa". 
Use um evento apropriado que identifique o clique no botão.
*/

/*2 - Dentro da função, capture o valor do campo do HTML (que é a tarefa a ser colocada no planner) e 
armazene em uma variável.

3 - Capture o valor do seletor do HTML (o dia da semana selecionado) e armazene em uma variável.

4 - Dê um `console.log` das variáveis para checar se você pegou os valores corretamente 
(só não esqueça de **não** subir o código com `console.log`).

5 - Adicione, através do JS, a tarefa (capturada no passo 2) na `div` identificada com o dia da semana que 
você capturou no passo 3.

6 - Limpe o campo da tarefa. Você deve acessar o elemento do HTML da mesma forma que você acessou 
para capturar seu valor e trocar para que não apareça nada no seu valor.

*/
let contarTarefas = 0
let diasDaSemana = ["segunda", "terça", "quarta", "quinta", "sexta", "sabado", "domingo"]

function criarTarefa() {
    
    let tarefaUsuario = document.getElementById("tarefa").value
    let diaSemana = document.getElementById("dias-semana").value
    if (tarefaUsuario === "") {
        console.log ("Você precisa preencher o campo tarefa!")
    }else {
       if (diaSemana==="domingo"){

       }
        }
    }

}
