import logo from './logo.svg'
import './App.css'
import GameBackground from './ui/GameBackground'
import YahtzeeBoard from './ui/YahtzeeBoard';

function App() {
    return (
        <div className="App">

          <GameBackground />
          <YahtzeeBoard />

        </div>
    );
}

export default App;
