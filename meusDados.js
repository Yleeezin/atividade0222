function meusDados() {
    let pessoa = {
        nome: 'jhon doe',
        idade: '30',
        cidade: 'New York'
    }

    // Substituir os dados do objeto reatribuindo os valores
    pessoa = {
        ...pessoa, // Mantém os valores existentes
        nome: 'Jane Smith', // Novo valor para 'nome'
        cidade: 'Los Angeles' // Novo valor para 'cidade'
    };

    // Excluir o campo 'idade' do objeto
    delete pessoa.idade;

    return pessoa;
}

console.log(meusDados());
