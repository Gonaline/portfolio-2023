import { createContext, useEffect, useState } from 'react';
import IProject3 from '../interfaces/project3/project3';
import IProductsByCollection from '../interfaces/project3/productsByCollection';
import { Project3Service } from '../services/project3';
import { COLLECTION } from '../enums/project3/collection.enum';

const project3Ctx = createContext<IProject3>({
  getProductsByCollection: () => {},
  productsByCollection: [],
  setProductsByCollection: () => {},
  collectionConvertName: COLLECTION.ALL_COLLECTIONS_CONVERT_NAME,
  setCollectionConvertName: () => {},
  isOpen: false,
  setIsOpen: () => {},
});

export default project3Ctx;

export function Project3CtxProvider({ children }: any): JSX.Element {
  const [collectionConvertName, setCollectionConvertName] = useState<string>(
    COLLECTION.ALL_COLLECTIONS_CONVERT_NAME
  );
  const [productsByCollection, setProductsByCollection] = useState<
    IProductsByCollection[]
  >([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // const getProductsByCollection: any = async () => {
  //   const { data } = await Project3Service.getProductsByCategory(
  //     collectionConvertName
  //   );
  //   setProductsByCollection(data);
  // };

  const getProductsByCollection: any = async () => {
    const { data } = await Project3Service.getProductsByCategory(
      collectionConvertName
    );
    setProductsByCollection(data);
  };

  // console.log(JSON.stringify(productsByCollection));
  useEffect(() => {
    getProductsByCollection();
    setIsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionConvertName]);

  useEffect(() => {
    setIsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsByCollection]);

  return (
    <project3Ctx.Provider
      value={{
        getProductsByCollection,
        productsByCollection,
        setProductsByCollection,
        collectionConvertName,
        setCollectionConvertName,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </project3Ctx.Provider>
  );
}
