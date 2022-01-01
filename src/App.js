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
    let [keepmask, setKeepmask] = useState([true, true, true, true, true]);
    // ....... for the other ones

    function sleep(ms) {
        return new Promise((res, rej) => {
            setTimeout(() => {res()}, ms)
        }) 
    }

    function sortCurrentRoll(currentRoll, keepmask) {
        let zipped = [];
        for (let i = 0; i < 5; i++) {
            zipped[i] = [currentRoll[i], keepmask[i]];
        }

        zipped.sort((a, b) => a[0] - b[0]);

        return [zipped.map(v => v[0]), zipped.map(v => v[1])];
    }

    async function nextTurn() {
        // Let the button know the AI is working...
        setMyTurn(true);

        await sleep(1000);

        // Calculate move in the background
        let [scoreCard, currentRoll, currentPlay, goalRoll, goalPlay, actualPlay, rollsLeft, keepmask] = await backend.nextTurn();
        // Update UI with currentRoll, currentPlay, etc.
        [currentRoll, keepmask] = sortCurrentRoll(currentRoll, keepmask);
        setScoreCard(scoreCard);
        setCurrentRoll(currentRoll);
        setCurrentPlay(currentPlay);
        setGoalRoll(goalRoll.sort());
        setGoalPlay(goalPlay);
        setActualPlay(actualPlay);
        setRollsLeft(rollsLeft);
        setMyTurn(false);
        setKeepmask(keepmask);
    }

    return (
        <div className="App">
            <YahtzeeBoard state={scoreCard} actualPlay={actualPlay} />
            <Roll currentRoll={currentRoll} currentPlay={currentPlay} rollsLeft={rollsLeft} keepmask={keepmask} />
            <Goal goalRoll={goalRoll} goalPlay={goalPlay} rollsLeft={rollsLeft}/>
            <div className="Calc">
                <ProgressBar myTurn={myTurn} nextTurn={nextTurn} rollsLeft={rollsLeft} myTurn={myTurn} />

            </div>
            <GameBackground />

        </div>
    );
}

export default App;
