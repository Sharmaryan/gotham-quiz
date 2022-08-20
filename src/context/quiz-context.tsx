import { useState, useContext, createContext } from "react";

type quizId = {
    currentQuizId: string,
    setCurrentQuizId: React.Dispatch<React.SetStateAction<string>>,
    quiz: any[],
    setQuiz: any,
    score: number,
    setScore: any
}

const QuizContext = createContext({} as quizId);

type childProps = {
    children: React.ReactNode
}

const QuizProvider = (props: childProps) => {


    const [currentQuizId, setCurrentQuizId] = useState('');
    const [quiz, setQuiz] = useState<any[]>([]);
    const [score, setScore] = useState<number>(0);
    return <QuizContext.Provider value={{ currentQuizId, setCurrentQuizId, quiz, setQuiz, score, setScore }} >{props.children}</QuizContext.Provider>

}

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider }

