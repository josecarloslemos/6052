let formador = ["jose", 53, "1971"];

let pessoa = {
    nome: "jose",
    idade: 53,
    ano_de_nascimento: 1971,
    validar_idade: function() {
        // Calcula a idade com base no ano atual e no ano de nascimento
        let anoAtual = new Date().getFullYear();
        let idadeCalculada = anoAtual - this.ano_de_nascimento;

        if (idadeCalculada === this.idade) {
            console.log("A idade está correta.");
        } else {
            console.log("A idade está incorreta.");
        }
    }
};

console.log("nome:", formador[0]);
console.log("idade:", formador[1]);
console.log("ano de nascimento:", formador[2]);

console.log("nome:", pessoa.nome);

// Chama o método validar_idade
pessoa.validar_idade();
