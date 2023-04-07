import { createContext, useEffect, useState } from 'react';
import IProject3 from '../interfaces/project3/project3';
import IProductsByCollection from '../interfaces/project3/productsByCollection';
import { Project3Service } from '../services/project3';

const project3Ctx = createContext<IProject3>({
  getCollectionData: () => {},
  collectionData: [],
  setCollectionData: () => {},
});

export default project3Ctx;

export function Project3CtxProvider({ children }: any): JSX.Element {
  const [collectionData, setCollectionData] = useState<IProductsByCollection[]>(
    []
  );

  const getCollectionData: any = async () => {
    const { data } = await Project3Service.getProductsByCategory(
      'les-savanimo'
    );
    setCollectionData(data);
  };

  console.log(JSON.stringify(collectionData));
  useEffect(() => {
    getCollectionData();
  }, []);

  return (
    <project3Ctx.Provider
      value={{ getCollectionData, collectionData, setCollectionData }}
    >
      {children}
    </project3Ctx.Provider>
  );
}
