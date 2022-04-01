import './App.css';
import { CounterProvider } from './context/CounterContext';
import { ThemeProvider } from './context/ThemeContext';
import Dashboard from './Dashboard';
import Incrementor from './Incrementor';

function App() {
  return (
    <ThemeProvider>
      <CounterProvider>
        <div className="App">
          <Dashboard />
          <Incrementor />
        </div>
      </CounterProvider>
    </ThemeProvider>
  );
}

export default App;
