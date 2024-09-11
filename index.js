 const { select } = require ('@inquirer/prompts')

const start = async () => {

    while(true){
        
        // await (programa para) é para aguardar o usuário fazer alguma solicitação (promessa), exemplo uber: você solicita um carro e ele 'promete' que vai voltar com uma resposta, seja ela se encontrou um carro ou não.

        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })
        
        switch(opcao) {
            case "cadastrar":
                console.log("Vamos cadastrar")
                break
            case "listar":
                console.log("Vamos listar")
                break
            case "sair":
                console.log("Até mais")
                return
        }
    }
}

start()