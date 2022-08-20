import { useNavigate } from "react-router-dom";
import { quizOne, quizTwo } from "../../data";
import './QuizCard.css';
import { useQuiz } from "../../context/quiz-context";

export const QuizCard = () => {
    const navigate = useNavigate();
    const { setCurrentQuizId } = useQuiz();

    const playQuizHandler = (id: string) => {
        navigate('/rules');
        setCurrentQuizId(id);
    }

    return (
        <div className="cards">
            {[quizOne, quizTwo].map(quiz => {
                return <div key={quiz.id} className='card'>
                    <img src={quiz.quizImage} alt='' className="card__image" />
                    <p className="card__title">{quiz.quizName}</p>
                    <button className="card__btn" onClick={() => playQuizHandler(quiz.id)}>play now</button>
                </div>
            })}
        </div>
    )
}
