import logo from './logo.svg'
import './App.css'
import YahtzeeState from './backend/YahtzeeState'
import { Backend } from './backend/ai'
import GameBackground from './ui/GameBackground'
import YahtzeeBoard from './ui/YahtzeeBoard';
import Roll from './ui/Roll'
import Goal from './ui/Goal'
import ProgressBar from './ui/ProgressBar'
import { useState, useRef } from 'react';

//import sounds
import s0 from "./sounds/0.mp3";
import s1 from "./sounds/1.mp3";
import s2 from "./sounds/2.mp3";
import s3 from "./sounds/3.mp3";
import s4 from "./sounds/4.mp3";
import s5 from "./sounds/5.mp3";
import s6 from "./sounds/6.mp3";
import s7 from "./sounds/7.mp3";
import s8 from "./sounds/8.mp3";
import s9 from "./sounds/9.mp3";
import s10 from "./sounds/10.mp3";
import s11 from "./sounds/11.mp3";
import s12 from "./sounds/12.mp3";
import r1 from "./sounds/roll1.mp3";
import r2 from "./sounds/roll1.mp3";
import r3 from "./sounds/roll1.mp3";
import r4 from "./sounds/roll1.mp3";
import r5 from "./sounds/roll1.mp3";

const soundsArray = [
    s0,
    s1,
    s2,
    s3,
    s4,
    s5,
    s6,
    s7,
    s8,
    s9,
    s10,
    s11,
    s12
];

const rollSoundsArray = [
    r1,
    r2,
    r3,
    r4,
    r5
];

/*

            */
const backend = new Backend();

function audio(audionum) {
    const soundsPath = "./assets/sounds/";
    //converts the actual num to the name of it's corresponding audio file
    if(audionum){
        // let path = "../../sounds/"
        return soundsPath.concat(audionum.toString(10).concat('.', "mp3"));
    } else {
        return soundsPath + "0.mp3";
    }
}

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
    let soundEffectRef = useRef("soundEffectRef");
    let rollEffectRef = useRef("rollEffectRef")
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
        //this random does not work for some god forsaken reason
        let randSound = rollSoundsArray[Math.floor(Math.random() * 4)]
        console.log(`random number: ${randSound}`)
        rollEffectRef.current.src = randSound
        rollEffectRef.current.play();
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


    // console.log(`audio actualPlay: ${this.audio(this.props.actualPlay)} `)
    if(rollsLeft === 0) {
        if (soundEffectRef.current.play) {
            soundEffectRef.current.src = soundsArray[actualPlay];
            soundEffectRef.current.play();
        }
    }

    return (
        <div className="App">
            <audio ref={soundEffectRef} type="audio/mp3"></audio>
            <audio ref={rollEffectRef} type="audio/mp3"></audio>
            <YahtzeeBoard state={scoreCard} actualPlay={actualPlay} myTurn={myTurn}/>
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
