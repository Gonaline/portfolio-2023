import { FunctionComponentElement, ReactElement, useContext } from 'react';
import { ChoiceStyle } from '../../../style/project3/productStyle';
import IOption from '../../../interfaces/project3/option';
import project3ProductCtx from '../../../context/project3CtxProduct';
import { FOLDER } from '../../../enums/project3/folder.enum';
import { PAGE } from '../../../enums/page.enum';

interface OptionChoiceProps {
  option: IOption;
  code: string;
  updateOptions: (arg0: string, arg1: string) => void;
}

const OptionChoice = ({
  option,
  code,
  updateOptions,
}: OptionChoiceProps): FunctionComponentElement<ReactElement> => {
  const { optionChoice } = useContext(project3ProductCtx);

  return (
    <ChoiceStyle>
      {option && (
        <h5>
          <em>{`${option.name} ${optionChoice?.name}`}</em>
        </h5>
      )}
      <div className='choice'>
        {option.detail &&
          option.detail.map((option) => (
            <button
              className={`${
                optionChoice?.name === option.name ? 'selected' : ''
              } `}
              type='button'
              value={option.name}
              key={option.name}
              onClick={() => {
                updateOptions(JSON.stringify(option), code);
              }}
            >
              <img
                src={require(`../../../assets/pictures/${PAGE.PROJECT3}/${FOLDER.OPTIONS}/${option.img_code}.png`)}
                alt={option.name}
              />
            </button>
          ))}
      </div>
    </ChoiceStyle>
  );
};
export default OptionChoice;
