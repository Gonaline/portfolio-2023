import { FunctionComponentElement, ReactElement } from 'react';
import LeftStyle from '../style/leftStyle';

interface LeftProps {
  title: string;
  subtitle: string;
  description: string;
}

const Left = ({
  title,
  subtitle,
  description,
}: LeftProps): FunctionComponentElement<ReactElement> => {
  return (
    <LeftStyle>
      <div>
        <h4 className='subTitle'>{subtitle}</h4>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </LeftStyle>
  );
};
export default Left;
