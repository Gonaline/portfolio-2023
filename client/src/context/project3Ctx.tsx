import { createContext, useEffect, useState } from 'react';
import IProject3 from '../interfaces/project3/project3';
import IProductsByCollection from '../interfaces/project3/productsByCollection';
import { Project3Service } from '../services/project3';
import { COLLECTION } from '../enums/project3/collection.enum';
import ICollection from '../interfaces/project3/collection';

const project3Ctx = createContext<IProject3>({
  allCollections: [],
  setAllCollections: () => {},
  getProductsByCollection: () => {},
  productsByCollection: [],
  setProductsByCollection: () => {},
  collectionConvertName: COLLECTION.ALL_COLLECTIONS_CONVERT_NAME,
  setCollectionConvertName: () => {},
  collectionName: COLLECTION.ALL_COLLECTIONS,
  setCollectionName: () => {},
  isOpen: false,
  setIsOpen: () => {},
});

export default project3Ctx;

export function Project3CtxProvider({ children }: any): JSX.Element {
  const [allCollections, setAllCollections] = useState<ICollection[]>([]);
  const [collectionConvertName, setCollectionConvertName] = useState<string>(
    COLLECTION.ALL_COLLECTIONS_CONVERT_NAME
  );
  const [collectionName, setCollectionName] = useState<string>(
    COLLECTION.ALL_COLLECTIONS
  );
  const [productsByCollection, setProductsByCollection] = useState<
    IProductsByCollection[]
  >([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const getCollectionName: any = async () => {
    const object = allCollections.filter(
      (e) => e.convert_category_name === collectionConvertName
    );
    setCollectionName(object[0].category_name);
  };

  const getProductsByCollection: any = async () => {
    const { data } = await Project3Service.getProductsByCategory(
      collectionConvertName
    );
    setProductsByCollection(data);
  };

  useEffect(() => {
    getProductsByCollection();
    setIsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionConvertName]);

  useEffect(() => {
    setIsOpen(false);
    getCollectionName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsByCollection]);

  return (
    <project3Ctx.Provider
      value={{
        allCollections,
        setAllCollections,
        getProductsByCollection,
        productsByCollection,
        setProductsByCollection,
        collectionConvertName,
        setCollectionConvertName,
        collectionName,
        setCollectionName,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </project3Ctx.Provider>
  );
}
