import { quizOne, quizTwo } from "../../data";
import './QuizCard.css';
export const QuizCard = () => {

    return (
        <div className="cards">
            {[quizOne, quizTwo].map(quiz => {
                return <div key={quiz.id} className='card'>
                    <img src={quiz.quizImage} alt='' className="card__image"/>
                    <p className="card__title">{quiz.quizName}</p>
                    <button className="card__btn">play now</button>
                </div>
            })}
        </div>
    )
}
