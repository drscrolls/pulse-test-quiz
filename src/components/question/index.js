import React, { useEffect, useState } from 'react'
import "./style.css";



export default function Question({ data, totalQuestions, goToNextQuestion, finishQuiz }) {
    let { question, answer, options, isVisible, qid } = data;

    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);



    useEffect(() => {
        // setIsQuestionShowing(isVisible);
    }, [])


    const handleSelect = (val) => {
        setShowError(false);
        setSelectedAnswer(val);
    }

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

    const OptionComponent = ({ text }) => {
        return (
            <div className={"card border-2 mb-2 pointer " + (selectedAnswer == text ? "border-info" : "border-light")} onClick={() => handleSelect(text)}>
                <div className="card-body">
                    <p className="card-text">{text}</p>
                </div>
            </div>);
    }


    return (
        <div className={"card " + (!isVisible ? 'd-none' : '')} style={{ width: "60%" }}>

            {
                !data ? <></> : <><div className="card-body">
                    <h5 className="card-title mb-4">Question {qid}: {question}</h5>

                    {showError ? <p className="card-title my-4 text-danger">{error}</p> : <></>}


                    {options.map((item, index) => <OptionComponent key={index} text={item} />)}
                </div>
                    <div className="card-footer mt-3">
                        {
                            qid < totalQuestions ?
                                <button type="button" className="btn btn-primary" onClick={() => handleNextQuestion()}>Next</button>
                                :
                                <button type="button" className="btn btn-primary" onClick={() => handleFinish()}>Finish</button>
                        }
                    </div>
                </>
            }



        </div>
    )
}
