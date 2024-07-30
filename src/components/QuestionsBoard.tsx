import React, { memo, useState } from "react";
import QuestionContainer from "./QuestionContainer";
import ResultContainer from "./ResultContainer";

type Result = {
  questionText: string;
  isCorrect: boolean;
  answerText: string;
};

type Option = {
  answerText: string;
  isCorrect: boolean;
};

type Question = {
  questionText: string;
  options: Option[];
};

type JobBoardProps = {
  quizQuestions: Question[];
};

const JobBoard: React.FC<JobBoardProps> = ({ quizQuestions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Result[]>([]);
  const totalQuestions = quizQuestions.length;

  const handleNextQuestion = () => {
    if (!answers[currentIndex]) {
      alert("Don't skip the question");
      return;
    }
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleAnswer = (currentAnswer: Result) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentIndex] = currentAnswer;
      return updatedAnswers;
    });
  };

  const handleResetQuiz = () => {
    setCurrentIndex(0);
    setAnswers([]);
  };

  return (
    <div className="quiz-container">
      <QuestionContainer
        handleAnswer={handleAnswer}
        {...quizQuestions[currentIndex]}
      />

      <h6>
        {currentIndex + 1} of {totalQuestions}
      </h6>

      <button onClick={handleNextQuestion} className="btn">
        Next
      </button>

      {answers.length === totalQuestions && (
        <ResultContainer
          handleResetQuiz={handleResetQuiz}
          result={answers}
          totalQuestions={totalQuestions}
        />
      )}
    </div>
  );
};

export default memo(JobBoard);
