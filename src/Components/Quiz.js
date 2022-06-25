import React, { useState } from 'react'
import { questions } from '../Questions';

import './Quiz.css';

const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [correct, setCorrect] = useState("");

    const [timer, setTimer] = useState(5);

    setTimeout(() => {
        setTimer(timer - 1);
        if(timer == 0){
            setCurrentQuestion(currentQuestion + 1);
            setTimer(5);
            setCorrect("");
        }
    }, 1000);

    const handleAnswer = (isCorrect) => {
        if(isCorrect) {
            setScore(score + 10);
            setCorrect(true);
        }
        else setCorrect(false);

    };
    
  return (
    <div>
        <h1 className='Header'>Quiz App</h1>
            {currentQuestion < 5 ? 
            (
            <div>
                <div className='TopSection'>
                    <span className='questionBox'>Question {currentQuestion}/4</span>
                    <span className='scoreBox'>Score : {score}/50</span>
                    <span className='timeBox'>Time Left: 0 : {timer}</span>
                </div>
                
                <div className='questionCard'>
                    <div>
                        <p className='question'>{questions[currentQuestion].question}</p>
                    </div>
                    <div className='options'>
                        {questions[currentQuestion].Options.map((Options) => (
                            <button className={correct === "" ? '' : correct ? 'correct' : 'wrong' } onClick={() => handleAnswer(Options.isCorrect)}>{Options.answer}</button>
                        ))}
                    </div>
                </div>
            </div>
         ) : (
                <div className='resultCard'>
                    <h1 className='result'>Result</h1>
                    <div className='finalScore'>Score : {score}/50</div>
                </div>
            )} 
    </div>
  )
}

export default Quiz