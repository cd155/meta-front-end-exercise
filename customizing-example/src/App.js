import {
  Video,
  Nav,
  Heading,
  Promo,
  Logo,
  Button,
  ModeToggle,
  Counter,
  MealsList,
  Footer
} from './components/Components';
import MealsProvider from './providers/MealsProvider';
import './App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={
          <MealsProvider>
            <MealsList />
            <Counter />
          </MealsProvider>} />
        <Route path="/modeToggle" element={<ModeToggle />} />
        <Route path="/button" element={<Button />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/logo" element={
          <Logo url="https://simgbb.com/images/logo.png" />} />
        <Route path="/video" element={
          <Video url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
