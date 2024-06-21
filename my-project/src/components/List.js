import PropTypes from 'prop-types'

function List({time, jogador, numero}){
    
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <li>Time: {time}</li>
                <li>Jogador: {jogador}</li>
                <li>Número da camisa: {numero}</li>
            </ul>
        </>   
    )
}
List.propTypes = {
    time: PropTypes.string.isRequired,
    jogador: PropTypes.string.isRequired,
    numero: PropTypes.number,
}

export default List;