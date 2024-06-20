import styles from './Pessoa.css';

function Pessoa({nome, profissão, idade, sexo}){
    return(
        <div className={styles.Pessoa}>
            <hr/>

            <h2>Nome: {nome}</h2>
            <p>Profissão: {profissão}</p>
            <p>Idade: {idade}</p>
            <p>Sexo: {sexo}</p>

            <hr/>
        </div>
    )
}
export default Pessoa;