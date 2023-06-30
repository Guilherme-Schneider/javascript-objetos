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

cliente.enderecos.push({
  rua: "R Jospeh Ladder",
  numeros: 404,
  apartamento: false,
});

const listaApenasApartamentos = cliente.enderecos.filter(
  (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);
