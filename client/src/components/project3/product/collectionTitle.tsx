import { FunctionComponentElement, ReactElement, useContext } from 'react';
import { PAGE } from '../../../enums/page.enum';
import { CollectionTitleStyle } from '../../../style/project3/collectionTitleStyle';
import project3Ctx from '../../../context/project3Ctx';
import { FOLDER } from '../../../enums/project3/folder.enum';

const CollectionTitle = (): FunctionComponentElement<ReactElement> => {
  const { collectionName, collectionImage } = useContext(project3Ctx);

  return (
    <CollectionTitleStyle>
      {collectionImage && (
        <div className='collectionImage'>
          <img
            src={require(`../../../assets/pictures/${PAGE.PROJECT3}/${FOLDER.CATEGORIES}/${collectionImage}`)}
            alt='collection'
          />
        </div>
      )}
      <h4>{collectionName}</h4>
    </CollectionTitleStyle>
  );
};
export default CollectionTitle;
