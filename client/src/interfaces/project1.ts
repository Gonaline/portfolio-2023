export default interface IProject1 {
  userChoice: string;
  setUserChoice: (c: string) => void;
  computer: string;
  setComputer: (c: string) => void;
  reset: () => void;
}
