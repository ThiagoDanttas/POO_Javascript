class Bank {
  constructor(id, titular, saldo) {
    this.id = id;
    this.titular = titular;
    this.saldo = saldo.toFixed(2);
    this.poupanca = 0;
  }

  // Retorna o extrato da conta
  extrato() {
    return `Titular: ${this.titular}, Saldo: ${this.saldo.toFixed(
      2
    )}, Poupança: ${this.poupanca.toFixed(2)}`;
  }

  // verifíca valor disponível da conta
  valorDisponivel(valor) {
    return valor <= this.saldo;
  }

  // Deposita
  deposita(valor) {
    this.saldo += valor;
  }

  // saca valor disponível na conta
  saca(valor) {
    if (this.valorDisponivel(valor)) {
      this.saldo -= valor;
    } else {
      console.log("Valor Indisponível!");
    }
  }

  // Transfere o valor disponível na conta para outra conta
  transfere(titular, valor) {
    if (this.valorDisponivel(valor)) {
      titular.deposita(valor);
      this.saldo -= valor;
    } else {
      console.log("Valor indisponível!");
    }
  }

  // Verifíca o valor disponível dentro da conta poupança.
  valorDisponivelPoupanca(valor) {
    return valor <= this.poupanca;
  }

  // Valor disponível na conta principal ? saldo Poupança recebe o deposito : saldo Poupança ñ recebe o deposito
  depositaPoupanca(valor) {
    if (this.valorDisponivel(valor)) {
      this.saldo -= valor;
      this.poupanca += valor;
    } else {
      console.log("Saldo insuficiente");
    }
  }

  // Retirada da conta Poupança passando para a conta principal
  retiradaPoupanca(valor) {
    if (this.valorDisponivelPoupanca(valor)) {
      this.poupanca -= valor;
      this.saldo += valor;
    } else {
      console.log("Saldo insuficiente");
    }
  }
}

const cliente1 = new Bank(1, "Thiago", 1000);
cliente1.depositaPoupanca(200);
cliente1.retiradaPoupanca(50);
cliente1.saca(50);
console.log(cliente1.extrato());
