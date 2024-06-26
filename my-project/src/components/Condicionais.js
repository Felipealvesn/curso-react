import { useState } from "react"

function Condicionais(){

    function cadastrado(e){
        e.preventDefault()
        setUser(Email)
    }
    const [Email, setEmail] = useState()
    const [userEmail, setUser] = useState()
    return(
        <div>
            <h2>Cadastro de E-mail</h2>
            <form>
                <input type="email" required id="email" placeholder="Digite seu E-mail" className="input" onChange={(e) => setEmail(e.target.value)}/> 
                <input type="submit"  value="Cadastrar" className="submit" onClick={cadastrado}/>
                {userEmail &&(
                    <p>E-mail: {userEmail}</p>
                )}
            </form>
        </div>
    )
}
export default Condicionais