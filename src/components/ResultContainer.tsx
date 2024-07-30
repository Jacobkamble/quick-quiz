import React, { memo } from "react";
import Result from "./Result";

interface Result {
  questionText: string;
  isCorrect: boolean;
  answerText: string;
}

interface ResultContainerProps {
  result: Result[];
  handleResetQuiz: () => void;
  totalQuestions: number;
}

const ResultContainer: React.FC<ResultContainerProps> = ({
  result,
  handleResetQuiz,
  totalQuestions,
}) => {
  return (
    <div className="container">
      <h2>Result</h2>
      {result.map((ans) => (
        <Result key={ans.questionText} {...ans} />
      ))}
      <h2>
        You answered {result.filter((ele) => ele.isCorrect).length} out of {totalQuestions}
      </h2>
      <button className="btn" onClick={handleResetQuiz}>
        Reset Quiz
      </button>
    </div>
  );
};

export default memo(ResultContainer);
