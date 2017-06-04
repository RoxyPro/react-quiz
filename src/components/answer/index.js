import React from 'react';
import './index.css';

class Answer extends React.Component {
    render() {
        let answer = this.props;
        return (
            <div className="question">
                {answer.content}
            </div>
        );
    }
}

export default Answer;
