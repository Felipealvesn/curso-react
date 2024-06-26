import Button from "./Button"

function Eventos(){

    function primeiroEvento(){
        console.log("Evento ativado")
    }

    function segundoEvento(){
        console.log("segundo evento ativado")
    }

    
    return(
        <div>
            <p>primeiro evento: </p>
            <Button text="evento" event={primeiroEvento}/>
            <Button text="evento 2" event={segundoEvento}/>
        </div>
    )
}
export default Eventos