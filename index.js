// arrays, objetos
let meta = {
    value: 'ler um livro por mês',
    address: 2,
    checked: false,
    isChecked: (info) => {
        console.log(info)
    }
}

meta.value = "não é mais ler um livro"
meta.isChecked(meta.value)

// function // arrow function
// const criarMeta = () => {}

// function criarMeta() {}
