import { useState, useContext, createContext } from "react";

type quizId = {
    currentQuizId: string,
    setCurrentQuizId: React.Dispatch<React.SetStateAction<string>>,
    score: number,
    setScore: any,
    questionAnswer: [],
    setQuestionAnswer: any
}

const QuizContext = createContext({} as quizId);

type childProps = {
    children: React.ReactNode
}

const QuizProvider = (props: childProps) => {


    const [currentQuizId, setCurrentQuizId] = useState('');
    const [score, setScore] = useState<number>(0);
    const [questionAnswer, setQuestionAnswer] = useState<any>([]);

    return <QuizContext.Provider value={{ currentQuizId, setCurrentQuizId, score, setScore, questionAnswer, setQuestionAnswer }} >{props.children}</QuizContext.Provider>

}

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider }

