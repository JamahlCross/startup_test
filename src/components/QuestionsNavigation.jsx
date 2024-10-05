import React from 'react';

const QuestionsNavigation = ({ currentPage, setCurrentPage, isLastPage }) => {
  const goToNextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const goToPreviousPage = () => setCurrentPage((prevPage) => prevPage - 1);

  return (
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
  );
};

export default QuestionsNavigation;
