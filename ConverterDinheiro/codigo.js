function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function conversor() {
    let reais = parseFloat(prompt("Digite o valor em reais (R$):").replace(",", "."));

    if (isNaN(reais) || reais <= 0) {
        alert("Por favor, insira um valor válido!");
        return;
    }

    const taxaDolar = 5.10; // Substituir por uma taxa atualizada, se necessário
    const taxaEuro = 5.50;  // Substituir por uma taxa atualizada, se necessário

    let valorEmDolar = reais / taxaDolar;
    let valorEmEuro = reais / taxaEuro;

    alert(`Valor em Dólares: $${formatarValor(valorEmDolar)}\nValor em Euros: €${formatarValor(valorEmEuro)}`);
}
