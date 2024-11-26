document.addEventListener('DOMContentLoaded', (event) => {
   const form = document.getElementById('cadastroForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const placa = document.getElementById('placa').value;
        const marca = document.getElementById('marca').value;
        const modelo = document.getElementById('modelo').value;
        const ano = document.getElementById('ano').value;
        const veiculo = { placa, marca, modelo, ano };
        let veiculos = JSON.parse(localStorage.getItem('garagem')) || [];
        veiculos.push(veiculo);
        localStorage.setItem('garagem', JSON.stringify(veiculos));
        modal.style.display = "block";
        form.reset();
    });
});
// Obtém o modal
let modal = document.getElementById("myModal");

// Obtém o elemento <span> que fecha o modal
let span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal-content, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


