import { createContext, useEffect, useState } from 'react';
import { Project3Service } from '../services/project3';
import axios from 'axios';
import { COLLECTION } from '../enums/project3/collection.enum';
import IProject3 from '../interfaces/project3/project3';
import IProductsByCollection from '../interfaces/project3/productsByCollection';
import ICollection from '../interfaces/project3/collection';
import IProduct from '../interfaces/project3/product';
import IColor from '../interfaces/project3/color';
import ICategoryOfProduct from '../interfaces/project3/categoryOfProduct';
import IOption from '../interfaces/project3/option';
import { IOptionDetail } from '../interfaces/project3/optionDetail';

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
  productId: '',
  setProductId: () => {},

  productData: {
    product_id: '',
    product_name: '',
    text_introduction: '',
    text_size: '',
    mirror: 0,
    price: 0,
    first_image: '',
  },
  setProductData: () => {},
  technicalFiles: [],
  setTechnicalFiles: () => {},
  colors: { fixed_color: '', first_group: [], second_group: [] },
  setColors: () => {},
  option: {
    name: '',
    detail: [{ name: '', price: 0, img_code: '', color: '' }],
  },
  setOption: () => {},
  categoriesOfProduct: { main_category: '', detail: [] },
  setcategoriesOfProduct: () => {},

  color1Choice: '',
  setColor1Choice: () => {},
  color2Choice: '',
  setColor2Choice: () => {},
  optionChoice: {
    name: '',
    price: 0,
    img_code: '',
    color: '',
  },
  setOptionChoice: () => {},
  imageProduct: '',
  setImageProduct: () => {},
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
  const [productId, setProductId] = useState<string>('');
  const [productData, setProductData] = useState<IProduct>({
    product_id: '',
    product_name: '',
    text_introduction: '',
    text_size: '',
    mirror: 0,
    price: 0,
    first_image: '',
  });
  const [technicalFiles, setTechnicalFiles] = useState<string[]>([]);
  const [colors, setColors] = useState<IColor>({
    fixed_color: '',
    first_group: [],
    second_group: [],
  });
  const [option, setOption] = useState<IOption | null>();
  const [categoriesOfProduct, setcategoriesOfProduct] =
    useState<ICategoryOfProduct>({ main_category: '', detail: [] });

  const getCollectionName: any = async () => {
    const object = allCollections.filter(
      (e) => e.convert_category_name === collectionConvertName
    );
    setCollectionName(object[0].category_name);
  };

  const [color1Choice, setColor1Choice] = useState<string>('');
  const [color2Choice, setColor2Choice] = useState<string | null>('');
  const [optionChoice, setOptionChoice] = useState<IOptionDetail | null>({
    name: '',
    price: 0,
    img_code: '',
    color: '',
  });
  const [imageProduct, setImageProduct] = useState<string>('');

  const getProductsByCollection: any = async () => {
    const { data } = await Project3Service.getProductsByCategory(
      collectionConvertName
    );
    setProductsByCollection(data);
  };

  const getProductImage: any = async () => {
    const imageName = `${productId}${
      optionChoice !== null ? optionChoice.img_code : ''
    }${colors.fixed_color ? '_' + colors.fixed_color : ''}_${color1Choice}${
      color2Choice ? '_' + color2Choice : ''
    }.png`;
    setImageProduct(imageName);
  };

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
        setProductData(product);
        setTechnicalFiles(technicalFiles);
        setColors(colors);
        setOption(option);
        setcategoriesOfProduct(categories);
        option !== null
          ? setOptionChoice(option.detail[0])
          : setOptionChoice(null);
        setColor1Choice(colors.first_group[0]);
        colors.second_group.lenght !== 0 &&
          setColor2Choice(colors.second_group[0]);
      }
    );
  };

  useEffect(() => {
    getProductImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productData]);

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

  useEffect(() => {
    getProductById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

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
        productId,
        setProductId,

        productData,
        setProductData,
        technicalFiles,
        setTechnicalFiles,
        colors,
        setColors,
        option,
        setOption,
        categoriesOfProduct,
        setcategoriesOfProduct,

        color1Choice,
        setColor1Choice,
        color2Choice,
        setColor2Choice,
        optionChoice,
        setOptionChoice,
        imageProduct,
        setImageProduct,
      }}
    >
      {children}
    </project3Ctx.Provider>
  );
}
