import React, { useEffect, useState } from 'react'
import "./style.css";



export default function Question({ data, totalQuestions, goToNextQuestion, finishQuiz }) {

    // initializing variables and states
    let { question, answer, options, isVisible, qid } = data;
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);


    // function to update answer if option is selected
    const handleSelect = (val) => {
        setShowError(false);
        setSelectedAnswer(val);
    }

    // check for answer and submit answer with question id to move to next question
    const handleNextQuestion = () => {
        setShowError(false);
        if (!selectedAnswer) {
            setError('Please select an answer');
            setShowError(true);
        } else {
            let qIndex = qid - 1;
            goToNextQuestion(qIndex, selectedAnswer);
        }
    }

    // check for answer and submit final answer to finish quiz
    const handleFinish = () => {
        setShowError(false);
        if (!selectedAnswer) {
            setError('Please select an answer');
            setShowError(true);
        } else {
            let qIndex = qid - 1;
            finishQuiz(qIndex, selectedAnswer);
        }
    }

    // check for answer and set submitted state
    const showAnswer = () => {
        setShowError(false);
        if (!selectedAnswer) {
            setError('Please select an answer');
            setShowError(true);
        } else {
            setIsSubmitted(true);
        }
    }


    // Component to render question option
    const OptionComponent = ({ text }) => {

        // set border color if option is clicked, not clicked, answer is correct, answer is not correct
        return (
            <div className={"card border-2 mb-2 pointer " + (isSubmitted ? (answer == text ? "border-green" : "border-danger") : selectedAnswer == text ? "border-info" : "border-light")} onClick={() => handleSelect(text)}>
                <div className="card-body">
                    <p className="card-text">{text}</p>
                </div>
            </div>);
    }


    return (
        <div className={"card " + (!isVisible ? 'd-none' : '')} style={{ width: "60%" }}>

            {/* Render Question body */}
            {
                !data ? <></> :
                    <>
                    <div className="card-body">
                        <h5 className="card-title mb-4">Question {qid}: {question}</h5>
                        
                        {/* Show error message */}
                        {showError ? <p className="card-title my-4 text-danger">{error}</p> : <></>}

                        {/* Render options */}
                        {options.map((item, index) => <OptionComponent key={index} text={item} />)}

                    </div>
                        <div className="card-footer mt-3">

                            {/* Quiz action buttons */}
                            {
                                isSubmitted ?
                                    qid < totalQuestions ?
                                        <button type="button" className="btn btn-primary" onClick={() => handleNextQuestion()}>Next</button>
                                        :
                                        <button type="button" className="btn btn-primary" onClick={() => handleFinish()}>Finish</button>
                                    :
                                    <button type="button" className="btn btn-primary" onClick={() => showAnswer()}>Submit</button>
                            }

                        </div>
                    </>
            }

        </div>
    )
}
