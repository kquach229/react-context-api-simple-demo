import React, { useContext } from 'react';
import { CounterContext } from './context/CounterContext';
import { ThemeContext } from './context/ThemeContext';

const Incrementor = () => {
  const { count, incrementCount } = useContext(CounterContext);
  const { theme, themes } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme === 'dark' ? themes.darkTheme.backgroundColor : themes.lightTheme.backgroundColor , color: theme === 'dark' ? themes.darkTheme.color : themes.lightTheme.color }}>
      <div>This is my Counter Component</div>
      count: {count}
      <button onClick={incrementCount}>Increment</button>
    </div>

  )
}

export default Incrementor;