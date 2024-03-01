function manipulaAnimais() {
    let animais = ['cacohrro', 'gato', 'abelha', 'rato', 'leão', 'galinha'];

    function ordemAlfabetica() {
        return animais.sort();
    }

    function primeiro() {
        return animais[0];
    }

    function ultimo() {
        return animais[animais.length - 1];
    }

    function tamanhoDaLista() {
        return animais.length;
    }

    return {
        ordemAlfabetica,
        primeiro,
        ultimo,
        tamanhoDaLista
    };
}

module.exports = manipulaAnimais();
