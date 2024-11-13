function mostrarFormulario(opcao) {
    document.getElementById("menu").style.display = "none";
    document.getElementById("formulario1").style.display = opcao === 1 ? "block" : "none";
    document.getElementById("formulario2").style.display = opcao === 2 ? "block" : "none";
}

function voltarMenu() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("formulario1").style.display = "none";
    document.getElementById("formulario2").style.display = "none";
}

function calcularTaraPapelao() {
    const taraEmbalagem = parseFloat(document.getElementById("taraEmbalagem").value);
    const qtdPeca = parseFloat(document.getElementById("qtdPeca").value);
    const qtdcaixa = parseFloat(document.getElementById("qtdcaixaa").value);
    const taraCaixa = parseFloat(document.getElementById("taraCaixa").value);
    const pesoBalanca = parseFloat(document.getElementById("pesoBalanca").value);

    const resultado = (((taraEmbalagem / 1000) * qtdPeca) + (qtdcaixa * taraCaixa) - pesoBalanca) * -1;

    if (isNaN(taraEmbalagem) || isNaN(qtdPeca) || isNaN(pesoBalanca) || isNaN(qtdcaixa) || isNaN(taraCaixa)) {
        document.getElementById("resultado").innerText = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    document.getElementById("resultado").innerText = resultado.toFixed(3);
}

function calcularTara() {
    const tara = parseFloat(document.getElementById("tara").value);
    const qtdPeca = parseFloat(document.getElementById("qtdPeca2").value);
    const pesoBalanca = parseFloat(document.getElementById("pesoBalanca2").value);

    const resultado = (((tara / 1000) * qtdPeca) - pesoBalanca) * -1;

    if (isNaN(tara) || isNaN(qtdPeca) || isNaN(pesoBalanca)) {
        document.getElementById("resultado2").innerText = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    document.getElementById("resultado2").innerText = resultado.toFixed(3);
}
