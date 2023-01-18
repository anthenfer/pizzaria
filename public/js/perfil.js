//Para provar que está linkado
// console.log("Olá, mundo! - que olham o console")

//OBJETIVO: mostrar alerta caso o campo de nome
//seja abandonado sem ser preenchido

// 1 - Representar/ca´pturar o campo "nome" para o mundo JS 
// document.getElementById - bem apropriada
// document.querySelector("#seletor de css")
// document.querySelectorAll("#seletor de css")

let inputNome = document.getElementById("nome");

// console.log(inputNome.getAttribute("placeholder")); - para vizualizar no console do chrome o valor do atributo ou atributo
// inputNome.style.backgroundColor = "red"; - para aplicar estilo
// inputNome.remove(); - para remover elementos

console.log(inputNome.value);

// 2 - Associar uma ação a ser realizada ao evento "deixou o campo"

//Entrando no campo
// inputNome.addEventListener(
//     'click',
//     () => {
//         console.log("O usuário clicou no campo!")
//     }
// )

//Para saída do campo:
// inputNome.addEventListener(
//     'blur',
//     () => {
//         console.log("O usuário saiu do campo!")
//     }
// )

//Para o evento acontecer devemos deixar ele na escuta e recebe dois parametros
inputNome.addEventListener(
    'blur',
    verificaSeCampoDigitado
)


//3 - Definir a ação (função) que será executada...
function verificaSeCampoDigitado() {
    if(inputNome.value == ' '){
        alert("Preencha o campo, preguiçoso(a)");
    }
}


//Para acrescentar movimentos e aniomações sem necessidade de alterar
//códigos no html e css
// let div = document.createElement("div");
// div.innerHTML = "Texto adicionado dinamicamente...";
// document.body.appendChild(div);