import React from 'react';
import './index.css';

class Question extends React.Component {
    render() {
        let question = this.props;
        return (
            <div className="question">
                <div>{question.content}</div>
            </div>
        );
    }
}

export default Question;
