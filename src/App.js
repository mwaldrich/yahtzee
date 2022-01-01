import logo from './logo.svg'
import './App.css'
import YahtzeeState from './backend/YahtzeeState'
import { Backend } from './backend/ai'
import GameBackground from './ui/GameBackground'
import YahtzeeBoard from './ui/YahtzeeBoard';
import Roll from './ui/Roll'
import Goal from './ui/Goal'
import ProgressBar from './ui/ProgressBar'
import { useState } from 'react';

/*

            */
const backend = new Backend();

function App() {
    // Define state
    let [myTurn, setMyTurn] = useState(false);
    let [currentRoll, setCurrentRoll] = useState(backend.roll);
    let [currentPlay, setCurrentPlay] = useState(0);
    let [goalRoll, setGoalRoll] = useState([null, null, null, null, null]);
    let [goalPlay, setGoalPlay] = useState(backend.goalPlay);
    let [rollsLeft, setRollsLeft] = useState(backend.rollsRemaining);
    let [scoreCard, setScoreCard] = useState(new YahtzeeState())
    let [actualPlay, setActualPlay] = useState(backend.actualPlay);
    // ....... for the other ones

    function nextTurn() {
        // Let the button know the AI is working...
        setMyTurn(true);

        // Calculate move in the background
            new Promise((res, rej) => {
                let [scoreCard, currentRoll, currentPlay, goalRoll, goalPlay, actualPlay, rollsLeft] = backend.nextTurn();
                // Update UI with currentRoll, currentPlay, etc.
                setScoreCard(scoreCard);
                setCurrentRoll(currentRoll);
                setCurrentPlay(currentPlay);
                setGoalRoll(goalRoll);
                setGoalPlay(goalPlay);
                setActualPlay(actualPlay);
                setRollsLeft(rollsLeft);
                setMyTurn(false);
            })
    }

    return (
        <div className="App">
            <YahtzeeBoard state={scoreCard} actualPlay={actualPlay}/>
            <Roll currentRoll={currentRoll.sort()} currentPlay={currentPlay} rollsLeft={rollsLeft}/>
            <Goal goalRoll={goalRoll.sort()} goalPlay={goalPlay} />
            <div className="Calc">
                <ProgressBar myTurn={myTurn} nextTurn={nextTurn} />

            </div>
            <GameBackground />

        </div>
    );
}

export default App;
