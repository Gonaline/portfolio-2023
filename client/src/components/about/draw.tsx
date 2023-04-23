import { FunctionComponentElement, ReactElement, useState } from 'react';
import { DrawStyle } from '../../style/about/drawStyle';

const width = Math.floor((window.innerWidth * 1) / 1);
const height = Math.floor((window.innerHeight * 1) / 1);
console.log(width);
console.log(height);

let array: any[] = [];

for (let i = 0; i < 800; i++) {
  const object = { id: i, className: 'yes' };

  array.push(object);
}

const Draw = (): FunctionComponentElement<ReactElement> => {
  const [result, setResult] = useState(array);

  async function onHover(id: any) {
    const newResult = result.map((e) => {
      if (e.id === id && e.className === 'yes') {
        return { id: e.id, className: 'no' };
      } else {
        return e;
      }
    });
    console.log(JSON.stringify(newResult));
    await setResult(newResult);
  }

  return (
    <DrawStyle>
      <section className='scraping'>
        {result.map((e) => (
          <button
            className={`case ${e.className}`}
            key={e.id}
            value={e.id}
            type='button'
            onMouseOver={() => {
              onHover(e.id);
            }}
          >
            {/* <p>{e.className}</p> */}
          </button>
        ))}
      </section>
      <section className='welcome'>
        <h2>BIENVENUE !</h2>
      </section>
    </DrawStyle>
  );
};
export default Draw;
