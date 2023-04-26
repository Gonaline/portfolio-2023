import { createContext, useEffect, useState } from 'react';
import IRockPaperScissors from '../interfaces/rockPaperScissors/rockPaperScissors';

const rockPaperScissorsCtx = createContext<IRockPaperScissors>({
  userChoice: '',
  setUserChoice: () => {},
  computer: '',
  setComputer: () => {},
  isClick: false,
  setIsClick: () => {},
});

export default rockPaperScissorsCtx;

export function RockPaperScissorsCtxProvider({ children }: any): JSX.Element {
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
    <rockPaperScissorsCtx.Provider
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
    </rockPaperScissorsCtx.Provider>
  );
}
