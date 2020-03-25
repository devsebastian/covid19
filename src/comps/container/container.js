import * as React from 'react'
import './container.css'
import corona from '../../assets/virus.png'
import check from '../../assets/check.jpg'
import ambulance from '../../assets/ambulance.svg'
import helpCircle from '../../assets/help-circle.svg'
import headphone from '../../assets/headphone.svg'
import call from '../../assets/call.svg'
import rightCaret from '../../assets/right-caret.svg'
import { medicalAdvice, intro, transportationTitle, assistanceTitle, startButtonTitle, helplineNumbers, warningTextOne, warningTextTwo, questions, yesAnswerTitle, noAnswerTitle, nextButtonTitle, previousButtonTitle, CDCmessage, locationConditionalLabel, bodyTemperatureConditionalLabel, countryWarning, riskWarning, faqTitle } from '../../assets/data'
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

function Result({ answers, language }) {
    var CDCmessageBlock = <font style={{ color: "#4caf50" }}><img width="40%" src={check} alt="checked" style={{ display: "block", margin: "32px auto" }} /><b>{CDCmessage[language]}</b></font>

    var warning = (<div> {warningTextOne[language]}  <b><a target="_blank" rel="noopener noreferrer" href="https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf">{helplineNumbers[language]}</a></b>
        <br /><br />{warningTextTwo[language]}</div>)
    var result = <div>{CDCmessageBlock}<br /><br />{warning}</div>

    var countries = ["china", "america", "usa", "united states of america", "italy", "iran", "south korea", "mainland china"]

    if (answers[0].answer === "yes" && countries.includes(answers[0].conditionalAnswer.toLowerCase())) {
        result = <div>
            {CDCmessageBlock}<br /><br />{countryWarning}{warning}</div>
    }

    if (answers[1].answer === "yes") {
        result = <div><div>{CDCmessageBlock}</div><br /><br />Self Quarantine for 14 days from the last day of contact with the confirmed case<div><br />{warning}</div></div>
    }


    if ((answers[2].answer === "yes" && answers[2].conditionalAnswer > 100 && answers[3].answer === "yes") ||
        (answers[2].answer === "yes" && answers[2].conditionalAnswer > 100 && answers[4].answer === "yes") ||
        (answers[1].answer === "yes" && answers[3].answer === "yes" && answers[4].answer === "yes")) {
        result = <div>
            <img width="30%" src={corona} alt="corona" style={{ display: "block", margin: "32px auto" }} /> {riskWarning[language]}
            <ResultButton link="https://www.mohfw.gov.in/pdf/FAQ.pdf" title={faqTitle[language]} leftIcon={helpCircle} rightIcon={rightCaret} />
            <ResultButton link="tel:108" title={transportationTitle[language]} subtitle="Disaster management service: 108" leftIcon={ambulance} rightIcon={call} />
            <ResultButton link="https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf" title={assistanceTitle[language]} subtitle="contact the govt. helpline: 1075" leftIcon={headphone} rightIcon={rightCaret} />
            <br />
        </div>
    }


    return (<div className="result">
        {result}
        <br />
        <div className="result-extra">{medicalAdvice[language]}</div>
    </div>)
}

export default class Container extends React.Component {
    locationInput = <div className="pane-conditional"><label htmlFor="location-input" >{locationConditionalLabel[this.props.language]}</label><br /><input id="location-input" onChange={(e) => this.handleChange(e.target.value)} />  </div>
    temperatureInput = <div className="pane-conditional"><label htmlFor="location-input" >{bodyTemperatureConditionalLabel[this.props.language]}</label><br /><input id="temperature-input" onChange={(e) => this.handleNumbers(e.target.value)} />  </div>

    handleChange(val) {
        this.setState(oldState => {
            var answers = oldState.answers
            answers[this.state.questionNumber].conditionalAnswer = val
            return { answers: answers }
        })
    }


    handleNumbers(val) {
        this.setState(oldState => {
            var answers = oldState.answers
            if (isNaN(val)) {
                answers[this.state.questionNumber].conditionalAnswer = undefined
            } else {
                answers[this.state.questionNumber].conditionalAnswer = val
            }
            console.log(answers)

            return { answers: answers }
        })

    }

    componentWillReceiveProps(nextProps) {
        this.locationInput = <div className="pane-conditional"><label htmlFor="location-input" >{locationConditionalLabel[nextProps.language]}</label><br /><input id="location-input" onChange={(e) => this.handleChange(e.target.value)} />  </div>
        this.temperatureInput = <div className="pane-conditional"><label htmlFor="location-input" >{bodyTemperatureConditionalLabel[nextProps.language]}</label><br /><input id="temperature-input" onChange={(e) => this.handleNumbers(e.target.value)} />  </div>
        this.setState(oldState => {
            var ans = oldState.answers
            ans[0].conditional = this.locationInput
            ans[2].conditional = this.temperatureInput
            return { answers: ans }
        })
    }

    constructor(props) {
        super(props)
        this.state = {
            questionNumber: -1,
            answers: [
                {
                    answer: undefined,
                    conditional: this.locationInput
                },
                { answer: undefined },
                {
                    answer: undefined,
                    conditional: this.temperatureInput
                },
                { answer: undefined },
                { answer: undefined },
                { answer: undefined },
            ],
        }


        this.goToNextQuestion = this.goToNextQuestion.bind(this)
        this.goToPreviousQuestion = this.goToPreviousQuestion.bind(this)
        this.setAnswerToYes = this.setAnswerToYes.bind(this)
        this.setAnswerToNo = this.setAnswerToNo.bind(this)
    }

    goToNextQuestion() {
        if (this.state.questionNumber < this.state.answers.length) {
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
            var answers = oldState.answers
            answers[pos].answer = "yes"
            return { answers: answers }
        })
    }

    setAnswerToNo(pos) {
        this.setState(oldState => {
            var answers = oldState.answers
            answers[pos].answer = "no"
            return { answers: answers }
        })
    }


    render() {
        const total = this.state.answers.length
        const { questionNumber } = this.state
        const language = this.props.language
        var body = <div></div>
        if (questionNumber < 0) {
            body = <div className="statement-container">{intro[language]}
                <br /><br /><small><b><font color="gray">{medicalAdvice[language]}</font></b></small>
                <br />
                <br />
                <div className="control-btn-container">
                    <div className="next-btn next-btn-enabled" onClick={this.goToNextQuestion}>
                        {startButtonTitle[language]}
                    </div>
                </div>
            </div>
        } else if (questionNumber < total) {
            const statement = this.state.answers[questionNumber]
            const { answer, conditional } = statement
            const question = questions[this.props.language][questionNumber]
            const yesAnswerTitleTitle = yesAnswerTitle[language]
            const noAnswerTitleTitle = noAnswerTitle[language]
            const previousButtonTitleTitle = previousButtonTitle[language]
            const nextButtonTitleTitle = nextButtonTitle[language]
            body = <Pane
                questionNumber={questionNumber}
                total={total}
                question={question}
                answer={answer}
                conditional={conditional}
                yesAnswerTitleTitle={yesAnswerTitleTitle}
                noAnswerTitleTitle={noAnswerTitleTitle}
                statement={statement}
                previousButtonTitleTitle={previousButtonTitleTitle}
                nextButtonTitleTitle={nextButtonTitleTitle}
                goToPreviousQuestion={this.goToPreviousQuestion}
                goToNextQuestion={this.goToNextQuestion}
                setAnswerToYes={this.setAnswerToYes}
                setAnswerToNo={this.setAnswerToNo}
            />
        } else {
            body = <Result answers={this.state.answers} language={this.props.language} />
        }
        return <PaneContainer
            questionNumber={questionNumber}
            total={total}
            body={body}
        />
    }
}

function PaneContainer({ questionNumber, total, body }) {
    return <div className="container">
        <div className="container-header">COVID-19 Self Assessment</div>
        <Progress questionNumber={questionNumber} total={total} />
        {body}
    </div>
}

function Pane({ questionNumber, total, answer, question, conditional, yesAnswerTitleTitle, noAnswerTitleTitle, setAnswerToYes, setAnswerToNo, statement, goToPreviousQuestion, goToNextQuestion, previousButtonTitleTitle, nextButtonTitleTitle }) {
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
                yesAnswerTitle={yesAnswerTitleTitle}
                noAnswerTitle={noAnswerTitleTitle} />
        </div>
        <ButtonsContainer isNextEnabled={isNextEnabled(statement)} goToPreviousQuestion={goToPreviousQuestion} goToNextQuestion={goToNextQuestion} isLastQuestion={isLastQuestion(questionNumber, total)} previous={previousButtonTitleTitle} next={nextButtonTitleTitle} />
    </div>
}

function isLastQuestion(number, total) {
    return number === total - 1 ? true : false
}

function isNextEnabled(statement) {
    return (statement.answer === undefined || (statement.conditional !== undefined && statement.answer === "yes" && statement.conditionalAnswer === undefined)) ? true : false
}