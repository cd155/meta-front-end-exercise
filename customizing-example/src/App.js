import Heading from './components/Heading';
import './App.css';

function App(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <Heading name="Pie" />
    </div>
  );
};

export default App;
