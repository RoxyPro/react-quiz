import React from 'react';
import './index.css';

class Quiz extends React.Component {
    render() {
        const quiz = this.props;
        return (
            <div>
                <div className="item">
                    <div className="header">{quiz.title}</div>
                    <div className="body">{quiz.description}</div>
                    <div className="footer">
                        <div className="pull-left">{quiz.category}</div>
                        <div className="pull-right">{quiz.numOfQuestions}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Quiz;
