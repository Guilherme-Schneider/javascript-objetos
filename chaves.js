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

const chavesDoObjeto = Object.keys(cliente);

if (!chavesDoObjeto.includes("enderecos")) {
  console.error("Erro. É necessário ter um endereço cadastrado.");
}

console.log(chavesDoObjeto);
