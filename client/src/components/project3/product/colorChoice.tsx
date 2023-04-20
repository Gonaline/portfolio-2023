import { FunctionComponentElement, ReactElement, useContext } from 'react';
import { OPTION } from '../../../enums/project3/option.enum';
import project3ProductCtx from '../../../context/project3CtxProduct';
import { PAGE } from '../../../enums/page.enum';
import { FOLDER } from '../../../enums/project3/folder.enum';
import { ChoiceStyle } from '../../../style/project3/choiceStyle';

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
  const { color1Choice, color2Choice } = useContext(project3ProductCtx);

  const currentColor: string | null =
    code === OPTION.COLOR1 ? color1Choice : color2Choice;

  return (
    <ChoiceStyle>
      {currentColor && (
        <h5>
          <em>{`Coloris : ${
            currentColor === 'x'
              ? 'sans'
              : currentColor.replaceAll('-', ' ').replaceAll('_', ', ')
          }`}</em>
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
                src={require(`../../../assets/pictures/${PAGE.PROJECT3}/${FOLDER.COLORS}/${color}.png`)}
                alt={color}
              />
            </button>
          ))}
      </div>
    </ChoiceStyle>
  );
};
export default ColorChoice;
