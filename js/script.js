const buttonMedicamentos = document.querySelector('#medicamentos');
const listaRemedios = document.querySelector('.remedios');

buttonMedicamentos.addEventListener("click", function(){
    listaRemedios.classList.add("d-block");
})