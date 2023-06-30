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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
  console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
  destinatario: cliente.nome,
  ...cliente.enderecos[0],
};

console.log(encomenda);
