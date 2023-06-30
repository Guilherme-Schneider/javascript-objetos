const cliente = {
  nome: "Joao",
  idade: 24,
  email: "loao@firma.com",
  telefone: ["115555555", "114444444"],
};

cliente.enderecos = [
  {
    rua: "R. Joseph",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  },
];

for (let chave in cliente) {
  let tipo = typeof cliente[chave];
  if (tipo !== "object" && tipo !== "function") {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
  }
}
