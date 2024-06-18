import './App.css';
import HelloWorld from './components/HelloWorld';
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
      </div>
    </div>
  );
}

export default App;
