import React from 'react';
import './index.css';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeQuestion: 0
        };
    }

    openNextQuestion() {
        this.setState((prevState, props) => {
            return {
                activeQuestion: (prevState.activeQuestion + 1) === props.questions.length ?
                    prevState.activeQuestion :
                    prevState.activeQuestion + 1
            }
        });
    }

    openPrevQuestion() {
        this.setState((prevState, props) => {
            return {
                activeQuestion: (prevState.activeQuestion - 1) < 0 ? 0 : prevState.activeQuestion - 1
            }
        });
    }
    render() {
        const quiz = this.props;
        console.log(quiz);
        return (
            <div>
                <div className="item">
                    <div className="header">{quiz.title}</div>
                    <div className="footer">
                        <div className="pull-left">{quiz.category}</div>
                        <div className="pull-right">{quiz.numOfQuestions}</div>
                    </div>

                    <div className="questions">
                        {quiz.questions[this.state.activeQuestion]}
                    </div>

                    <div className="answers">
                        {quiz.questions[this.state.activeQuestion].props.answers}
                    </div>

                    <div className="quiz-actions">
                        <div className="prev-question">
                            <button onClick={this.openPrevQuestion.bind(this)}>Prev question</button>
                        </div>

                        <div className="next-question">
                            <button onClick={this.openNextQuestion.bind(this)}>Next question</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Quiz;
