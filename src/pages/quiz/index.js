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
    const [score, setScore] = useState(0);
    const [quizQuestions, setQuizQuestions] = useState(questions);
    const [question, setQuestion] = useState({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
    const [isFinished, setIsFinished] = useState(false);


    useEffect(() => {
        if (questions.length > 0) {
            setQuestion(questions[0]);
            setCurrentQuestionIndex(0);
        }
    }, [])


    const showResults = (qIndex, selectedAnswer) => {
        let q = quizQuestions[qIndex];

        if (selectedAnswer == q.answer) {
            setScore(score + 1);
        }
        setIsFinished(true)
    }
    

    const showNextQuestion = (qIndex, selectedAnswer) => {
        let nextIndex = qIndex + 1;

        let q = quizQuestions[qIndex];

        if (selectedAnswer == q.answer) {
            setScore(score + 1);
        }

        var updatedQuestions = quizQuestions.map((obj, index) => {
            if (index === nextIndex) {
                return { ...obj, isVisible: true };
            } else {
                return { ...obj, isVisible: false };
            }
        });

        setQuizQuestions(updatedQuestions)

        // console.log('updatedQuestions', updatedQuestions)
        // console.log('quizQuestions', quizQuestions)
    }



    return (
        <div>
            <h1 align="center">QUIZ</h1>
            <p align="center">Answer the following questions below</p>

            <div>
                <button type="button" className="btn btn-dark">Score: {score}</button>
            </div>

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
                        <div className='card'>
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
