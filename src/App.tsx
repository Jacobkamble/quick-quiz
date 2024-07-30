import "./App.css";
import QuestionsBoard from "./components/QuestionsBoard";
import { quizQuestions } from "./utils/constant";

function App() {
  return (
    <>
      <QuestionsBoard quizQuestions={quizQuestions} />
    </>
  );
}

export default App;
