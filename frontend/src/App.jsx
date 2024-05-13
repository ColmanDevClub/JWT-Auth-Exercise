import GamesList from './GamesList';
import Login from './Login';
import Signup from './Signup';

const App = () => {
  return (
    <div className="grid">
      <GamesList />
      <Login />
      <Signup />
    </div>
  );
};

export default App;
