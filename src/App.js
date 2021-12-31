import logo from './logo.svg'
import './App.css'
import YahtzeeState from './backend/YahtzeeState'
import GameBackground from './ui/GameBackground'
import YahtzeeBoard from './ui/YahtzeeBoard';

function App() {
    return (
        <div className="App">

          <GameBackground />
          <YahtzeeBoard state={
            new YahtzeeState([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12, 13])
            } />

        </div>
    );
}

export default App;
