import './Home.css';
import { QuizCard } from '../../components';
import { useTheme } from '../../context';
import { useTitle } from '../../hooks/useTitle';
export const Home = () => {
const {theme} =  useTheme();
useTitle('Home | Gotham Quiz');
  return (
    <div className={`home ${theme}`}>
      <QuizCard />
    </div>
  )
}
