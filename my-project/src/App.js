import './App.css';
import HelloWorld from './components/HelloWorld';
import Nome from './components/Nome';
import Pessoa from './components/Pessoa';

function App() {
  let nome = "felipe alves"
  const img = 'logo192.png' 
  return (
    <div className="App">
      <h1>começando react</h1>
      <p>boa sorte: {nome}</p>
      <img src={img} alt="imagem"/>
      <div>
        <HelloWorld />
        <Nome name="Gabriel Garcia" />
        <Nome name=" Gabriel camilo" />
        <Nome name="Yago" />
        <Pessoa nome="Felipe" profissão="Programador"  idade="18" sexo="Masculino" />
        
      </div>
    </div>
  );
}

export default App;
