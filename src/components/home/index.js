import React from 'react';
import Quiz from './../quiz';
import Question from './../question';
import Answer from './../answer';
import './index.css';

const answers = [
  <Answer id="a" key="a" content="Answer 1" />,
  <Answer id="b" key="b" content="Answer 2" />,
  <Answer id="c" key="c" content="Answer 3" />
];

const questions = [
  <Question id="1" key="1" content="What is callback?" answers={answers} />,
  <Question id="2" key="2" content="What is closure?" answers={answers} />
];

const quiz = <Quiz
    title="Advanced JS"
    questions={questions}
    numOfQuestions={questions.length}
    category="Javascript"
    description="Advanced questions from javascript" />

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>Choose one quiz from list bellow</h2>
        {quiz}
      </div>
    );
  }
}
export default Home;
