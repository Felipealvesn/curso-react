import styles from './Pessoa.module.css';

function Pessoa({nome, profissão, idade, sexo}){
    return(
        <div className={styles.Pessoa}>

            <h2>Nome: {nome}</h2>
            <p>Profissão: {profissão}</p>
            <p>Idade: {idade}</p>
            <p>Sexo: {sexo}</p>

        </div>
    )
}
export default Pessoa;