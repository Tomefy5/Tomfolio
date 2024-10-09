import './bootstrap-5.3.3-dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Sections from './Components/Sections';

function App() {
  return (
    <div className="App">
      <div className='container-sections container'>
        <Header />
        <Sections />
      </div>
    </div>
  );
}

export default App;
