import React, { memo } from "react";


interface Options {
  answerText: string;
  isCorrect: boolean;
}

interface QuestionContainerProps {
  questionText: string;
  options: Options[];
  handleAnswer: (para: any) => void;
}

const QuestionContainer: React.FC<QuestionContainerProps> = ({
  questionText,
  options,
  handleAnswer,
}) => {
  return (
    <div className="container">
      <h2>{questionText}</h2>
      <div className="options">
        {options.map(({ answerText, isCorrect }) => (
          <button
            className="btn"
            key={answerText}
            onClick={() =>
              handleAnswer({ questionText, answerText, isCorrect })
            }
          >
            {answerText}
          </button>
        ))}
      </div>
    </div>
  );
};

export default memo(QuestionContainer);
