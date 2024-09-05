import {useState} from 'react'

function Form(){
    function cadastrarUsuario(e){
        e.preventDefault() // Serve para visualzar o evento meio que impede que seja enviado ao backend
        console.log(`O usuario ${name} foi cadastrado com a senha ${password}`)
    }
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    return(
        <div onSubmit={cadastrarUsuario}>
            <h1>Cadastro:</h1>
            <form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name='name' id="name" placeholder="Digite seu nome" value={name}onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" name="password" id="password" placeholder="Digite seu senha" onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}
export default Form