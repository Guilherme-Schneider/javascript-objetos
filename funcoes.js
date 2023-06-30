const cliente = {
  nome: "Joao",
  idade: 24,
  email: "loao@firma.com",
  telefone: ["115555555", "114444444"],
  saldo: 200,
  efetuaPagamento: function (valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente");
    } else {
      this.saldo -= valor;
      console.log(`Pagamento realizado. Novo saldo ${this.saldo}`);
    }
  },
};

cliente.efetuaPagamento(25);
