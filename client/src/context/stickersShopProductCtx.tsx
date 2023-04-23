import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import IProduct from '../interfaces/stickersShop/product';
import IPtickersShopProduct from '../interfaces/stickersShop/stickersShopProduct';
import stickersShopCtx from './stickersShopCtx';
import { IOptionDetail } from '../interfaces/stickersShop/optionDetail';

const stickersShopProductCtx = createContext<IPtickersShopProduct>({
  productData: {
    product_id: '',
    product_name: '',
    text_introduction: '',
    text_size: '',
    mirror: 0,
    price: 0,
    first_image: '',
    technicalFiles: [],
    colors: { fixed_color: null, first_group: [], second_group: null },
    option: null,
    collections: { main_category: '', detail: [] },
  },
  setProductData: () => {},

  fixedColor: null,
  setFixedColor: () => {},
  color1Choice: null,
  setColor1Choice: () => {},
  color2Choice: null,
  setColor2Choice: () => {},
  optionChoice: null,
  setOptionChoice: () => {},
  imageProduct: null,
  setImageProduct: () => {},
  isMirror: '',
  setIsMirror: () => {},

  resetProductData: () => {},
});

export default stickersShopProductCtx;

export function StickersShopProductCtxProvider({ children }: any): JSX.Element {
  const { productId, setProductId } = useContext(stickersShopCtx);

  const [productData, setProductData] = useState<IProduct>({
    product_id: '',
    product_name: '',
    text_introduction: '',
    text_size: '',
    mirror: 0,
    price: 0,
    first_image: '',
    technicalFiles: [],
    colors: { fixed_color: null, first_group: [], second_group: null },
    option: null,
    collections: { main_category: '', detail: [] },
  });

  const [fixedColor, setFixedColor] = useState<string | null>(null);
  const [color1Choice, setColor1Choice] = useState<string | null>(null);
  const [color2Choice, setColor2Choice] = useState<string | null>(null);
  const [optionChoice, setOptionChoice] = useState<IOptionDetail | null>(null);
  const [imageProduct, setImageProduct] = useState<string | null>(null);
  const [isMirror, setIsMirror] = useState<string>('');

  const urlParts = [
    '/stickers-shop/product/',
    '/stickers-shop/categories-by-product/',
    '/stickers-shop/technical-files/',
    '/stickers-shop/option/',
    '/stickers-shop/color/',
  ];
  const getProductById: any = async () => {
    Promise.all(
      urlParts.map((urlPart) =>
        axios.get(`${process.env.REACT_APP_BACKEND_URL}${urlPart}${productId}`)
      )
    ).then(
      ([
        { data: product },
        { data: categories },
        { data: technicalFiles },
        { data: option },
        { data: colors },
      ]) => {
        const dataObject = product;
        dataObject.technicalFiles = technicalFiles;
        dataObject.colors = colors;
        dataObject.option = option;
        dataObject.collections = categories;

        setProductData(dataObject);
      }
    );
  };

  const resetProductData: any = async () => {
    setProductId('');
    setProductData({
      product_id: '',
      product_name: '',
      text_introduction: '',
      text_size: '',
      mirror: 0,
      price: 0,
      first_image: '',
      technicalFiles: [],
      colors: { fixed_color: null, first_group: [], second_group: null },
      option: null,
      collections: { main_category: '', detail: [] },
    });
    setFixedColor(null);
    setColor1Choice(null);
    setColor2Choice(null);
    setOptionChoice(null);
    setImageProduct(null);
  };

  useEffect(() => {
    productId && getProductById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  return (
    <stickersShopProductCtx.Provider
      value={{
        productData,
        setProductData,

        fixedColor,
        setFixedColor,
        color1Choice,
        setColor1Choice,
        color2Choice,
        setColor2Choice,
        optionChoice,
        setOptionChoice,

        imageProduct,
        setImageProduct,
        isMirror,
        setIsMirror,

        resetProductData,
      }}
    >
      {children}
    </stickersShopProductCtx.Provider>
  );
}
