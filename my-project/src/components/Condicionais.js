import { useState } from "react"

function Condicionais(){
    return(
        <div>
            <h2>Cadastro de E-mail</h2>
            <form>
                <input type="email" required placeholder="Digite seu E-mail" className="input" />
                <input type="submit"  value="Cadastrar" className="submit" />
            </form>
        </div>
    )
}
export default Condicionais