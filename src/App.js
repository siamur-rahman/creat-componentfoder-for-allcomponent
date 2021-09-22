
import './App.css';
import Ajaira from './Components/Ajaira/Ajaira';
import Countries from './Components/Countries/Countries';
import Header from './Components/Header/Header';
import People from './Components/People/People';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <p>kha kha moru vumi </p>
      <People></People>
      <Countries></Countries>
      <Ajaira></Ajaira>
    </div>
  );
}

export default App;
