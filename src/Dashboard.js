import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';


const Dashboard = () => {
  const { theme, themes, toggleTheme } = useContext(ThemeContext);
  console.log(theme === 'dark');
  return (
    <div style={{ color: theme === 'dark' ? themes.darkTheme.color : themes.lightTheme.color,backgroundColor: theme === 'dark' ? themes.darkTheme.backgroundColor : themes.lightTheme.backgroundColor }}>
      <h1>This is my dashboard component</h1>
      <h5>Current theme: {theme}</h5>
      <button onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}>Toggle this</button>
    </div>
  )
}

export default Dashboard;