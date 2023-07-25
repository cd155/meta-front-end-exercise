import {
  Heading,
  Promo,
  Logo,
  Button,
  ModeToggle,
  Counter,
  MealsList
} from './components/Components';
import MealsProvider from './providers/MealsProvider';
import './App.css';

function App(props) {
  return (
    <div>
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
      <ModeToggle />
      <Button />
      <Promo />
      <h1>{props.title}</h1>
      <Heading name="Pie" />
      <Logo url="https://simgbb.com/images/logo.png" />
    </div>
  );
};

export default App;
