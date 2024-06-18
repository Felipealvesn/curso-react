import Frase from './frase';
function HelloWorld(){
   let url = 'logo512.png'
return(
 <div className="div-pai">
    <p>Primeiro component</p>
    <div>
     <Frase/>1
      <img src={url} alt="imagem"/>
    </div>
 </div>
)
}
export default HelloWorld;