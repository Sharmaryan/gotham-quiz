import { useNavigate } from "react-router-dom";
import { quizOne, quizTwo } from "../../data";
import './QuizCard.css';
import { useQuiz } from "../../context/quiz-context";
import { useTheme } from "../../context";

export const QuizCard = () => {
    const navigate = useNavigate();
    const { setCurrentQuizId, setQuestionAnswer } = useQuiz();
    const {theme} = useTheme();

    const playQuizHandler = (id: string) => {
        navigate('/rules');
        setCurrentQuizId(id);
        setQuestionAnswer([]);
    }

    return (
        <div className={`cards ${theme}`}>
            {[quizOne, quizTwo].map(quiz => {
                return <div key={quiz.id} className={`card ${theme}`}>
                    <img src={quiz.quizImage} alt='' className="card__image" />
                    <p className="card__title">{quiz.quizName}</p>
                    <button className={`${theme} card__btn`} onClick={() => playQuizHandler(quiz.id)}>play now</button>
                </div>
            })}
        </div>
    )
}
