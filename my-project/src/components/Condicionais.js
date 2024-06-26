import { useState } from "react"
import styles from './Forms.module.css';

function Condicionais(){

    function cadastrado(e){
        e.preventDefault()
        setUser(Email)
    }
    function limparEmail(){
      setUser("")
    }
    const [Email, setEmail] = useState()
    const [userEmail, setUser] = useState()
    return(
        <div>
            <h2>Cadastro de E-mail</h2>
            <form className={styles.form}>
                <input type="email" required id="email" placeholder="Digite seu E-mail" className={styles.input} onChange={(e) => setEmail(e.target.value)}/> 
                <input type="submit"  value="Cadastrar" className={styles.submit} onClick={cadastrado}/>
                {userEmail &&(
                    <div>
                    <p>E-mail: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar emali</button>
                    </div>
                )}
            </form>
        </div>
    )
}
export default Condicionais