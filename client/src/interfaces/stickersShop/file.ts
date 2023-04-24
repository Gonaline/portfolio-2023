import { FILE } from '../../enums/stickersShop/file.enum';
import { FOLDER } from '../../enums/stickersShop/folder.enum';

export default interface IFile {
  name: string;
  type: FILE.FIRST_IMAGE | FILE.PRODUCT_IMAGE | FILE.TECHNICAL_FILE;
  folder: FOLDER.FIRST_IMAGE | FOLDER.PRODUCT_IMAGE | FOLDER.TECHNICAL_FILE;
}
