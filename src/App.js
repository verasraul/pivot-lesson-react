import './App.css';
import GrandParent from './component/GrandParent';

function App() {

  let quote = {
    Gandalf: 'Look to my coming on the first light of the fifth light of the fifth day, at dawn look to east'
  }


  return (
    <div className="App">
      <GrandParent quote={ quote } />
    </div>
  );
}

export default App;
