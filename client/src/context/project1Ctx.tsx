import { createContext, useEffect, useState } from 'react';
import Project1 from '../interfaces/project1';

const project1Ctx = createContext<Project1>({
  userChoice: '',
  setUserChoice: () => {},
  computer: '',
  setComputer: () => {},
  isClick: false,
  setIsClick: () => {},
});

export default project1Ctx;

export function Project1CtxProvider({ children }: any): JSX.Element {
  const [userChoice, setUserChoice] = useState('');
  const [computer, setComputer] = useState('');
  const [isClick, setIsClick] = useState<boolean>(false);

  useEffect(() => {
    isClick &&
      setTimeout(() => {
        setIsClick(false);
      }, 5000);
  }, [isClick]);

  return (
    <project1Ctx.Provider
      value={{
        userChoice,
        setUserChoice,
        computer,
        setComputer,
        isClick,
        setIsClick,
      }}
    >
      {children}
    </project1Ctx.Provider>
  );
}
