import * as React from 'react'
import './pane.css'
import QuestionContainer from '../question-container/question-container'
import AnswerContainer from '../answer-container/answer-container'
import ButtonsContainer from '../buttons-container/buttons-container'

export default class Pane extends React.Component {
    render() {
        const { statement, goToNextQuestion, goToPreviousQuestion, qno, answerYes, answerNo, total, yes, no, previous, next } = this.props;
        return (
            <div className="pane">
                <div className="statement-container">
                    <QuestionContainer
                        questionNumber={qno + 1}
                        total={total}
                        question={statement.question} />
                    <AnswerContainer answer={statement.answer}
                        conditional={statement.conditional}
                        setAnswerToYes={() => answerYes(qno)}
                        setAnswerToNo={() => answerNo(qno)}
                        yesButtonTitle={yes}
                        noButtonTitle={no} />
                </div>
                <ButtonsContainer isNextEnabled={isNextEnabled(statement)} goToPreviousQuestion={goToPreviousQuestion} goToNextQuestion={goToNextQuestion} isLastQuestion={isLastQuestion(qno, total)} previous={previous} next={next} />
            </div >
        )
    }
}




function isLastQuestion(number, total) {
    return number === total - 1 ? true : false
}

function isNextEnabled(statement) {
    return (statement.answer === undefined || (statement.conditional !== undefined && statement.answer === "yes" && statement.conditionalAnswer === undefined)) ? true : false
}