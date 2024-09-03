import HelloWorld from './components/HelloWorld';
import './App.css';
import SayMyName  from './components/SayMyName';
import Pessoa from './components/Pessoa';


function App() {

  const name = 'Carlos'
  return (
    <div className="App">
      <h1>Olá react</h1>
      <HelloWorld/>
      <SayMyName nome='Mario'/>
      <SayMyName nome='João'/>
      <SayMyName nome={name}/>
      <Pessoa nome='Tais' idade='19' profissao='Engenheira' foto='https://via.placeholder.com/150'/>
    </div>
  );
}

export default App;
