let pessoas = [
    {
        nome: "jose",
        idade: 53,
        ano_de_nascimento: 1971,
        signo: "Leão" // Supondo que nasceu entre 23 de julho e 22 de agosto
    },
    {
        nome: "maria",
        idade: 45,
        ano_de_nascimento: 1979,
        signo: "Áries" // Supondo que nasceu entre 21 de março e 19 de abril
    },
    {
        nome: "joão",
        idade: 34,
        ano_de_nascimento: 1990,
        signo: "Escorpião" // Supondo que nasceu entre 23 de outubro e 21 de novembro
    },
    {
        nome: "ana",
        idade: 28,
        ano_de_nascimento: 1996,
        signo: "Touro" // Supondo que nasceu entre 20 de abril e 20 de maio
    },
    {
        nome: "carlos",
        idade: 60,
        ano_de_nascimento: 1964,
        signo: "Aquário" // Supondo que nasceu entre 20 de janeiro e 18 de fevereiro
    }
];

// Função para validar a idade de cada pessoa
function validarIdade(pessoa) {
    let anoAtual = new Date().getFullYear();
    let idadeCalculada = anoAtual - pessoa.ano_de_nascimento;

    if (idadeCalculada === pessoa.idade) {
        console.log(pessoa.nome + ": A idade está correta.");
    } else {
        console.log(pessoa.nome + ": A idade está incorreta.");
    }
}

// Exibindo as informações e validando a idade de cada pessoa
pessoas.forEach(pessoa => {
    console.log("Nome:", pessoa.nome);
    console.log("Idade:", pessoa.idade);
    console.log("Ano de Nascimento:", pessoa.ano_de_nascimento);
    console.log("Signo:", pessoa.signo);
    
    // Validar a idade
    validarIdade(pessoa);
    console.log("-----------------------------");
});
