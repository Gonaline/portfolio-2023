export interface IDetail {
  name?: string;
  price?: number;
  img_code?: string;
}

export default interface IOption {
  name?: string;
  detail?: IDetail[];
}
