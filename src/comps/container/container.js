import * as React from 'react'
import './container.css'
import corona from '../../assets/virus.png'
import check from '../../assets/check.jpg'
import ambulance from '../../assets/ambulance.svg'
import helpCircle from '../../assets/help-circle.svg'
import headphone from '../../assets/headphone.svg'
import call from '../../assets/call.svg'
import rightCaret from '../../assets/right-caret.svg'
import { getQuestions, yesButton, noButton, nextButton, previousButton } from '../../assets/data'
import Progress from '../progress/progress'
import QuestionContainer from '../question-container/question-container'
import AnswerContainer from '../answer-container/answer-container'
import ButtonsContainer from '../buttons-container/buttons-container'

function ResultButton({ title, leftIcon, rightIcon, link, subtitle }) {
    return <a target="_blank" rel="noopener noreferrer" href={link} className="result-button" >
        <img src={leftIcon} className="result-button-icon" alt="left-icon" />
        <div class="result-button-text">
            <div className="result-button-title">{title}</div>
            <div className="result-button-sub-title">{subtitle}</div>
        </div>
        <img src={rightIcon} className="result-button-icon" alt="right-icon" />
    </a>
}

function Result({ statements }) {
    var CDCmessage = <font style={{ color: "#4caf50" }}><img width="40%" src={check} alt="checked" style={{ display: "block", margin: "32px auto" }} /><b>As per CDC and WHO Guidelines, you are not a likely suspect of COVID-19.</b></font>

    var warning = (<div>
        Incase your symptoms change, please take the self-assessment again or contact any healthcare facility near you.  <b><a target="_blank" rel="noopener noreferrer" href="https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf">helpline numbers.</a></b>
        <br /><br />
        In case you suspect a positive case, please <a href="tel:1075"><b>call 1075</b></a> or report to a nearby healthcare facility</div>)
    var result = <div>{CDCmessage}<br /><br />{warning}</div>

    var countries = ["china", "america", "usa", "united states of america", "italy", "iran", "south korea", "mainland china"]

    if (statements[0].answer === "yes" && countries.includes(statements[0].conditionalAnswer.toLowerCase())) {
        result = <div>
            {CDCmessage}<br /><br />DO not attend work and self-quarantine for 14 days after leaving the country{warning}</div>
    }

    if (statements[1].answer === "yes") {
        result = <div><div>{CDCmessage}</div><br /><br />Self Quarantine for 14 days from the last day of contact with the confirmed case<div><br />{warning}</div></div>
    }


    if ((statements[2].answer === "yes" && statements[2].conditionalAnswer > 100 && statements[3].answer === "yes") ||
        (statements[2].answer === "yes" && statements[2].conditionalAnswer > 100 && statements[4].answer === "yes") ||
        (statements[1].answer === "yes" && statements[3].answer === "yes" && statements[4].answer === "yes")) {
        result = <div>
            <img width="30%" src={corona} alt="corona" style={{ display: "block", margin: "32px auto" }} /> Based on the assessment, you are at risk for COVID-19
        <ResultButton link="https://www.mohfw.gov.in/pdf/FAQ.pdf" title="FAQ" leftIcon={helpCircle} rightIcon={rightCaret} />
            <ResultButton link="tel:108" title="Transporation to isolation ward" subtitle="Disaster management service: 108" leftIcon={ambulance} rightIcon={call} />
            <ResultButton link="https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf" title="For any assistance" subtitle="contact the govt. helpline: 1075" leftIcon={headphone} rightIcon={rightCaret} />
            <br />
        </div>
    }


    return (<div className="result">
        {result}
        <br />
        <div className="result-extra">*This is not a medical advice</div>
    </div>)
}

export default class Container extends React.Component {
    locationInput = <div className="pane-conditional"><label htmlFor="location-input" >Which country / Indian state did you travel?</label><br /><input id="location-input" onChange={(e) => this.handleChange(e.target.value)} />  </div>
    temperatureInput = <div className="pane-conditional"><label htmlFor="location-input" >Body temperature (°F)</label><br /><input id="temperature-input" onChange={(e) => this.handleChange(e.target.value)} />  </div>

    questions = getQuestions(this.locationInput, this.temperatureInput);

    handleChange(val) {
        this.setState(oldState => {
            var statements = oldState.statements
            statements[this.state.questionNumber].conditionalAnswer = val
            return { statements: statements }
        })
    }

    constructor() {
        super()
        this.state = {
            questionNumber: -1,
            language: "english",
            statements: this.questions["english"],
        }


        this.goToNextQuestion = this.goToNextQuestion.bind(this)
        this.goToPreviousQuestion = this.goToPreviousQuestion.bind(this)
        this.setAnswerToYes = this.setAnswerToYes.bind(this)
        this.setAnswerToNo = this.setAnswerToNo.bind(this)

    }

    goToNextQuestion() {
        if (this.state.questionNumber < this.state.statements.length) {
            this.setState(oldState => {
                return { questionNumber: oldState.questionNumber + 1 }
            })
        }
    }

    goToPreviousQuestion() {
        if (this.state.questionNumber >= 0) {
            this.setState(oldState => {
                return { questionNumber: oldState.questionNumber - 1 }
            })
        }
    }

    setAnswerToYes(pos) {
        this.setState(oldState => {
            var statements = oldState.statements
            statements[pos].answer = "yes"
            return { statements: statements }
        })
    }

    setAnswerToNo(pos) {
        this.setState(oldState => {
            var statements = oldState.statements
            statements[pos].answer = "no"
            return { statements: statements }
        })
    }


    render() {
        const total = this.state.statements.length
        const { questionNumber, language } = this.state
        if (questionNumber < 0) {
            return <PaneContainer
                questionNumber={questionNumber}
                total={total}
                body={<div class="statement-container">This web app is a COVID-19 Self Assessment Tool.
                <br /><br /><small><b><font color="gray">*This is not a medical advice.</font></b></small>
                    <br />
                    <br />
                    <div class="control-btn-container">
                        <div class="next-btn next-btn-enabled" onClick={this.goToNextQuestion}>
                            Next
                        </div>
                    </div>
                </div>}
            />
        }
        else if (questionNumber < total) {
            const statement = this.state.statements[questionNumber]

            const { answer, question, conditional } = statement

            const yesButtonTitle = yesButton[language]
            const noButtonTitle = noButton[language]
            const previousButtonTitle = previousButton[language]
            const nextButtonTitle = nextButton[language]
            return (
                <PaneContainer
                    questionNumber={questionNumber}
                    total={total}
                    body={<Pane
                        questionNumber={questionNumber}
                        total={total}
                        question={question}
                        answer={answer}
                        conditional={conditional}
                        yesButtonTitle={yesButtonTitle}
                        noButtonTitle={noButtonTitle}
                        statement={statement}
                        previousButtonTitle={previousButtonTitle}
                        nextButtonTitle={nextButtonTitle}
                        goToPreviousQuestion={this.goToPreviousQuestion}
                        goToNextQuestion={this.goToNextQuestion}
                        setAnswerToYes={this.setAnswerToYes}
                        setAnswerToNo={this.setAnswerToNo}
                    />}
                />


            )
        } else {
            return <PaneContainer
                questionNumber={questionNumber}
                total={total}
                body={<Result statements={this.state.statements} />}
            />
        }
    }
}

function PaneContainer({ questionNumber, total, body }) {
    return <div className="container">
        <div className="container-header">COVID-19 Self Assessment</div>
        <Progress questionNumber={questionNumber} total={total} />
        {body}
    </div>
}

function Pane({ questionNumber, total, answer, question, conditional, yesButtonTitle, noButtonTitle, setAnswerToYes, setAnswerToNo, statement, goToPreviousQuestion, goToNextQuestion, previousButtonTitle, nextButtonTitle }) {
    return <div className="pane">
        <div className="statement-container">
            <QuestionContainer
                questionNumber={questionNumber + 1}
                total={total}
                question={question} />
            <AnswerContainer answer={answer}
                conditional={conditional}
                setAnswerToYes={() => setAnswerToYes(questionNumber)}
                setAnswerToNo={() => setAnswerToNo(questionNumber)}
                yesButtonTitle={yesButtonTitle}
                noButtonTitle={noButtonTitle} />
        </div>
        <ButtonsContainer isNextEnabled={isNextEnabled(statement)} goToPreviousQuestion={goToPreviousQuestion} goToNextQuestion={goToNextQuestion} isLastQuestion={isLastQuestion(questionNumber, total)} previous={previousButtonTitle} next={nextButtonTitle} />
    </div>
}

function isLastQuestion(number, total) {
    return number === total - 1 ? true : false
}

function isNextEnabled(statement) {
    return (statement.answer === undefined || (statement.conditional !== undefined && statement.answer === "yes" && statement.conditionalAnswer === undefined)) ? true : false
}