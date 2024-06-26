import styles from './Forms.module.css';
import { useState } from 'react'

function Form(){
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    function cadastro(e){
        e.preventDefault()
        console.log("usuário cadastrado")
        console.log(`o usuário ${name}, foi cadastrado com a senha ${password}`)
    }
    return(
        <div>
            <form onSubmit={cadastro} className={styles.form}>
                <label className={styles.labels}>Nome:</label>
                <input type="text" name="nome" placeholder="Digite seu nome" className={styles.input} onChange={(e) => setName(e.target.value)}/>
                <label className={styles.labels}>Senha:</label>
                <input type="password" name="senha" placeholder="Digite sua senha" className={styles.input} onChange={(e) => setPassword(e.target.value)}/>
                <input type="submit" name="Enviar" value="Cadastrar" className={styles.submit}/>
            </form>
        </div>
    )
}
export default Form;