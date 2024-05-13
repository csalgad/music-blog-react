import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Test from './components/Test';

function App() {
  return (
    <>        
    <div className="App">
      <header className="App-header">        
        <Header></Header>
        <Main></Main>
        <Test></Test>
      </header>
    </div>
    </>
  );
}

export default App;
