import * as React from 'react'
import './question-container.css'

export default function QuestionContainer({ questionNumber, total, question }) {
    return <div className="question-container">
        <div className="question-number">{"Question " + questionNumber + " of " + total}</div>
        <div className="question">
            {question}
        </div>
    </div>
}
