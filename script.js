document.getElementById('calcular').addEventListener('click', function() {
    let homens = parseInt(document.getElementById('homens').value);
    let mulheres = parseInt(document.getElementById('mulheres').value);
    let criancas = parseInt(document.getElementById('criancas').value);

    
    if (isNaN(homens) && isNaN(mulheres) && isNaN(criancas)) {
        document.getElementById('resultado').innerHTML = 'Deve ser selecionado pelo menos 1 pessoa!';
        document.getElementById('resultado').classList.add('show');
        return; 
    }

   
    let carneBovina = (homens * 500) + (mulheres * 300) + (criancas * 200);
    let frango = (homens * 200) + (mulheres * 200) + (criancas * 100);
    let linguica = (homens * 200) + (mulheres * 200) + (criancas * 200);
    let refrigerante = (homens * 300) + (mulheres * 400) + (criancas * 200);
    let cerveja = (homens * 800) + (mulheres * 500);

  
    let resultado = `
        <p><strong>Carne Bovina:</strong> ${carneBovina / 1000} kg</p>
        <p><strong>Frango:</strong> ${frango / 1000} kg</p>
        <p><strong>Linguiça:</strong> ${linguica / 1000} kg</p>
        <p><strong>Refrigerante:</strong> ${refrigerante / 1000} litros</p>
        <p><strong>Cerveja:</strong> ${cerveja / 1000} litros</p>
    `;

   
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = resultado;


    resultadoDiv.classList.remove('show');
    void resultadoDiv.offsetWidth;
    resultadoDiv.classList.add('show');
    resultadoDiv.style.display = 'block';
});
