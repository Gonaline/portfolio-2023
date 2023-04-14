import { FunctionComponentElement, ReactElement, useContext } from 'react';
import { ColorChoiceStyle } from '../../../style/project3/productStyle';
import project3Ctx from '../../../context/project3Ctx';
import { OPTION } from '../../../enums/project3/option.enum';

interface ColorChoiceProps {
  colors: string[] | undefined;
  code: string;
  updateOptions: (arg0: string, arg1: string) => void;
}

const ColorChoice = ({
  colors,
  code,
  updateOptions,
}: ColorChoiceProps): FunctionComponentElement<ReactElement> => {
  const { color1Choice, color2Choice } = useContext(project3Ctx);

  const currentColor: string | null =
    code === OPTION.COLOR1 ? color1Choice : color2Choice;

  return (
    <ColorChoiceStyle>
      {currentColor && (
        <h5>
          <em>{`Coloris: ${currentColor
            .replaceAll('-', ' ')
            .replaceAll('_', ', ')}`}</em>
        </h5>
      )}
      <div className='choice'>
        {colors &&
          colors.map((color) => (
            <button
              className={`${currentColor === color ? 'selected' : ''} `}
              type='button'
              value={color}
              key={color}
              onClick={() => {
                updateOptions(color, code);
              }}
            >
              <img
                src={require(`../../../assets/pictures/project3/colors/${color}.png`)}
                alt={color}
              />
            </button>
          ))}
      </div>
    </ColorChoiceStyle>
  );
};
export default ColorChoice;
