import * as React from 'react'
import './answer-container.css'

export default function AnswerContainer({ answer, conditional, setAnswerToYes, setAnswerToNo, yesAnswerTitle, noAnswerTitle }) {
    return <div className="answer-container">
        <div className="question-number">Answer Options</div>
        <button className={answer === "yes" ? "option-btn option-btn-selected" : "option-btn"} onClick={setAnswerToYes} >{yesAnswerTitle}</button>
        {answer === "yes" && <div className="conditional">{conditional}</div>}
        <button className={answer === "no" ? "option-btn option-btn-selected" : "option-btn"} onClick={setAnswerToNo} >{noAnswerTitle}</button>
    </div>
}