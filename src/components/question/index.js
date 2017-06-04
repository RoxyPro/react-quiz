import React from 'react';
import './index.css';

class Question extends React.Component {
    render() {
        let question = this.props;
        return (
            <div className="question">
                {question.content}
            </div>
        );
    }
}

export default Question;
