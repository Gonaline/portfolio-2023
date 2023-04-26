export default interface IRockPaperScissors {
  userChoice: string;
  setUserChoice: (c: string) => void;
  computer: string;
  setComputer: (c: string) => void;
  isClick: boolean;
  setIsClick: (c: boolean) => void;
}
