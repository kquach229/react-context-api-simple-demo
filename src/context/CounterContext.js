import React, { useState, createContext } from 'react';

export const CounterContext = createContext(0);

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  }
  return (
    <CounterContext.Provider value = {{ count, incrementCount }}>
      {children}
    </CounterContext.Provider>
  )
}