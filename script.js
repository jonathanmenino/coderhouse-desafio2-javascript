//CALCULADORA DE ORÇAMENTO
//O OBJETIVO DESTE SISTEMA É CALCULAR O PREÇO QUE UM EMPREENDEDOR PRECISA COBRAR EM UM SERVIÇO.

alert(
  "CALCULADORA DE ORÇAMENTO. O OBJETIVO DESTE SISTEMA É CALCULAR O PREÇO QUE UM EMPREENDEDOR PRECISA COBRAR EM UM SERVIÇO."
);

//CÁLCULAR O CUSTO HORA DA EMPRESA
const custoHora = (despesas, salario, horas) => {
  return (despesas + salario) / horas;
};

//CALCULAR O VALOR BRUTO DO SERVIÇO
const valorBrutoServico = (custoHora, horasServico) => {
  return custoHora * horasServico;
};

//CALCULAR O VALOR FINAL DO SERVIÇO
const valorFinalServico = (valorBrutoServico, percentualNegociacao) => {
  return (valorBrutoServico * percentualNegociacao) / 100 + valorBrutoServico;
};

//COLETAR INFORMAÇÕES DA EMPRESA
const valorDespesas = parseInt(
  prompt("Digite o valor total das despesas mensais do seu negócio.")
);
const valorSalario = parseInt(prompt("Digite o seu salário desejado mensal."));
const qtdHoras = parseInt(
  prompt("Digite a quantidade de horas mensais que você deseja trabalhar.")
);

const empresa = {
  despesasMensais: valorDespesas,
  salarioMensal: valorSalario,
  horasMensais: qtdHoras,
  custoHora: custoHora(valorDespesas, valorSalario, qtdHoras),
};

//COLETAR INFORMAÇÕES DO SERVIÇO
const horasServico = parseInt(
  prompt(
    `O valor hora da sua empresa é de ${empresa.custoHora.toFixed(
      2
    )}. Agora digite quantas horas você estima que levará para concluir o serviço.`
  )
);
const percentualNegociacao = parseInt(
  prompt(
    `Por último, adicione o percentual % de margem de negociação que deseja adicionar no valor final (SEM O CARACTERE %).`
  )
);

//FUNÇÃO CONSTRUTORA DO OBJETO SERVIÇO
class Servico {
  constructor(horas, percentual) {
    this.horas = horas;
    this.percentual = percentual;
    this.totalTaxas = function () {
      return horas * empresa.custoHora * (percentual / 100);
    };
    this.valorFinal = function () {
      return horas * empresa.custoHora + this.totalTaxas();
    };
  }
}

//CHAMANDO A FUNÇÃO CONSTRUTORA
const servico = new Servico(horasServico, percentualNegociacao);

alert(
  `O valor total do seu orçamento é de R$ ${servico.valorFinal().toFixed(2)}.`
);
