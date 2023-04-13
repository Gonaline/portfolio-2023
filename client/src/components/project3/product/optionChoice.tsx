import { FunctionComponentElement, ReactElement, useContext } from 'react';
import { ColorChoiceStyle } from '../../../style/project3/productStyle';
import IOption from '../../../interfaces/project3/option';
import project3Ctx from '../../../context/project3Ctx';

interface OptionChoiceProps {
  option: IOption;
  code: string;
  updateData: (arg0: string, arg1: string) => void;
}

const OptionChoice = ({
  option,
  code,
  updateData,
}: OptionChoiceProps): FunctionComponentElement<ReactElement> => {
  const { optionChoice } = useContext(project3Ctx);

  return (
    <ColorChoiceStyle>
      {option && (
        <h5>
          <em>{`${option.name} : to do`}</em>
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
                updateData(JSON.stringify(option), code);
              }}
            >
              <img
                src={require(`../../../assets/pictures/project3/options/${option.img_code}.png`)}
                alt={option.name}
              />
            </button>
          ))}
      </div>
    </ColorChoiceStyle>
  );
};
export default OptionChoice;
