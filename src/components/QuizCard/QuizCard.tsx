import { useNavigate } from "react-router-dom";
import { quizOne, quizTwo } from "../../data";
import './QuizCard.css';

export const QuizCard = () => {
    const navigate = useNavigate();

    const playQuizHandler = () => {
        navigate('/rules');
    }

    return (
        <div className="cards">
            {[quizOne, quizTwo].map(quiz => {
                return <div key={quiz.id} className='card'>
                    <img src={quiz.quizImage} alt='' className="card__image" />
                    <p className="card__title">{quiz.quizName}</p>
                    <button className="card__btn" onClick={playQuizHandler}>play now</button>
                </div>
            })}
        </div>
    )
}
