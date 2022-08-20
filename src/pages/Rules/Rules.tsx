import { Link } from 'react-router-dom';
import { useQuiz } from '../../context/quiz-context';
import './Rules.css';
export const Rules = () => {
  const { currentQuizId } = useQuiz();

  return (
    <div className='rules'>
      <h1 className="rules__heading">Rules</h1>
      <ol className="rules__descriptons">
        <li className="rules__description">Do not cheat.</li>
        <li className="rules__description">Don't forget rules number one.</li>
      </ol>
      <Link to={`/quiz/${currentQuizId}`} className="rules__btn">Start</Link>
    </div>
  )
}
