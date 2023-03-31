import { createContext, useState } from 'react';
import Project1 from '../interfaces/project1';

const project1Ctx = createContext<Project1>({
  userChoice: '',
  setUserChoice: () => {},
  computer: '',
  setComputer: () => {},
  reset: () => {},
});

export default project1Ctx;

export function CtxProvider({ children }: any): JSX.Element {
  const [userChoice, setUserChoice] = useState('');
  const [computer, setComputer] = useState('');

  const reset = () => {
    setUserChoice('');
    setComputer('');
  };

  return (
    <project1Ctx.Provider
      value={{
        userChoice,
        setUserChoice,
        computer,
        setComputer,
        reset,
      }}
    >
      {children}
    </project1Ctx.Provider>
  );
}
