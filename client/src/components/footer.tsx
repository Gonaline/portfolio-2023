import { FunctionComponentElement, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import linkedinImg from '../assets/pictures/linkedin-icon.svg';
import githubImg from '../assets/pictures/github-icon.svg';
import FooterStyle from '../style/footerStyle';

interface FooterProps {
  color: string;
}

const Footer = ({
  color,
}: FooterProps): FunctionComponentElement<ReactElement> => {
  return (
    <FooterStyle color={color}>
      <div className='left' />
      <div className='links'>
        <Link to='https://www.linkedin.com/in/alinegonce/' target='_blank'>
          <img src={linkedinImg} alt='linkedin-icon' />
        </Link>
        <Link to='https://www.github.com/Gonaline' target='_blank'>
          <img src={githubImg} alt='github-icon' />
        </Link>
      </div>
    </FooterStyle>
  );
};
export default Footer;
