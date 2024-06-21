function List(props){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <li>Time: {props.time}</li>
                <li>Jogador: {props.jogador}</li>
                <li>Número da camisa: {props.numero}</li>
            </ul>
        </>   
    )
}
export default List;