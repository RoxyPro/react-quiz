import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './components/home';
import Quiz from './components/quiz';
import Question from './components/question';
import Answer from './components/answer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// Root component
const app = document.getElementById('app');

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

ReactDOM.render(quiz, app);

registerServiceWorker();
