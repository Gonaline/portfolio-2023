interface IDetail {
  name: string;
  price: number;
  img_code: string;
}

export default interface IOptionData {
  name: string;
  detail: IDetail[];
}
