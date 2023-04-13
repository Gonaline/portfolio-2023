import { FunctionComponentElement, ReactElement, useContext } from 'react';
import { ColorChoiceStyle } from '../../../style/project3/productStyle';
import project3Ctx from '../../../context/project3Ctx';
import { COLOR } from '../../../enums/project3/color.enum';

interface ColorChoiceProps {
  colors: string[] | undefined;
  code: string;
  updateData: (arg0: string, arg1: string) => void;
}

const ColorChoice = ({
  colors,
  code,
  updateData,
}: ColorChoiceProps): FunctionComponentElement<ReactElement> => {
  const { color1Choice, color2Choice } = useContext(project3Ctx);

  const currentColor: string | undefined =
    code === COLOR.CHOICE1 ? color1Choice : color2Choice;

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
                updateData(color, code);
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
