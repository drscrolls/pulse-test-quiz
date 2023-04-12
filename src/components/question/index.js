import React, { useEffect, useState } from 'react'



export default function Question({ data }) {
    let { question, answer, options } = data;

    const [selectedAnswer, setSelectedAnswer] = useState('');

    useEffect(() => {
        //   console.log('selectedAnswer', selectedAnswer);
    }, [selectedAnswer])


    const handleSelect = (val) => {
        setSelectedAnswer(val);
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
                <h5 className="card-title mb-4">{question}</h5>
                {options.map((item, index) => <OptionComponent key={index} text={item} />)}
            </div>
        </div>
    )
}
