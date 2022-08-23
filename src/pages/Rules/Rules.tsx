import { Link } from 'react-router-dom';
import { useTheme, useQuiz } from '../../context';
import { useTitle } from '../../hooks/useTitle';
import './Rules.css';

export const Rules = () => {
  const { currentQuizId } = useQuiz();
  const { theme } = useTheme();
  useTitle('Rules | Gotham Quiz');
  return (
    <div className={`rules ${theme}`}>
      <h1 className="rules__heading">Rules</h1>
      <ol className="rules__descriptons">
        <li className="rules__description">Do not cheat.</li>
        <li className="rules__description">Don't forget rules number one.</li>
      </ol>
      <Link to={`/quiz/${currentQuizId}`} className={`rules__btn ${theme}`}>Start</Link>
    </div>
  )
}
