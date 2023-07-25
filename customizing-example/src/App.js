import {
  Heading, 
  Promo,
  Logo, 
  Button,
  ModeToggle
} from './components/Components';

import './App.css';

function App(props) {
  return (
    <div>
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
