import { useState } from "react"

import './App.css';

function App() {

  const question = [
    {
      questionText: "What is thr capital of Australia?",
      answerOptions: [
        {answerText: "Sydney", isCorrect: true},
        {answerText: "Tashkent", isCorrect: false},
        {answerText: "New York", isCorrect: false},
        {answerText: "Berlin", isCorrect: false},
      ]
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        {answerText: "Bill Gates", isCorrect: false},
        {answerText: "Elon Musk", isCorrect: true},
        {answerText: "Jeff Bazos", isCorrect: false},
        {answerText: "Tony Stark", isCorrect: false},
      ]
    },
    {
      questionText: "The iPhone was created by which compony?",
      answerOptions: [
        {answerText: "Amazon", isCorrect: false},
        {answerText: "Intel", isCorrect: false},
        {answerText: "Microsoft", isCorrect: false},
        {answerText: "Apple", isCorrect: true},
      ]
    },
    {
      questionText: "How many Harry Potter books there?",
      answerOptions: [
        {answerText: "2", isCorrect: false},
        {answerText: "5", isCorrect: false},
        {answerText: "7", isCorrect: true},
        {answerText: "4", isCorrect: false},
      ]
    },
  ]

  const [currentQuession, setCurrentQuession] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)


  const handleAnswerButtonClick = (isCorrect) => {

    if(isCorrect) {
      alert("Correct answer!!!")
      setScore(score + 1)
    }

    const nextQuestion = currentQuession + 1
    if(nextQuestion < question.length) {
      setCurrentQuession(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <>
      <div className="app">
        {
          showScore ? (
            <>
              <div className="score">You scored {score} out of {question.length}</div>
            </>  
            ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <p>Question {currentQuession * 1 + 1}/<span>{question.length}</span></p>
                </div>
                <div className="question-text">{question[currentQuession].questionText}</div>
              </div>
              <div className="answer-section">
                {
                  question[currentQuession].answerOptions.map(answerOption => (
                    <button
                      className="btn"
                      key={answerOption.answerText}
                      onClick={()=> handleAnswerButtonClick(answerOption.isCorrect)}
                    >{answerOption.answerText}</button>
                  ))
                }
              </div>
            </>
          )
        }
      </div>
    </>
  );
}

export default App;
