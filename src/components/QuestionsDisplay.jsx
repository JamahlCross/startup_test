import React from 'react';
import Question from './Question';

const QuestionsDisplay = ({ currentQuestions, startIndex, answers, handleAnswerChange }) => (
  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    {currentQuestions.map((question, index) => (
      <Question
        key={index}
        question={question.text}
        index={index}
        handleAnswerChange={handleAnswerChange}
        selectedAnswer={answers[startIndex + index]}
      />
    ))}
  </ul>
);

export default QuestionsDisplay;
