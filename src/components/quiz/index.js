import React from 'react';
import './index.css';

class Quiz extends React.Component {
    render() {
        var quiz = this.props;
        return (
            <div className="item">
                <div className="header">{quiz.title}</div>
                <div className="body">{quiz.description}</div>
                <div className="footer">{quiz.category}</div>
            </div>
        );
    }
}

export default Quiz;
