function verificarMaiorIdade(idade) {
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade';
}

console.log(verificarMaiorIdade(20)); // "Maior de idade"
console.log(verificarMaiorIdade(13)); // "Menor de idade"
