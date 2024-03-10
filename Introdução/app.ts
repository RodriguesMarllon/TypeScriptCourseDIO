interface Pessoa {
    nome: string,
    idade: number
    profissao?: string
}

const pessoa: Pessoa = {
    nome: 'Marllon',
    idade: 19
}

const outraPessoa: Pessoa = {
    nome: 'Paulo',
    idade: 25,
    profissao: 'Desenvolvedor'
}

const arrayPessoa: Array<Pessoa> = [
    pessoa,
    outraPessoa
]

const arrayNum: number[] = [
    1, 2, 3
]

const arrayString: Array<String> = [
    '1', '2', '3'
]