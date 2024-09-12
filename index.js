const { select, input, checkbox } = require('@inquirer/prompts')

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

const listarMetas = async () => {
    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, o espaço para selecionar ou marcar ou desmarcar e enter para finalizar etapa",
        choices: [...metas]
    })

    if(respostas.length == 0) {
        console.log("Nenhuma meta selecionada!")
        return
    }

    metas.forEach((m) => {
        m.checked = false
    })

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })

    console.log('Meta(s) marcadas como concluída(s)')
}

const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if(realizadas.length == 0) {
        console.log('Não existem metas realizadas!')
        return
    }

    await select({
        message: "Metas Realizadas",
        choices: [...realizadas]
    })
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
                        name: "Metas realizadas",
                        value: "realizadas"
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
                    await listarMetas()
                    break
                case "realizadas":
                    await metasRealizadas()
                case "sair":
                    console.log("Até a próxima!")
                    return
            }
        }
    }

    start ()