import React, { useState } from 'react';
import { jsPDF } from 'jspdf';  // Import jsPDF for PDF generation
import Question from './components/Question'; 
import Result from './components/Result'; 
import QuestionsList from './components/QuestionsList'; 
import QuestionsNavigation from './components/QuestionsNavigation';
import QuestionsDisplay from './components/QuestionsDisplay';
import './components/index.css';

function App() {
  const [answers, setAnswers] = useState(Array(QuestionsList.length).fill(null));
  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 4;

  const startIndex = currentPage * questionsPerPage;
  const currentQuestions = QuestionsList.slice(startIndex, startIndex + questionsPerPage);

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[startIndex + index] = value;
    setAnswers(newAnswers);
  };

  const generateRandomAnswers = () => {
    const randomAnswers = QuestionsList.map(() => Math.floor(Math.random() * 5) + 1);
    setAnswers(randomAnswers);
  };

  const resetQuiz = () => {
    setAnswers(Array(QuestionsList.length).fill(null));
    setCurrentPage(0);
  };

  const allQuestionsAnswered = answers.every(answer => answer !== null);
  const isLastPage = currentPage >= Math.ceil(QuestionsList.length / questionsPerPage) - 1;

  // Generate PDF of the result
  const downloadPDF = () => {
    const doc = new jsPDF();
    let yOffset = 10; // Y-axis offset to arrange text properly

    doc.setFontSize(20);
    doc.text('性格診断サイトの結果', 10, yOffset);
    yOffset += 10;

    doc.setFontSize(12);

    // Add all answers to the PDF
    QuestionsList.forEach((question, index) => {
      const answer = answers[index] !== null ? `回答: ${answers[index]}` : "未回答";
      doc.text(`${question.text}: ${answer}`, 10, yOffset);
      yOffset += 10;
    });

    doc.save('診断結果.pdf'); // Save the PDF with the filename
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">スタートアップ適性検査</h1>
      <p className="text-lg text-gray-600 mb-6">
        以下の質問に答えて、5段階で評価してください。
      </p>

      {!allQuestionsAnswered && (
        <>
          <button
            onClick={generateRandomAnswers}
            className="mb-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            ランダムに回答する
          </button>

          <QuestionsDisplay
            currentQuestions={currentQuestions}
            startIndex={startIndex}
            answers={answers}
            handleAnswerChange={handleAnswerChange}
          />

          <QuestionsNavigation
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            isLastPage={isLastPage}
            questionsPerPage={questionsPerPage}
            answers={answers}
          />
        </>
      )}

      {allQuestionsAnswered && (
        <div className="w-full md:w-2/3 lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <Result answers={answers} />

          <button
            onClick={resetQuiz}
            className="mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            もう一度やり直す
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
