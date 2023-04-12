import React, { useEffect, useState } from 'react'



export default function Question({ data, questionNumber, totalQuestions }) {
    let { question, answer, options } = data;

    const [selectedAnswer, setSelectedAnswer] = useState('');

    useEffect(() => {
        //   console.log('selectedAnswer', selectedAnswer);
    }, [selectedAnswer])


    const handleSelect = (val) => {
        setSelectedAnswer(val);
    }

    const handleNextQuestion = () => {
        
    }

    const OptionComponent = ({ text }) => {
        return (
            <div className={"card border-2 mb-2 " + (selectedAnswer == text ? "border-info" : "border-light")} onClick={() => handleSelect(text)}>
                <div className="card-body">
                    <p className="card-text">{text}</p>
                </div>
            </div>);
    }


    return (
        <div className="card" style={{ width: "60%" }}>
            <div className="card-body">
                <h5 className="card-title mb-4">Question {questionNumber}: {question}</h5>
                {options.map((item, index) => <OptionComponent key={index} text={item} />)}
            </div>

            <div class="card-footer mt-3">
                {
                    questionNumber < totalQuestions ? 
                    <button type="button" class="btn btn-primary">Next</button>
                    :
                    <button type="button" class="btn btn-primary">Finish</button>
                }
            </div>
        </div>
    )
}
