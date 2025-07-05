import './App.css';
import { GCard } from './components/partials/GCard';
// import { HomePage } from './components/pages/HomePage';
// import { TodoPage } from './components/pages/TodoPage';
import { Vote } from './components/partials/Vote';
import { NavBar } from './components/partials/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <GCard />
      <Vote />
      {/* <HomePage /> */}
      {/* <TodoPage /> */}
    </>
  );
}

export default App;