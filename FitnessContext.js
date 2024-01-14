import React, { createContext, useState, useContext } from 'react';

const FitnessContext = createContext();

const FitnessProvider = ({ children }) => {
  const [completed, setCompleted] = useState([]);
  const [calories, setCalories] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [workout, setWorkout] = useState(0);

  const values = {
    completed,
    setCompleted,
    calories,
    setCalories,
    minutes,
    setMinutes,
    workout,
    setWorkout,
  };

  return <FitnessContext.Provider value={values}>{children}</FitnessContext.Provider>;
};

const useFitnessContext = () => {
  const context = useContext(FitnessContext);
  if (!context) {
    throw new Error('useFitnessContext must be used within a FitnessProvider');
  }
  return context;
};

export { FitnessProvider, useFitnessContext };
