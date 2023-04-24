import { createContext, useEffect, useState } from 'react';
import { Project3Service } from '../services/stickersShop';
import { COLLECTION } from '../enums/stickersShop/collection.enum';
import IStickersShop from '../interfaces/stickersShop/stickersShop';
import IProductsByCollection from '../interfaces/stickersShop/productsByCollection';
import ICollection from '../interfaces/stickersShop/collection';

const stickersShopCtx = createContext<IStickersShop>({
  allCollections: [],
  setAllCollections: () => {},
  getProductsByCollection: () => {},
  productsByCollection: [],
  setProductsByCollection: () => {},
  collectionConvertName: COLLECTION.ALL_COLLECTIONS_CONVERT_NAME,
  setCollectionConvertName: () => {},
  collectionName: COLLECTION.ALL_COLLECTIONS,
  setCollectionName: () => {},
  collectionImage: COLLECTION.ALL_COLLECTIONS_IMAGE,
  setCollectionImage: () => {},
  isOpen: false,
  setIsOpen: () => {},
  productId: '',
  setProductId: () => {},
});

export default stickersShopCtx;

export function StickersShopCtxProvider({ children }: any): JSX.Element {
  const [allCollections, setAllCollections] = useState<ICollection[]>([]);
  const [collectionConvertName, setCollectionConvertName] = useState<string>(
    COLLECTION.ALL_COLLECTIONS_CONVERT_NAME
  );
  const [collectionName, setCollectionName] = useState<string>(
    COLLECTION.ALL_COLLECTIONS
  );
  const [collectionImage, setCollectionImage] = useState<string>(
    COLLECTION.ALL_COLLECTIONS_IMAGE
  );
  const [productsByCollection, setProductsByCollection] = useState<
    IProductsByCollection[]
  >([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [productId, setProductId] = useState<string>('');

  const getCollectionName: any = async () => {
    const object = allCollections.filter(
      (e) => e.convert_category_name === collectionConvertName
    );
    if (object.length > 0) {
      setCollectionName(object[0].category_name);
      setCollectionImage(object[0].img);
    }
  };

  const getProductsByCollection: any = async () => {
    if (collectionConvertName) {
      const { data } = await Project3Service.getProductsByCategory(
        collectionConvertName
      );
      await setProductsByCollection(data);
    }
  };

  useEffect(() => {
    getProductsByCollection();
    setIsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionConvertName, collectionName]);

  useEffect(() => {
    setIsOpen(false);
    getCollectionName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsByCollection]);

  return (
    <stickersShopCtx.Provider
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
        collectionImage,
        setCollectionImage,
        isOpen,
        setIsOpen,
        productId,
        setProductId,
      }}
    >
      {children}
    </stickersShopCtx.Provider>
  );
}
