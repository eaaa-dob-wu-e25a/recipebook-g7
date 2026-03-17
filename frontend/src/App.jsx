import axios from 'axios';
import './App.css' 
import RecipeList from './components/RecipeList';

const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    console.log(data)
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <button onClick={apiCall}>Make API Call</button>

        <RecipeList />



      </header>
    </div>
  );
}


export default App;
