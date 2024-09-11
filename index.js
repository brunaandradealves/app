const { select, input } = require('@inquirer/prompts')

let meta = {
    value: 'Tomar 3L de água por dia',
    checked: false,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta: "})

    if(meta.length == 0) {
        console.log('A meta não pode ser vazia.')
        return
    }

    metas.push(
        { value: meta, checked: false }
    )
}

    const start = async () => {

        while(true){
            
            const opcao = await select({
                message: "Menu >", // mensagem inicial, assim que o codigo rodar
                choices: [ // array de opções que podem ser acessadas pelo usuario
                    {
                        name: "Cadastrar meta", // nome da opção 1
                        value: "cadastrar" // valor da opção 1
                    },
                    {
                        name: "Listar metas", // nome da opção 2
                        value: "listar" // valor da opção 2
                    },
                    {
                        name: "Sair", // nome da opção 3
                        value: "sair" // valor da opção 
                    }
                ]
            })

            switch(opcao) {
                case "cadastrar":
                    await cadastrarMeta()
                    console.log(metas)
                    break
                case "listar":
                    console.log("vamos listar")
                    break
                case "sair":
                    console.log("Até a próxima!")
                    return
            }
        }
    }

    start ()