import * as React from 'react'
import './buttons-container.css'

export default function ButtonsContainer({ isNextEnabled, goToPreviousQuestion, goToNextQuestion, isLastQuestion, previous, next }) {
    return <div className="control-btn-container">
        <PreviousButton goToPreviousQuestion={goToPreviousQuestion} previous={previous} />
        <div className="spacer"></div>
        <NextButton isEnabled={isNextEnabled} isLastQuestion={isLastQuestion} goToNextQuestion={goToNextQuestion} next={next} />
    </div>
}

function PreviousButton({ goToPreviousQuestion, previous }) {
    return <button className="previous-btn" onClick={goToPreviousQuestion}>{previous}</button>

}

function NextButton({ goToNextQuestion, isLastQuestion, next, isEnabled }) {
    return <button
        className={isEnabled ? "next-btn next-btn-disabled" : "next-btn next-btn-enabled"}
        onClick={goToNextQuestion}
        disabled={isEnabled ? true : false}>
        {isLastQuestion ? "Finish" : next} </button>
}