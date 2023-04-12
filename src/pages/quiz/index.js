import React, { useEffect } from 'react'
import Question from '../../components/question'
import { useState } from 'react';

let questions = [
    {
        qid: 1,
        question: "What is matter?",
        options: [
            "Matter is a force",
            "Matter is a unit measurement of energy",
            "Matter is anything that has weight and mass",
            "Matter is the smallest particle of an item"
        ],
        answer: "Matter is anything that has weight and mass",
        isVisible: true
    },
    {
        qid: 2,
        question: "Name the unit measurement of energy",
        options: [
            "Kilograms (kg)",
            "Joules (J)",
            "m/s",
            "Watts (W)"
        ],
        answer: "Joules (J)",
        isVisible: false
    }
]


export default function Quiz() {
    // initialize states
    const [score, setScore] = useState(0);
    const [quizQuestions, setQuizQuestions] = useState(questions);
    const [isFinished, setIsFinished] = useState(false);

    // method to show final results
    const showResults = (qIndex, selectedAnswer) => {
        let q = quizQuestions[qIndex];
        updateScore(selectedAnswer, q);
        setIsFinished(true)
    }

    // method to update score
    const updateScore = (answer, qObj) => {
        if (answer == qObj.answer) {
            setScore(score + 1);
        }
    }

    // method to show next question
    const showNextQuestion = (qIndex, selectedAnswer) => {

        // set index of next question
        let nextIndex = qIndex + 1;

        //get current question object
        let q = quizQuestions[qIndex];
        
        // update score with the given answer
        updateScore(selectedAnswer, q);

        // set next question to visible and all others as not visible
        var updatedQuestions = quizQuestions.map((obj, index) => {
            if (index === nextIndex) {
                return { ...obj, isVisible: true };
            } else {
                return { ...obj, isVisible: false };
            }
        });

        // update quiz questions state
        setQuizQuestions(updatedQuestions)
    }



    return (
        <div>
            <h1 align="center">QUIZ</h1>
            <p align="center">Answer the following questions below</p>

            {/* Score display */}
            <div>
                <button type="button" className="btn btn-dark">Score: {score}</button>
            </div>

            {/* Quiz body */}
            <div className='pt-3' align="center">
                {
                    !isFinished ?
                        quizQuestions.length > 0 && quizQuestions ?
                            quizQuestions.map((q, index) => (<Question key={index} data={q} goToNextQuestion={showNextQuestion} finishQuiz={showResults} totalQuestions={questions.length} />))
                            :
                            <>
                                <h3>No questions found</h3>
                            </>
                        :
                        <div className='card' style={{ width: "80%" }}>
                            <div className='card-body'>
                                <h2>Finished</h2>
                                <p>Your score is <b>{score}</b></p>
                            </div>
                        </div>
                }
            </div>

        </div>
    )
}
