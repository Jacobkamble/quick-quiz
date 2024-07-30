import React, { memo } from "react";

interface ResultProps {
  questionText: string;
  isCorrect: boolean;
  answerText: string;
}

const Result: React.FC<ResultProps> = ({
  answerText,
  questionText,
  isCorrect,
}) => {
  return (
    <ul>
      <li className="result-item">
        <div className={`result-content ${isCorrect ? "correct" : "incorrect"}`}>
          {questionText} : {answerText} {isCorrect ? "✔️" : "❌"}
        </div>
      </li>
    </ul>
  );
};

export default memo(Result);
