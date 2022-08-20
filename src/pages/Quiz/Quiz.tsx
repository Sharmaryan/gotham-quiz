import { useNavigate, useParams } from 'react-router-dom';
import './Quiz.css';
import { quizOne, quizTwo } from '../../data';
import { useEffect, useState } from 'react';
import { useQuiz } from '../../context/quiz-context';
export const Quiz = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { setQuiz } = useQuiz();

  const [nextQuestion, setNextQuestion] = useState(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isAnswerFalse, setIsAnswerFalse] = useState(false);
  const [wrongAnswerId, setWrongAnswerId] = useState<any>('');
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);
  const [disableOptions, setDisableOptions] = useState<boolean>(false);

  const quiz = [quizOne, quizTwo].filter(item => item.id === quizId)?.[0];
  const rightAnswerId = quiz?.questions?.[nextQuestion].options.filter(item => item.isRight === true)?.[0].id;

  useEffect(() => {
    setQuiz(quiz.questions)
  }, [setQuiz, quiz]);

  const handleNext = (quiz: any) => {
    if (nextQuestion + 1 === quiz.questions.length) {
      navigate('/results');
    }
    else {
      setNextQuestion(prev => prev + 1);
      setIsAnswerCorrect(false);
    }
    setIsOptionSelected(false);
    setDisableOptions(false);
  }

  const quitHandler = () => {
    navigate('/', { replace: true })
  }

  const buttonHandler = (id: any) => {
    if (id === rightAnswerId) {
      setIsAnswerCorrect(true)
    }
    else {
      setWrongAnswerId(id);
      setIsAnswerFalse(true);
      setIsAnswerCorrect(true);
    }
    setIsOptionSelected(true);
    setDisableOptions(true);
  }

  return (
    <div className='quiz'>
      <h2 className='quiz__heading'>quiz name : {quiz.quizName}</h2>
      <h3 className='quiz__questions'>{quiz.questions[nextQuestion].question}</h3>

      <div className="quiz__buttons">
        {quiz.questions[nextQuestion].options.map(item => {
          return <button key={item.id} className={`quiz__button ${isAnswerCorrect && (item.id === rightAnswerId && 'green-background')} ${isAnswerFalse && (item.id === wrongAnswerId && 'red-background')} `} disabled={disableOptions} onClick={() => buttonHandler(item.id)}>{item.text}</button>
        })}
      </div>

      <div className="quiz__actions">
        <button className="quiz__quit " onClick={quitHandler}>quit</button>
        {!isOptionSelected ? <button className="quiz__disable">Next</button> : <button className="quiz__next" onClick={() => handleNext(quiz)}>Next</button>}
      </div>

    </div>
  )
}
