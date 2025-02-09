import { useState, useEffect, useRef } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import confetti from 'canvas-confetti';


export default function SquarerootinGame() {
  const [number, setNumber] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [roundScore, setRoundScore] = useState(null);
  const [totalScore, setTotalScore] = useState(0);
  const [gameState, setGameState] = useState('not_started');
  const [roundNumber, setRoundNumber] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]);
  const [userName, setUserName] = useState('');
  const [gameMode, setGameMode] = useState('timed');
  const [difficulty, setDifficulty] = useState('hard');
  const [roundScores, setRoundScores] = useState([]);
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);
  const inputRef = useRef(null);

  const getTimeLimit = (round) => {
    if (gameMode === 'practice') return Infinity;
    return round === 1 ? 5 : round <= 3 ? 10 : 15;
  };

  const getNumberRange = (round) => {
    return round === 1 ? 100 : round <= 3 ? 400 : 1000;
  };

  const startGame = () => {
    const round = roundNumber + 1;
    const range = getNumberRange(round);
    const randomNumber = Math.floor(Math.random() * range) + 1;
    setNumber(randomNumber);
    setTimeLeft(getTimeLimit(round));
    setUserGuess('');
    setRoundScore(null);
    setGameState('in_progress');
    setRoundNumber(round);
    startTimeRef.current = Date.now();
  };

  const submitGuess = () => {
    if (number === null || startTimeRef.current === null) return;
    const timeTaken = (Date.now() - startTimeRef.current) / 1000;
    const actualSquareRoot = Math.sqrt(number);
    let guessValue = parseFloat(userGuess) || 0;
    let calculatedScore = Math.max(0, 100 - 100 * Math.abs(actualSquareRoot - guessValue));
    const bonus = timeTaken <= 5 ? 2 : 1;
    calculatedScore *= bonus;

    setRoundScore(calculatedScore);
    setTotalScore(prevTotal => prevTotal + calculatedScore);
    setRoundScores(prevScores => [...prevScores, calculatedScore]);

    setGameState(roundNumber < 5 ? 'finished' : 'summary');
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    if (gameState === 'in_progress' && timeLeft > 0 && gameMode === 'timed') {
      timerRef.current = setInterval(() => setTimeLeft(prevTime => prevTime - 1), 1000);
    } else if (timeLeft === 0 && gameState === 'in_progress' && gameMode === 'timed') {
      submitGuess();
    }
    return () => clearInterval(timerRef.current);
  }, [gameState, timeLeft, gameMode]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md mx-auto h-[calc(100vh-2rem)] flex flex-col">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl font-bold text-center">Squarerootin</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between space-y-4 overflow-y-auto">
          {gameState === 'not_started' && (
            <>
              <Button onClick={startGame} className="w-full text-lg">Start Game</Button>
            </>
          )}
          {gameState === 'in_progress' && (
            <>
              <div className="text-center text-xl font-bold">Round {roundNumber}/5: √{number}</div>
              <Input type="number" placeholder="Enter your guess" value={userGuess} onChange={(e) => setUserGuess(e.target.value)} className="text-lg" ref={inputRef} />
              <Button onClick={submitGuess} className="w-full text-lg">Submit Guess</Button>
            </>
          )}
          {gameState === 'finished' && (
            <>
              <div className="text-center">Round Score: {roundScore}</div>
              <Button onClick={startGame} className="w-full text-lg">Next Round</Button>
            </>
          )}
          {gameState === 'summary' && (
            <>
              <div className="text-center font-bold">Game Summary</div>
              <div className="text-center">Total Score: {totalScore}</div>
              <Button onClick={() => setGameState('not_started')} className="w-full text-lg">Play Again</Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
