interface IDetail {
  name: string;
  price: number;
  img_code: string;
  color: string | null;
}

export default interface IOptionData {
  name: string;
  detail: IDetail[];
}
