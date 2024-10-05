import React from 'react';
import Question from './Question'; 

const QuestionSection = ({ currentQuestions, currentPage, questionsPerPage, handleAnswerChange, answers, setCurrentPage }) => {
  const startIndex = currentPage * questionsPerPage;

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const isLastPage = currentPage >= Math.ceil(currentQuestions.length / questionsPerPage) - 1;

  return (
    <>
      <button
        onClick={() => {
          const randomAnswers = currentQuestions.map(() => Math.floor(Math.random() * 5) + 1);
          handleAnswerChange(startIndex, randomAnswers);
        }}
        className="mb-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        ランダムに回答する
      </button>

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

      <div className="flex space-x-8 mb-6">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 0}
          className={`bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-400'}`}
        >
          前へ
        </button>
        <button
          onClick={goToNextPage}
          disabled={isLastPage}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 ${isLastPage ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          次へ
        </button>
      </div>
    </>
  );
};

export default QuestionSection;
