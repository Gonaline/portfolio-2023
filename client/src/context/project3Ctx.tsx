import { createContext, useEffect, useState } from 'react';
import IProject3 from '../interfaces/project3/project3';
import IProductsByCollection from '../interfaces/project3/productsByCollection';
import { Project3Service } from '../services/project3';
import { COLLECTION } from '../enums/project3/collection.enum';

const project3Ctx = createContext<IProject3>({
  getCollectionData: () => {},
  collectionData: [],
  setCollectionData: () => {},
  collectionConvertName: COLLECTION.ALL_COLLECTIONS_CONVERT_NAME,
  setCollectionConvertName: () => {},
});

export default project3Ctx;

export function Project3CtxProvider({ children }: any): JSX.Element {
  const [collectionConvertName, setCollectionConvertName] = useState<string>(
    COLLECTION.ALL_COLLECTIONS_CONVERT_NAME
  );
  const [collectionData, setCollectionData] = useState<IProductsByCollection[]>(
    []
  );

  const getCollectionData: any = async () => {
    const { data } = await Project3Service.getProductsByCategory(
      collectionConvertName
    );
    setCollectionData(data);
  };

  console.log(JSON.stringify(collectionData));
  useEffect(() => {
    getCollectionData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionConvertName]);

  return (
    <project3Ctx.Provider
      value={{
        getCollectionData,
        collectionData,
        setCollectionData,
        collectionConvertName,
        setCollectionConvertName,
      }}
    >
      {children}
    </project3Ctx.Provider>
  );
}
