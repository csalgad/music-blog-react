import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Test from './components/Test';

function App() {
  return (
    <>
    <Header></Header>
    <Main></Main>    
    <div className="App">
      <header className="App-header">        
        <Test></Test>
      </header>
    </div>
    </>
  );
}

export default App;
