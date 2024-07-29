import React from "react";

interface Options {
  answerText: string;
  isCorrect: boolean;
}

interface QuestionContainerProps {
  questionText: string;
  options: Options[];
  handleAnswer:(para:any)=>void
}

const QuestionContainer: React.FC<QuestionContainerProps> = ({
  questionText,
  options,
  handleAnswer
}) => {
  return (
    <>
      <div
       className="container"
      >
        <h2 style={{ color: "tomato" }}>{questionText}</h2>
        <div
         className="options"
        >
          {options.map(({ answerText,isCorrect }) => {
            return (
              <button
              className="btn"
                key={answerText}
                onClick={()=>handleAnswer(isCorrect)}
              >
                {answerText}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default QuestionContainer;
