// function cliqueAqui() {
//     alert("Olá");
// }

// criando variaveis 

const tirarDiv = document.querySelector(".tirardiv");
const voltarDiv = document.querySelector(".voltarDiv");
const card = document.querySelector(".card");

// criando funções 

tirarDiv.addEventListener("click", function() {
    card.style.display = 'none';
//     alert("Oláá");
})

voltarDiv.addEventListener("click", function() {
    card.style.display = 'block';
})