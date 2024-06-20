//CALCULADORA DE ORÇAMENTO
//O OBJETIVO DESTE SISTEMA É CALCULAR O PREÇO QUE UM EMPREENDEDOR PRECISA COBRAR EM UM SERVIÇO.

alert ("CALCULADORA DE ORÇAMENTO. O OBJETIVO DESTE SISTEMA É CALCULAR O PREÇO QUE UM EMPREENDEDOR PRECISA COBRAR EM UM SERVIÇO.")

let valorDespesas = parseInt(prompt("Digite o valor total das despesas mensais do seu negócio."));
let valorSalario = parseInt(prompt("Digite o seu salário desejado mensal."));
let qtdHoras = parseInt(prompt("Digite a quantidade de horas mensais que você deseja trabalhar."));

const valorHora = () => {
    return (valorDespesas + valorSalario) / qtdHoras;
}

let horasServico = parseInt(prompt(`O valor hora da sua empresa é de ${valorHora()}. Agora digite quantas horas você estima que levará para concluir o serviço.`));

const valorBrutoServico = () => {
    return valorHora() * horasServico;
}

let percentualNegociacao = parseInt(prompt(`O valor bruto do serviço é ${valorBrutoServico()}. Adicione o percentual % de margem de negociação que deseja adicionar no valor final (SEM O CARACTERE %).`));

const valorFinalServico = () => {
    return ((valorBrutoServico() * percentualNegociacao) / 100) + valorBrutoServico();
}

alert(`O valor total do seu orçamento é de R$ ${valorFinalServico()}.`);