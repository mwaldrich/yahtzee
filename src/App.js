import logo from './logo.svg'
import './App.css'
import YahtzeeState from './backend/YahtzeeState'
import GameBackground from './ui/GameBackground'
import YahtzeeBoard from './ui/YahtzeeBoard';
import Roll from './ui/Roll'
import Goal from './ui/Goal'
import ProgressBar from './ui/ProgressBar'
import { useState } from 'react';

/*

            */
const backend = {};

function App() {
    // Define state
    let [myTurn, setMyTurn] = useState(false);
    let [currentRoll, setCurrentRoll] = useState([5, 3, 3, 4, 5]);
    let [currentPlay, setCurrentPlay] = useState(5);
    let [goalRoll, setGoalRoll] = useState([1, 2, 3, 4, 5]);
    let [goalPlay, setGoalPlay] = useState(10);
    let [rollsLeft, setRollsLeft] = useState(3);
    // ....... for the other ones

    function nextTurn() {
        // Let the button know the AI is working...
        setMyTurn(true);

        // Calculate move in the background
        setTimeout(() => {
            new Promise((res, rej) => {
                let [currentRoll, currentPlay, goalRoll, goalPlay] = [[1, 1, 3, 5, 2], 0, [1, 1, 1, 1, 1], 11] // backend.nextTurn();
                // Update UI with currentRoll, currentPlay, etc.
                setCurrentRoll(currentRoll);
                setCurrentPlay(currentPlay);
                setGoalRoll(goalRoll);
                setGoalPlay(goalPlay);
                if(rollsLeft===0){
                    rollsLeft=3
                } else {
                    rollsLeft-=1
                }
                setRollsLeft(rollsLeft);
                setMyTurn(false);
            })
        }, 5000 /*5 seconds*/);
    }

    return (
        <div className="App">
            <YahtzeeBoard state={
                new YahtzeeState([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12, 13])
            } />

            <Roll currentRoll={currentRoll} rollsLeft={rollsLeft}/>
            <Goal goalRoll={goalRoll} />
            <div className="Calc">
                <ProgressBar /*state={
                    new Progress(myTurn={myTurn},nextTurn={nexTurn})
                }*/myTurn={myTurn} nextTurn={nextTurn} />

            </div>
            <GameBackground />

        </div>
    );
}

export default App;
