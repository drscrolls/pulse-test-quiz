import React, { useEffect, useState } from 'react'
import "./style.css";



export default function Question({ data, questionNumber, totalQuestions }) {
    let { question, answer, options } = data;

    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        //   console.log('selectedAnswer', selectedAnswer);
    }, [selectedAnswer])


    const handleSelect = (val) => {
        setShowError(false);
        setSelectedAnswer(val);
    }

    const handleNextQuestion = () => {
        setShowError(false);
        if(!selectedAnswer){
            setError('Please select an answer');
            setShowError(true);
        }else{

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
        <div className="card" style={{ width: "60%" }}>
            <div className="card-body">
                <h5 className="card-title mb-4">Question {questionNumber}: {question}</h5>

                {showError ? <p className="card-title my-4 text-danger">{error}</p> : <></>}
                

                {options.map((item, index) => <OptionComponent key={index} text={item} />)}
            </div>

            <div class="card-footer mt-3">
                {
                    questionNumber < totalQuestions ? 
                    <button type="button" class="btn btn-primary" onClick={()=> handleNextQuestion()}>Next</button>
                    :
                    <button type="button" class="btn btn-primary">Finish</button>
                }
            </div>
        </div>
    )
}
