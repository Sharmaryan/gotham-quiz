import './Home.css';
import { QuizCard } from '../../components';
import { useTheme } from '../../context';
export const Home = () => {
const {theme} =  useTheme();
  return (
    <div className={`home ${theme}`}>
      <QuizCard />
    </div>
  )
}
