import { useQuiz } from "../../context/quiz-context"
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import './Result.css';
import { useTheme } from "../../context";
export const Result = () => {
  const { questionAnswer, score } = useQuiz();
  const {theme} = useTheme();
  const navigate = useNavigate();
  return (<div className={`result ${theme}`}>
    <h1 className="result__score">final score: {score}</h1>
    <div > {questionAnswer.map((item: { question: string, selectedAnswer: string }) => {
      return <div key={uuid()} className="result__questions">
        <h2 className="result__question">Question: {item.question}</h2>
        <p className="result__answer">You Answered: {item.selectedAnswer}</p>
      </div>
    })}
    </div>
    <button className="result__exit" onClick={() => navigate('/')}>exit</button>
  </div>)
}
