import React from 'react';

function Question({ question, index, handleAnswerChange, selectedAnswer }) {
  return (
    <li className="mb-4">
      <p className="text-lg font-medium text-gray-700 mb-2">{question}</p>
      <div className="space-y-2">
        <label className="block">
          <input
            type="radio"
            name={`question-${index}`}
            value="1"
            checked={selectedAnswer === 1}
            onChange={() => handleAnswerChange(index, 1)}
            className="mr-2 text-blue-500 focus:ring-blue-300"
          />
          <span className="text-gray-600">まったく当てはまらない</span>
        </label>
        <label className="block">
          <input
            type="radio"
            name={`question-${index}`}
            value="2"
            checked={selectedAnswer === 2}
            onChange={() => handleAnswerChange(index, 2)}
            className="mr-2 text-blue-500 focus:ring-blue-300"
          />
          <span className="text-gray-600">あまり当てはまらない</span>
        </label>
        <label className="block">
          <input
            type="radio"
            name={`question-${index}`}
            value="3"
            checked={selectedAnswer === 3}
            onChange={() => handleAnswerChange(index, 3)}
            className="mr-2 text-blue-500 focus:ring-blue-300"
          />
          <span className="text-gray-600">どちらとも言えない</span>
        </label>
        <label className="block">
          <input
            type="radio"
            name={`question-${index}`}
            value="4"
            checked={selectedAnswer === 4}
            onChange={() => handleAnswerChange(index, 4)}
            className="mr-2 text-blue-500 focus:ring-blue-300"
          />
          <span className="text-gray-600">やや当てはまる</span>
        </label>
        <label className="block">
          <input
            type="radio"
            name={`question-${index}`}
            value="5"
            checked={selectedAnswer === 5}
            onChange={() => handleAnswerChange(index, 5)}
            className="mr-2 text-blue-500 focus:ring-blue-300"
          />
          <span className="text-gray-600">とても当てはまる</span>
        </label>
      </div>
    </li>
  );
}

export default Question;
