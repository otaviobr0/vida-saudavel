// script.js

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário e recarregamento da página

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const imc = (weight / (height * height)).toFixed(2);
    let classification;

    if (imc < 18.5) {
        classification = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classification = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classification = "Sobrepeso";
    } else {
        classification = "Obesidade";
    }

    document.getElementById('value').textContent = imc;
    document.getElementById('description').textContent = classification;

    document.getElementById('infos').classList.remove('hidden'); // Exibe a seção de resultados
});