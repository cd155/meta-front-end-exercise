import {Heading, Promo} from './components/Components';

import './App.css';

function App(props) {
  return (
    <div>
      <Promo />
      <h1>{props.title}</h1>
      <Heading name="Pie" />
    </div>
  );
};

export default App;
