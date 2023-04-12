import React from 'react'

const questions = [
    {
        question: "What is matter?",
        options: [
            "Matter is a force",
            "Matter is a unit measurement of energy",
            "Matter is anything that has weight and mass",
            "Matter is the smallest particle of an item"
        ],
        answer: "Matter is anything that has weight and mass"
    },
    {
        question: "Name the unit measurement of energy",
        options: [
            "Kilograms (kg)",
            "Joules (J)",
            "m/s",
            "Watts (W)"
        ],
        answer: "Joules (J)"
    }
]


export default function Quiz() {
  return (
    <div>
      <h1 align="center">QUIZ</h1>
      <p align="center">Answer the following questions below</p>
    </div>
  )
}
